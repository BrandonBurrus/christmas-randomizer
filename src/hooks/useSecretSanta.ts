import { useCallback, useEffect, useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { List } from 'immutable';

type SecretSantaName = { name: string; id: string };

const INIT_SECRET_SANTA_STATE = {
  names: List<SecretSantaName>(),
};

type SecretSantaState = typeof INIT_SECRET_SANTA_STATE;

/**
 * Serializes state object to a persistable string
 * (opposite of rehydrateState() function)
 */
function freezeDryState(state: SecretSantaState): string {
  return btoa(
    JSON.stringify({
      ...state,
      names: state.names.toArray(),
    })
  );
}

/**
 * Deserializes state from persistable string
 * (opposite of freezeDryState() function)
 */
function rehydrateState(state: string): SecretSantaState {
  try {
    const retrievedState: any = JSON.parse(atob(state));
    return {
      ...retrievedState,
      names: List(retrievedState.names),
    };
  } catch (e) {
    console.warn('Unable to rehydrate state with error:', e);
    return INIT_SECRET_SANTA_STATE;
  }
}

/**
 * Redux-like actions of secret santa reducer state
 */
type SecretSantaAction =
  | { type: 'ADD_NAME'; name: string }
  | { type: 'REMOVE_NAME'; id: string }
  | { type: 'MOVE_NAME'; id: string; toIndex: number }
  | { type: 'REHYDRATE'; persistedState: string };

/**
 * Redux-like secret santa state reducer
 */
function secretSantaReducer(state: SecretSantaState, action: SecretSantaAction) {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        names: state.names.push({
          name: action.name,
          id: uuid(),
        }),
      };
    case 'REMOVE_NAME':
      return {
        ...state,
        names: state.names.delete(state.names.findIndex(({ id }) => id === action.id)),
      };
    case 'MOVE_NAME': {
      const [idx, name] = state.names.findEntry(({ id }) => id === action.id);
      return {
        ...state,
        names: state.names.delete(idx).insert(action.toIndex, name),
      };
    }
    case 'REHYDRATE':
      return rehydrateState(action.persistedState);
    default:
      return state;
  }
}

/**
 * Custom hook to abstract the state management of a
 * secret santa list
 */
function useSecretSanta(localStorageKey: string = 'DEFAULT_SECRET_SANTA') {
  const [state, internalDispatch] = useReducer(secretSantaReducer, INIT_SECRET_SANTA_STATE);
  const [persist, setPersist] = useState(false);

  const dispatch = useCallback((...params: Parameters<typeof internalDispatch>) => {
    internalDispatch(...params);
    setPersist(true);
  }, []);

  useEffect(() => {
    const persistedState = localStorage.getItem(btoa(localStorageKey));
    if (persistedState) {
      dispatch({
        type: 'REHYDRATE',
        persistedState,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (persist) {
      localStorage.setItem(btoa(localStorageKey), freezeDryState(state));
      setPersist(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persist]);

  return [
    state,
    {
      addName: (name: string) => dispatch({ type: 'ADD_NAME', name }),
      removeName: (id: string) => dispatch({ type: 'REMOVE_NAME', id }),
      moveName: (id: string, toIndex: number) => dispatch({ type: 'MOVE_NAME', id, toIndex }),
    },
  ] as const;
}

export default useSecretSanta;
