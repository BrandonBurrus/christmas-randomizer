module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.lint.json',
    projectFolderIgnoreList: [
      "node_modules"
    ]
  },
  extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
    commonjs: true,
  },
  plugins: [
    '@typescript-eslint',
    'compat',
    'import',
    'jest',
    'jsx-a11y',
    'optimize-regex',
    'prettier',
    'promise',
    'react',
    'react-hooks',
    'react-perf',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      'babel-module': {},
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    },
    react: {
      version: require('./package.json').dependencies.react,
    },
  },
  rules: {
    'prettier/prettier': 'error',

    /* General ESLint rules */
    // https://eslint.org/docs/rules/
    'for-direction': 'off', // for-loops must increment by positive increments
    'getter-return': 'error', // Getters must have a return statement
    'no-async-promise-executor': 'error', // new Promise() callback cannot be async
    'no-await-in-loop': 'error', // Await keyword cannot be used in a loop
    'no-compare-neg-zero': 'warn', // No comparing against -0
    'no-cond-assign': 'error', // No using the assignment operator to make comparisons/checks
    'no-console': 'off', // No using console.log or similar
    'no-constant-condition': 'warn', // No using constant literals that result in single-branching conditions or loops
    'no-control-regex': 'warn', // No using special, invisible (ASCII) characters in regexps
    'no-debugger': 'off', // No debugger() statements
    'no-dupe-args': 'error', // Functions can't have duplicate arguments defined
    'no-dupe-else-if': 'error', // No 'else if' condition branches that are the same (check the same logic)
    'no-dupe-keys': 'error', // No duplicate keys that are identical in an object
    'no-duplicate-case': 'error', // No switch cases that are identical
    'no-empty': 'warn', // No empty block statements
    'no-empty-character-class': 'warn', // No empty (useless) character groups in regexps
    'no-ex-assign': 'error', // No reassigning exceptions in catch clauses
    'no-extra-boolean-cast': 'warn', // No unnecessary boolean coercion/casting
    'no-extra-parens': 'off', // No unnecessary parenthesis
    'no-extra-semi': 'error', // No unnecessary semicolons
    'no-func-assign': 'error', // No reassigning of functions
    'no-import-assign': 'error', // No reassigning imports
    'no-inner-declarations': 'off', // No nesting of function declaration
    'no-invalid-regexp': 'warn', // No invalid regexps
    'no-irregular-whitespace': 'warn', // No out of place or dangling whitespace
    'no-misleading-character-class': 'warn', // No regexps with misleading multiple code point characters
    'no-obj-calls': 'error', // No calling built-in globals (Math, JSON, Reflect) as functions
    'no-prototype-builtins': 'warn', // No direct usage of prototype methods, should be used from Object global
    'no-regex-spaces': 'warn', // No repeated spaces in regexps
    'no-setter-return': 'error', // No return statement in setters
    'no-sparse-arrays': 'error', // No arrays with empty slots from extra commas
    'no-template-curly-in-string': 'warn', // No template syntax in regular strings
    'no-unexpected-multiline': 'warn', // No expression where the end of line looks like a statement end, but isn't
    'no-unreachable': 'error', // No unreachable code because of early return or similar (throw, continue, break)
    'no-unsafe-finally': 'error', // No control flow (return, throw, etc) in finally, which alters try-catch flow
    'no-unsafe-negation': 'error', // No odd negation expressions when using `instanceof` and `in` operators
    'require-atomic-updates': 'error', // No assignments that lead to race conditions from `await` or `yield`
    'use-isnan': 'error', // Require using isNan() when evaluating a possible NaN
    'valid-typeof': 'error', // Typeof must be compared against a valid data type
    'accessor-pairs': 'error', // Getters and Setters must come in pairs
    'array-callback-return': 'error', // Array methods like map and filter are required to have a return statement
    'block-scoped-var': 'error', // Enforce keeping variables into more explicit block scope (more traditional scope)
    'class-methods-use-this': 'off', // Methods inside of classes are *forced* to use the `this` keyword
    complexity: ['off'], // (configurable) Depth of linear paths (how deep can code branches be)
    'consistent-return': 'error', // Any return statements have to be consistent in returning a value
    curly: 'error', // No floating statements that should be in curly braces (if or while branches)
    'default-case': 'off', // Require switch statements to have a default case
    'default-param-last': 'error', // Require that function params that have default values be last
    'dot-notation': 'error', // Enforce consistency when using dot notation over several lines
    'dot-location': 'off', // Prettier
    eqeqeq: 'error', // Always use === instead of ==
    'grouped-accessor-pairs': 'error', // Setters and Getters have to be right next to each other
    'guard-for-in': 'warn', // Force for-in loops to check that the property really exists in an object (hasOwnProperty)
    'max-classes-per-file': 'off', // (configurable) Maximum number of classes allowed per file
    'no-alert': 'error', // No alert(), confirm(), and prompt()
    'no-caller': 'error', // No use of `arguments.caller` or `arguments.callee` in functions
    'no-case-declarations': 'error', // No using `let`, `const`, `function`, or `class` in switch case statements
    'no-constructor-return': 'error', // No return statement from constructor
    'no-div-regex': 'error', // Regexp cannot start with /= which is division assignment
    'no-else-return': 'off', // Disallow return statements in else clauses
    'no-empty-function': 'warn', // No empty functions
    'no-empty-pattern': 'error', // No empty destructuring that doesn't create any variables
    'no-eq-null': 'error', // No making comparisons to null using ==
    'no-eval': 'error', // No using eval() functions
    'no-extend-native': 'error', // No extending built-in types or classes or prototype
    'no-extra-bind': 'error', // No unnecessary function bind()
    'no-extra-label': 'error', // No unnecessary labels in loops
    'no-fallthrough': 'off', // No fall through in switch statements
    'no-floating-decimal': 'error', // No numbers like this: -.5 (technically valid)
    'no-global-assign': 'warn', // No reassigning to built-in globals, example: `window`
    'no-implicit-coercion': 'warn', // No using operators to implicitly coerce data types
    'no-implicit-globals': 'error', // No accidentally leaking global variables (no applicable to modules)
    'no-implied-eval': 'error', // No implied use of the eval() function
    'no-invalid-this': 'warn', // No using `this` outside of classes
    'no-iterator': 'error', // No using the deprecated __iterator__ syntax
    'no-labels': 'off', // No using labels to break loops
    'no-lone-blocks': 'warn', // No using pointless blocks that aren't attached to a statement
    'no-loop-func': 'error', // No creating functions inside loop statements
    'no-magic-numbers': 'off', // No "magic" numbers that aren't defined as constants or constants
    'no-multi-spaces': 'warn', // No repeated empty spaces that aren't used for indentation
    'no-multi-str': 'error', // No multiline string using backslash \ escape
    'no-new': 'error', // Constrain the `new` keyword to be bound to a variable of some kind
    'no-new-func': 'error', // No creating functions by doing `new Function()`
    'no-new-wrappers': 'error', // No using new around something that can be created with a literal, no `new Number()`
    'no-octal': 'error', // No octal numbers
    'no-octal-escape': 'error', // No octal escapes in strings
    'no-param-reassign': 'error', // No reassigning function parameters
    'no-proto': 'error', // No using deprecated __proto__ syntax
    'no-redeclare': 'error', // No re-declaring variables that already exist
    'no-return-assign': 'error', // No assignment in return statement
    'no-return-await': 'warn', // No using await in return statement
    'no-script-url': 'error', // No urls like <a href="javascript:void(0)"> ...
    'no-self-assign': 'warn', // No reassigning anything back to itself
    'no-self-compare': 'warn', // No comparing something itself
    'no-sequences': 'error', // No putting multiple expressions together using commas
    'no-throw-literal': 'error', // Force throw to be `throw new Error()` or sub type of Error (predictable errors)
    'no-unmodified-loop-condition': 'warn', // Variables in loops have to be modified (or possible infinite loop)
    'no-unused-expressions': 'off', // No blank expressions
    'no-unused-labels': 'error', // No labels that aren't being used
    'no-useless-call': 'error', // No unnecessary function call() or apply()
    'no-useless-catch': 'error', // No catch clause that doesn't do anything
    'no-useless-concat': 'error', // No pointless concat
    'no-useless-escape': 'error', // No useless escapes in strings
    'no-useless-return': 'error', // No pointless return when you dont need to
    'no-void': 'error', // No using the void operator
    'no-warning-comments': 'off', // Marks TODO or FIXME commends as errors
    'no-with': 'error', // No using the `with` keyword
    'prefer-named-capture-group': 'off', // Force regexp capture groups to be named
    'prefer-promise-reject-errors': 'off', // Force promises to only reject errors
    'prefer-regex-literals': 'warn', // Force using regex literal instead of `new Regexp()`
    radix: 'warn', // Always specify the radix when calling parseInt()
    'require-unicode-regexp': 'warn', // Force regexps to use the unicode `u` flag
    'vars-on-top': 'off', // Force variables to be defined at the top before they're used (functions included)
    'wrap-iife': ['error', 'inside'], // Wrap IIFE statements with parenthesis
    yoda: 'warn', // Conditions where a literal comes before the variable, where code could be easier to read
    strict: 'off', // Force the "use strict"; at the top of every module
    'init-declarations': 'off', // Force variables to be initialized when declared
    'no-delete-var': 'warn', // No using the delete operator on variables
    'no-label-var': 'error', // No naming labels the same as variables
    'no-shadow': 'off', // No variables that shadow higher scoped variables
    'no-shadow-restricted-names': 'error', // No defining variables that use non-keyword words - example `undefined`
    'no-undef': 'warn', // No using unknown globals that aren't defined
    'no-undef-init': 'off', // No defining variables that are initialized as undefined
    'no-undefined': 'off', // No shadowing the undefined keyword
    'no-unused-vars': 'off', // No variables that don't get used
    'no-use-before-define': 'off', // Variables must be defined before being used
    'callback-return': 'off', // Force callback functions to be returned from the caller function
    'global-require': 'off', // Calling require() needs to be at the top level of a file
    'handle-callback-err': 'warn', // Force node-style callbacks to handle a possible err value
    'no-buffer-constructor': 'warn', // No creating Buffers from the constructor, use other allocation methods
    'no-mixed-requires': 'off', // No mixing of different types of require() calls
    'no-new-require': 'error', // No combining `new` and a require() statement
    'no-path-concat': 'warn', // No concatenating paths as strings, use path.join() or path.resolve()
    'no-process-env': 'off', // No using process.env
    'no-process-exit': 'off', // No using process.exit()
    'no-sync': 'warn', // No using synchronous Node.js methods
    'array-bracket-newline': 'off', // Prettier
    'array-bracket-spacing': 'off', // Prettier
    'array-element-newline': 'off', // Prettier
    'block-spacing': 'off', // Prettier
    'brace-style': 'off', // Prettier
    camelcase: ['warn', { ignoreDestructuring: true }], // enforce camel case notation
    'capitalized-comments': 'off', // First letter in comments needs to be capitalized
    'comma-dangle': 'off', // Prettier
    'comma-spacing': 'off', // Prettier
    'computed-property-spacing': 'off', // Prettier
    'consistent-this': 'warn', // Enforce consistent usage of the `this` keyword/context
    'eol-last': 'off', // Prettier
    'func-call-spacing': 'off', // Prettier
    'func-name-matching': 'warn', // Function names need to match variable/property name they are assigned to
    'func-names': "off", // Functions need to be named
    'func-style': 'off', // Prettier
    'function-call-argument-newline': 'off', // Prettier
    'function-paren-newline': 'off', // Prettier
    'id-blacklist': ['off'], // List of blacklisted identifiers (may change as project progresses)
    'id-length': ['warn', { min: 1, max: 48, exceptions: ['_'] }], // How small/large identifiers may be
    'id-match': 'off', // Regexp that identifiers have to match
    'implicit-arrow-linebreak': 'off', // Prettier
    indent: 'off', // Prettier
    'jsx-quotes': 'off', // Prettier
    'key-spacing': 'off', // Prettier
    'keyword-spacing': 'off', // Prettier
    'line-comment-position': 'off', // Prettier
    'linebreak-style': 'off', // Prettier
    'lines-around-comment': 'off', // Prettier
    'lines-between-class-members': 'off', // Prettier
    'max-depth': 'off', // Maximum depth that blocks can be nested
    'max-len': 'off', // Prettier
    'max-lines': ['warn', 300], // Maximum number of lines per file
    'max-lines-per-function': 'off', // Maximum number of lines per function
    'max-nested-callbacks': 'off', // Maximum depth that callbacks can be nested
    'max-params': ['warn', 6], // Maximum number of params a function can have
    'max-statements': 'off', // Maximum number of statements allowed in a function
    'max-statements-per-line': ['warn', { max: 3 }], // Maximum number of statements allowed per line
    'multiline-comment-style': 'off', // Prettier
    'multiline-ternary': 'off', // Prettier
    'new-cap': 'warn', // Constructors are capitalized
    'new-parens': ['error', 'always'], // Require object instantiation constructors to have parens `new Config()`
    'newline-per-chained-call': 'off', // Prettier
    'no-array-constructor': 'error', // No using `new Array()`
    'no-bitwise': 'off', // No using bitwise operators
    'no-continue': 'off', // No using `continue` keyword
    'no-inline-comments': 'off', // Prettier
    'no-lonely-if': 'warn', // No single if statements in else clauses
    'no-mixed-operators': 'off', // Prettier
    'no-mixed-spaces-and-tabs': 'off', // Prettier
    'no-multi-assign': 'error', // No chaining assignments into single expression
    'no-multiple-empty-lines': 'off', // Prettier
    'no-negated-condition': 'warn', // Avoid negative evaluation when positive evaluation is possible
    'no-nested-ternary': 'off', // No combining multiple ternary operations together (hard to read)
    'no-new-object': 'error', // No `new Object()`
    'no-plusplus': 'off', // No using ++ and -- operators
    'no-restricted-syntax': 'off', // Prettier
    'no-tabs': 'off', // Prettier
    'no-ternary': 'off', // No using the ?: ternary operator
    'no-trailing-spaces': 'off', // Prettier
    'no-underscore-dangle': ['warn', { allowAfterThis: true }], // No starting/ending identifiers with _
    'no-unneeded-ternary': 'warn', // No using ternary when shorter/easier alternative exists (increases readability)
    'no-whitespace-before-property': 'off', // Prettier
    'nonblock-statement-body-position': 'off', // Prettier
    'object-curly-newline': 'off', // Prettier
    'object-curly-spacing': 'off', // Prettier
    'object-property-newline': 'off', // Prettier
    'one-var': 'off', // Force variables to be defined together
    'one-var-declaration-per-line': 'off', // Prettier
    'operator-assignment': ['warn', 'always'], // Prefer shorthand assignment operator (like +=)
    'operator-linebreak': 'off', // Prettier
    'padded-blocks': 'off', // Prettier
    'padding-line-between-statements': 'off', // Prettier
    'prefer-exponentiation-operator': 'off', // Prefer ** operator instead of Math.pow()
    'prefer-object-spread': 'off', // Prefer ... spread operator instead of Object.assign()
    'quote-props': 'off', // Prettier
    quotes: 'off', // Prettier
    semi: 'off', // Prettier
    'semi-spacing': 'off', // Prettier
    'semi-style': 'off', // Prettier
    'sort-keys': 'off', // Force object keys/properties to be in order
    'sort-vars': 'off', // Force variables to be in order
    'space-before-blocks': 'off', // Prettier
    'space-before-function-paren': 'off', // Prettier
    'space-in-parens': 'off', // Prettier
    'space-infix-ops': 'off', // Prettier
    'space-unary-ops': 'off', // Prettier
    'spaced-comment': 'off', // Prettier
    'switch-colon-spacing': 'off', // Prettier
    'template-tag-spacing': 'off', // Prettier
    'unicode-bom': 'off', // Require unicode byte order mark
    'wrap-regex': 'off', // Prettier
    'arrow-body-style': 'off', // Prettier
    'arrow-parens': 'off', // Prettier
    'arrow-spacing': 'off', // Prettier
    'constructor-super': 'warn', // Subclasses must call `super()` in their constructors
    'generator-star-spacing': 'off', // Prettier
    'no-class-assign': 'error', // No reassigning class identifiers
    'no-confusing-arrow': 'off', // Prettier
    'no-const-assign': 'error', // No reassigning const variables (enforce constants)
    'no-dupe-class-members': 'off', // No class members that have the same identifier
    'no-duplicate-imports': 'error', // Ensure that imports are grouped together correctly, and not duplicated
    'no-new-symbol': 'error', // Ensure that Symbol is called as a function and not as a constructor
    'no-restricted-imports': ['error'], // List of blacklisted imports
    'no-this-before-super': 'warn', // No using `this` before `super` is invoked
    'no-useless-computed-key': 'warn', // Force object keys/properties that are being computed to be static when possible
    'no-useless-constructor': 'off', // No empty constructor
    'no-useless-rename': 'warn', // No repeated/useless renaming
    'no-var': 'warn', // No using `var` keyword; use `const` or `let` instead
    'object-shorthand': 'warn', // Prefer object es6 member shorthand notation
    'prefer-arrow-callback': 'warn', // Prefer using arrow functions as callbacks
    'prefer-const': 'warn', // Prefer to use const for variables that dont change
    'prefer-destructuring': 'off', // Prefer to always use destructuring syntax
    'prefer-numeric-literals': 'warn', // Always try to use literals instead of parseInt()
    'prefer-rest-params': 'error', // Prefer rest operator to collect variadic args instead of legacy `arguments` syntax
    'prefer-spread': 'warn', // Always try to use ... spread operator instead of calling apply()
    'prefer-template': 'off', // Force using template literals instead of concatenation
    'require-yield': 'off', // Generator functions must have a yield statement
    'rest-spread-spacing': 'off', // Prettier
    'sort-import': 'off', // Imports have to be sorted
    'symbol-description': 'warn', // Require that symbols have descriptions
    'template-curly-spacing': 'off', // Prettier
    'yield-star-spacing': 'off', // Prettier

    /* TypeScript rules */
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    '@typescript-eslint/adjacent-overload-signatures': 'warn', // Member overloads have to be grouped together
    '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }], // Use consistent array typing
    '@typescript-eslint/await-thenable': 'warn', // await can only be used with objects that are Thenable
    '@typescript-eslint/ban-ts-ignore': 'off', // No using @ts-ignore comments to escape type system
    '@typescript-eslint/ban-types': 'off', // List of blacklisted types
    '@typescript-eslint/brace-style': 'off', // Prettier
    '@typescript-eslint/consistent-type-assertions': 'warn', // Force consistent type casting
    '@typescript-eslint/consistent-type-definitions': 'off', // Force consistent usage of `interface` or `type`
    '@typescript-eslint/default-param-last': 'error', // Force params with default values be last
    '@typescript-eslint/explicit-function-return-type': 'off', // Force param return type to not be inferred
    '@typescript-eslint/explicit-member-accessibility': 'off', // Force members to have explicit access defined (public or private)
    '@typescript-eslint/func-call-spacing': 'off', // Prettier
    '@typescript-eslint/indent': 'off', // Prettier
    '@typescript-eslint/member-delimiter-style': 'off', // Prettier
    '@typescript-eslint/member-ordering': 'off', // Prettier
    '@typescript-eslint/naming-convention': 'off', // Prettier
    '@typescript-eslint/no-array-constructor': 'error', // No using `new Array()`
    '@typescript-eslint/no-dynamic-delete': 'error', // No using delete keyword/operator
    '@typescript-eslint/no-empty-function': 'warn', // No functions without a body
    '@typescript-eslint/no-empty-interface': 'off', // No interface that doesn't have a definition
    '@typescript-eslint/no-explicit-any': 'off', // No using the `any` type
    '@typescript-eslint/no-extra-non-null-assertion': 'warn', // No unnecessary type coercion for null checking
    '@typescript-eslint/no-extra-parens': 'off', // Prettier
    '@typescript-eslint/no-extra-semi': 'off', // Prettier
    '@typescript-eslint/no-extraneous-class': 'error', // No using classes as namespaces
    '@typescript-eslint/no-floating-promises': 'off', // No promises that dont have errors not handled
    '@typescript-eslint/no-for-in-array': 'warn', // No using for-in loop on arrays
    '@typescript-eslint/no-implied-eval': 'error', // No using eval-like functions
    '@typescript-eslint/no-inferrable-types': 'off', // No explicit typing of literals that can be easily inferred
    '@typescript-eslint/no-magic-numbers': 'off', // No "magic" numbers that aren't defined as constants or constants
    '@typescript-eslint/no-misused-new': 'warn', // Force valid type definitions of `new` and `constructor`
    '@typescript-eslint/no-misused-promises': 'warn', // Avoid using promises without proper handling
    '@typescript-eslint/no-namespace': 'off', // No using deprecated namespace syntax
    '@typescript-eslint/no-non-null-assertion': 'off', // No explicitly unwrapping optional values that could result in errors
    '@typescript-eslint/no-parameter-properties': 'warn', // No adding access to function parameter (public/private/etc)
    '@typescript-eslint/no-require-imports': 'off', // No using node require() function for imports
    '@typescript-eslint/no-this-alias': 'warn', // No renaming `this`
    '@typescript-eslint/no-throw-literal': 'error', // Require that `throw` always throw an error object
    '@typescript-eslint/no-unnecessary-condition': 'off', // Rely on types to ensure non-nullability
    '@typescript-eslint/no-unnecessary-qualifier': 'error', // No adding namespaces where avoidable
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn', // No explicit specifying of implied type arguments (generics)
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn', // No adding type assertions when not needed
    '@typescript-eslint/no-untyped-public-signature': 'off', // No public methods with inferred types
    '@typescript-eslint/no-unused-vars': 'warn', //
    '@typescript-eslint/no-use-before-define': 'off', // Variables must be defined before being used
    '@typescript-eslint/no-useless-constructor': 'off', // No empty constructor
    '@typescript-eslint/no-var-requires': 'off', // Prefer combined import/require syntax
    '@typescript-eslint/prefer-for-of': 'warn', // Use for-of loop when possible
    '@typescript-eslint/prefer-function-type': 'error', // Avoid blank function interfaces
    '@typescript-eslint/prefer-includes': 'warn', // Use array or string includes() method instead of indexOf()
    '@typescript-eslint/prefer-namespace-keyword': 'off', // Prefer `namespace` instead of `module` keyword
    '@typescript-eslint/prefer-nullish-coalescing': 'warn', // Use ?? operator instead of || operator
    '@typescript-eslint/prefer-optional-chain': 'warn', // Use optional chaining when possible
    '@typescript-eslint/prefer-readonly': 'off', // Prefer to mark private members as readonly when they dont change
    '@typescript-eslint/prefer-regexp-exec': 'warn', // Use /abc/.exec('abc') instead of 'abc'.match(/abc/) (exec is faster than match on performance)
    '@typescript-eslint/prefer-string-starts-ends-with': 'warn', // Prefer to use startsWith and endsWith methods
    '@typescript-eslint/promise-function-async': 'off', // Require functions that return promises be marked async
    '@typescript-eslint/quotes': 'off', // Prettier
    '@typescript-eslint/require-array-sort-compare': 'warn', // Require that array.sort() always have a sort function
    '@typescript-eslint/require-await': 'warn', // Force async functions to have an await in them
    '@typescript-eslint/restrict-plus-operands': 'error', // No type coercion when values aren't of the same type
    '@typescript-eslint/restrict-template-expressions': 'off', // Apply restrictions to template literal syntax
    '@typescript-eslint/return-await': 'off', // No allowed return await in async functions (redundant async)
    '@typescript-eslint/semi': 'off', // Prettier
    '@typescript-eslint/space-before-function-paren': 'off', // Prettier
    '@typescript-eslint/strict-boolean-expressions': 'off', // Use stricter expression usage when using booleans
    '@typescript-eslint/triple-slash-reference': 'off', // Avoid usage of deprecate typescript triple slash directives
    '@typescript-eslint/type-annotation-spacing': 'off', // Prettier
    '@typescript-eslint/typedef': 'off', // No using inferred typing
    '@typescript-eslint/unbound-method': 'warn', // Avoid using methods outside of method call
    '@typescript-eslint/unified-signatures': 'warn', // Prefer union types instead of method overloading

    /* Import rules */
    // https://github.com/benmosher/eslint-plugin-import#rules
    'import/no-unresolved': 'warn', // Import module must be resolvable
    'import/named': 'off', // Named imports must be defined in resolved imports
    'import/default': 'off', // Default imports must be defined in resolved imports
    'import/namespace': 'off', // Wildcard import identifiers are valid when dereferenced
    'import/no-restricted-paths': 'off', // Constrain imports to specific file trees
    'import/no-absolute-path': 'warn', // Force relative path resolving instead of absolute paths
    'import/no-dynamic-require': 'off', // require() cannot be used with an expression
    'import/no-internal-modules': 'off', // Blacklist of importing sub-modules of other modules
    'import/no-webpack-loader-syntax': 'warn', // No webpack importing syntax
    'import/no-self-import': 'error', // Modules cannot import themselves
    'import/no-cycle': 'error', // No cyclical importing
    'import/no-useless-path-segments': 'warn', // Avoid longer path segments when shorter ones are available
    'import/no-relative-parent-imports': 'off', // No importing from parent directories
    'import/export': 'warn', // No invalid/repeated exports
    'import/no-named-as-default': 'off', // No named exports that are the default export
    'import/no-named-as-default-member': 'off', // No using named exports when imported
    'import/no-deprecated': 'warn', // No importing anything marked as @deprecated
    'import/no-extraneous-dependencies': 'error', // No importing of something not in package.json
    'import/no-mutable-exports': 'warn', // No exporting of anything thats not a constant
    'import/unambiguous': 'off', // Warn if a module could be parsed as a script (no applicable to module environment)
    'import/no-commonjs': 'off', // No using CommonJS import/export syntax (aka no module.exports/require())
    'import/no-amd': 'warn', // No using AMD import/export syntax
    'import/no-nodejs-modules': 'off', // No using Node.js core modules (like path, fs, or http)
    'import/first': 'warn', // All imports have to be at the top of a file
    'import/exports-last': 'off', // Exports have to be at the bottom of the file
    'import/no-duplicates': 'warn', // Ensure all imports from same modules are grouped together
    'import/no-namespace': 'warn', // No wildcard imports
    'import/extensions': 'off', // Force consistency of import extensions
    'import/order': 'off', // Imports have to be in a specific order
    'import/newline-after-import': 'off', // Prettier
    'import/prefer-default-export': 'off', // Always try to use default exports before named exports
    'import/max-dependencies': 'off', // Enforce limit of number of imports
    'import/no-unassigned-import': 'off', // No floating import statements that don't do anything
    'import/no-named-default': 'off', // Default export cannot also have an identifier
    'import/no-anonymous-default-export': 'off', // No unnamed default export
    'import/no-named-export': 'off', // No named exports (default only)
    'import/no-anonymous-default-export': 'off', // Default export must have an identifier
    'import/group-exports': 'off', // Exports must be grouped together into a single declaration
    'import/dynamic-import-chunkname': 'off', // No dynamic import() syntax

    /* Jest rules */
    // https://github.com/jest-community/eslint-plugin-jest#rules
    'jest/consistent-test-it': 'off', // Force consistent usage of either it() or test() descriptions
    'jest/expect-expect': 'off', // Every test must have some sort of expect()
    'jest/lowercase-name': 'off', // Every test description must start with a lowercase letter
    'jest/no-alias-methods': 'off', // No using methods that have multiple names
    'jest/no-commented-out-tests': 'off', // No tests that are commented out
    'jest/no-disabled-tests': 'warn', // No tests that use syntax that disables them
    'jest/no-duplicate-hooks': 'warn', // No tests with duplicate lifecycle hooks (multiple beforeEach, etc)
    'jest/no-expect-resolves': 'off', // No using expect().resolves
    'jest/no-export': 'error', // No exporting from tests
    'jest/no-focused-tests': 'warn', // No tests that are focused using .only() jest API (used to isolate failing tests)
    'jest/no-hooks': 'off', // No test lifecycle hooks that do setup/teardown
    'jest/no-identical-title': 'warn', // No tests with identical descriptions
    'jest/no-if': 'warn', // No if statements in tests
    'jest/no-jasmine-globals': 'warn', // Prefer jest globals instead of jasmine globals
    'jest/no-jest-import': 'warn', // No importing from jest (globals are always available in tests)
    'jest/no-large-snapshots': 'off', // No snapshots tests that are very large (test small units)
    'jest/no-mocks-import': 'warn', // No direct importing from __mocks__
    'jest/no-standalone-expect': 'warn', // Force expect() to be inside a test descriptor
    'jest/no-test-callback': 'off', // Prefer promises instead of callback style asynchronous testing
    'jest/no-test-prefixes': 'warn', // Prefer .only() and .skip() over ftest() and xtest()
    'jest/no-test-return-statement': 'warn', // Avoid to return from test functions/callbacks
    'jest/no-truthy-falsy': 'warn', // Avoid checking for truthy/falsy values
    'jest/no-try-expect': 'warn', // Prefer to use expect().toThrow() instead of try-catch
    'jest/prefer-called-with': 'warn', // Avoid using toBeCalled() in favor of more specific
    'jest/prefer-expect-assertions': 'off', // Force expect.assertions() or expect.hasAssertions()
    'jest/prefer-hooks-on-top': 'warn', // Test lifecycle hooks should be defined at the top of a test
    'jest/prefer-inline-snapshots': 'off', // Prefer to use Inline snapshots instead of external
    'jest/prefer-spy-on': 'warn', // Prefer to use spies instead of hard implementation mocks (that cant be restored)
    'jest/prefer-strict-equal': 'warn', // Prefer to always use .toStrictEqual()
    'jest/prefer-to-be-null': 'warn', // Always use .toBeNull() when checking null values
    'jest/prefer-to-be-undefined': 'warn', // Always use .toBeUndefined() when checking undefined values
    'jest/prefer-to-contain': 'warn', // Use .toContain() instead of expect(arr.includes(0)).toBe(someValue)
    'jest/prefer-to-have-length': 'warn', // Use .toHaveLength() instead of expect(arr.length).toBe(1)
    'jest/prefer-todo': 'warn', // Empty tests should have test.todo()
    'jest/require-top-level-describe': 'warn', // Every test should have a top-level describe block explaining the test
    'jest/require-to-throw-message': 'off', // Force .toThrow() have a description
    'jest/valid-describe': 'warn', // Ensure consistent usage of describe() functions/callbacks
    'jest/valid-expect-in-promise': 'warn', // Ensure that promises with assertions are properly handled
    'jest/valid-expect': 'warn', // Ensure proper usage of expect() assertions
    'jest/valid-title': 'warn', // Ensure tests have titles that aren't invalid/empty

    /* JSX Accessibility rules */
    // https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules
    'jsx-a11y/accessible-emoji': 'warn', // Emojis should be wrapped in span tag and provide screen-reader access
    'jsx-a11y/alt-text': 'warn', // Elements like Images should have alt text for screen-readers
    'jsx-a11y/anchor-has-content': 'warn', // Anchors should contain accessible content
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ], // Anchors should navigate to valid elements/locations
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn', // Ensure Aria active descendant has a tab index
    'jsx-a11y/aria-props': 'warn', // Ensure that aria props are valid
    'jsx-a11y/aria-proptypes': 'warn', // Ensure aria state/property values are valid
    'jsx-a11y/aria-role': 'warn', // Ensure valid, non-abstract aria roles
    'jsx-a11y/aria-unsupported-elements': 'warn', // Ensure valid use of aria roles, states, and properties on valid elements
    'jsx-a11y/click-events-have-key-events': 'warn', // Clickable elements must at least 1 event listener/handler
    'jsx-a11y/heading-has-content': 'warn', // h* (heading) tags must have valid content
    'jsx-a11y/html-has-lang': 'warn', // Ensure html tags have a valid `lang` prop
    'jsx-a11y/iframe-has-title': 'warn', // iframes should have a `title` prop
    'jsx-a11y/img-redundant-alt': 'warn', // img alt prop shouldn't contain words like "image" or "photo" (redundant)
    'jsx-a11y/interactive-supports-focus': 'warn', // Any interactive elements must be focusable
    'jsx-a11y/label-has-associated-control': 'warn', // All labels should have an associated element
    'jsx-a11y/lang': 'warn', // lang attributes must be valid languages
    'jsx-a11y/media-has-caption': 'warn', // Any media should have caption track elements
    'jsx-a11y/mouse-events-have-key-events': 'warn', // Ensure that any clickable elements also support keyboard-only navigation/usage
    'jsx-a11y/no-access-key': 'warn', // Avoid using accessKey prop to avoid screen-reader keyboard confusion
    'jsx-a11y/no-autofocus': 'warn', // Avoid using autoFocus prop
    'jsx-a11y/no-distracting-elements': 'warn', // Avoid using distracting elements
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn', // Avoid mismatching interactive/non-interactive roles
    'jsx-a11y/no-noninteractive-element-interactions': 'warn', // Non-interactive elements should have interaction events
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn', // Non-interactive elements shouldn't have interactive roles
    'jsx-a11y/no-noninteractive-tabindex': 'warn', // Non-interactive elements should have a tab index
    'jsx-a11y/no-onchange': 'warn', // No using onBlur or onChange event listeners/handlers
    'jsx-a11y/no-redundant-roles': 'warn', // No roles that don't apply to certain elements
    'jsx-a11y/no-static-element-interactions': [
      'warn',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ], // Any elements that have interactions also need to have roles
    'jsx-a11y/role-has-required-aria-props': 'warn', // Ensure specific aria roles have correct aria props
    'jsx-a11y/role-supports-aria-props': 'warn', // Defined aria props need to correlate to defined aria role
    'jsx-a11y/scope': 'warn', // scope prop should only be used on table header (th) elements
    'jsx-a11y/tabindex-no-positive': 'warn', // Avoid positive tab indices

    /* Optimize RegEx rules */
    // https://github.com/BrainMaestro/eslint-plugin-optimize-regex#rules
    'optimize-regex/optimize-regex': 'warn', // Ensure that regexps are properly optimized and not unnecessarily complicated

    /* Promise rules */
    // https://github.com/xjamundx/eslint-plugin-promise#rules
    'promise/always-return': 'off', // Promises must always either have .catch() or be returned
    'promise/no-return-wrap': 'error', // Avoid wrapping resolve/reject values when not needed
    'promise/param-names': 'error', // new promise resolve/reject functions to always be named the same
    'promise/catch-or-return': ['warn', { allowFinally: true, allowThen: true }], // Ensure .then() returns to always have promise chains
    'promise/no-native': 'off', // Require promise lib (like bluebird) polyfills promise
    'promise/no-nesting': 'warn', // Avoid nesting .then() or .catch() inside each other (chain instead)
    'promise/no-promise-in-callback': 'warn', // Avoid using promises in callbacks
    'promise/no-callback-in-promise': 'warn', // Avoid using callbacks in promises
    'promise/avoid-new': 'off', // No using promise constructors (use utility lib instead)
    'promise/no-new-statics': 'error', // No using promise constructor on static promise methods
    'promise/no-return-in-finally': 'warn', // No return statements in .finally() blocks
    'promise/valid-params': 'warn', // Ensure proper promise params are defined in promise functions/callbacks
    'promise/prefer-await-to-then': 'off', // Prefer using await/async to .then()
    'promise/prefer-await-to-callbacks': 'off', // Prefer await/async to the callback pattern

    /* React rules */
    // https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules
    'react/boolean-prop-naming': 'off', // Force specific bool prop naming convention
    'react/button-has-type': 'warn', // Buttons need to have a `type` prop
    'react/default-props-match-prop-types': 'warn', // Prop types should match props object defaults
    'react/destructuring-assignment': 'off', // Force using destructuring on props
    'react/display-name': 'off', // All components must have a display name
    'react/forbid-component-props': 'off', // Black list of certain props on components
    'react/forbid-dom-props': 'off', // Blacklist of certain props on dom elements
    'react/forbid-elements': 'off', // Blacklist of certain elements
    'react/forbid-prop-types': 'off', // Blacklist of certain prop types
    'react/forbid-foreign-prop-types': 'off', // Blacklist of certain foreign prop types
    'react/no-access-state-in-setstate': 'warn', // No using this.state in this.setState()
    'react/no-array-index-key': 'error', // No using array indices as keys
    'react/no-children-prop': 'error', // No passing children as props
    'react/no-danger': 'error', // No using dangerous "set inner html" APIs
    'react/no-danger-with-children': 'error', // No using dangerous inner html apis with children
    'react/no-deprecated': 'error', // No using deprecated react APIs
    'react/no-did-mount-set-state': 'warn', // No using setState() inside of componentDidMount()
    'react/no-did-update-set-state': 'warn', // No using setState() inside of componentDidUpdate()
    'react/no-direct-mutation-state': 'error', // No mutating this.state directly (use setState() instead)
    'react/no-find-dom-node': 'warn', // No using findDOMNode() method
    'react/no-is-mounted': 'warn', // No tracking if a component is mounted
    'react/no-multi-comp': 'off', // One component per file
    'react/no-redundant-should-component-update': 'error', // No defining shouldComponentUpdate() in pure components
    'react/no-render-return-value': 'warn', // No using the return value from ReactDom.render();
    'react/no-set-state': 'off', // No using setState() (no local state, only derived global state)
    'react/no-typos': 'warn', // Prevent common typos
    'react/no-string-refs': 'error', // No using deprecated string refs react API
    'react/no-this-in-sfc': 'warn', // No using `this` in stateless functional components
    'react/no-unescaped-entities': 'off', // Ensure certain entities are properly escaped
    'react/no-unknown-property': 'warn', // Ensure no invalid element props are used
    'react/no-unsafe': 'warn', // No using unsafe lifecycle methods
    'react/no-unused-prop-types': 'warn', // No prop types that dont get used
    'react/no-unused-state': 'warn', // No state that doesn't do anything
    'react/no-will-update-set-state': 'warn', // No using setState in componentWillUpdate()
    'react/prefer-es6-class': 'error', // Alway use ES6 class components
    'react/prefer-read-only-props': 'warn', // Ensure that props are always read-only
    'react/prefer-stateless-function': 'warn', // Components that don't have state should always be functional components
    'react/prop-types': 'off', // Components always have to have propTypes
    'react/react-in-jsx-scope': 'warn', // Ensure React is imported when using JSX
    'react/require-default-props': 'off', // Require default props definition for any non-required prop
    'react/require-optimization': 'off', // Force all components to implement shouldComponentUpdate() or be a PureComponent
    'react/require-render-return': 'error', // All render() methods must return a value
    'react/self-closing-comp': 'warn', // Components with no children should be self-closing
    'react/sort-comp': 'off', // Force component import ordering
    'react/sort-prop-types': 'off', // Force all prop types to be ordered
    'react/state-in-constructor': 'off', // State must always be initialized in constructors
    'react/static-property-placement': 'off', // Force position of static members in react class components
    'react/style-prop-object': 'warn', // Ensure proper style prop object
    'react/void-dom-elements-no-children': 'error', // Self-closing elements (like img or br) shouldn't have children
    'react/jsx-boolean-value': 'warn', // boolean prop defaults to true, avoid setting explicitly
    'react/jsx-child-element-spacing': 'off', // Prettier
    'react/jsx-closing-bracket-location': 'off', // Prettier
    'react/jsx-closing-tag-location': 'off', // Prettier
    'react/jsx-curly-newline': 'off', // Prettier
    'react/jsx-curly-spacing': 'off', // Prettier
    'react/jsx-equals-spacing': 'off', // Prettier
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }], // No JSX in non JSX/TSX file extensions
    'react/jsx-first-prop-new-line': 'off', // Prettier
    'react/jsx-handler-names': 'off', // Enforce certain event handler naming conventions
    'react/jsx-indent': 'off', // Prettier
    'react/jsx-indent-props': 'off', // Prettier
    'react/jsx-key': 'error', // Arrays need to have valid keys for efficient list reconciliation
    'react/jsx-max-depth': 'off', // Maximum depth allowed in JSX
    'react/jsx-max-props-per-line': 'off', // Maximum number of props per line
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true }], // No using bind in jsx props
    'react/jsx-no-comment-textnodes': 'warn', // Prevent comments being added as text nodes
    'react/jsx-no-duplicate-props': 'warn', // No identical props to one JSX node
    'react/jsx-no-literals': 'off', // No using string literals in JSX
    'react/jsx-no-target-blank': 'error', // No using unsafe target="_blank"
    'react/jsx-no-undef': 'warn', // Check definition of JSX elements (avoid typos in JSX node names)
    'react/jsx-no-useless-fragment': 'warn', // No unnecessary fragments
    'react/jsx-one-expression-per-line': 'off', // Prettier
    'react/jsx-curly-brace-presence': 'off', // Prettier
    'react/jsx-fragments': 'off', // Prettier
    'react/jsx-pascal-case': 'warn', // Force PascalCase for user-defined JSX elements (components)
    'react/jsx-props-no-multi-spaces': 'off', // Prettier
    'react/jsx-props-no-spreading': 'off', // No using spread operator in props
    'react/jsx-sort-default-props': 'off', // Force default props to be ordered
    'react/jsx-sort-props': 'off', // Force props to be ordered
    'react/jsx-space-before-closing': 'off', // Prettier
    'react/jsx-tag-spacing': 'off', // Prettier
    'react/jsx-uses-react': 'warn', // Consider JSX as a call to React.createElement, and avoid no-unused-vars
    'react/jsx-uses-vars': 'warn', // Ensure that JSX uses components, and avoids no-unused-vars
    'react/jsx-wrap-multilines': 'off', // Prettier

    /* React Hooks rules */
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error', // Hooks must follow https://reactjs.org/docs/hooks-rules.html
    'react-hooks/exhaustive-deps': 'warn', // Hooks must have all dependencies defined that are used

    /* React Performance rules */
    // https://github.com/cvazac/eslint-plugin-react-perf#list-of-supported-rules
    'react-perf/jsx-no-new-object-as-prop': 'warn', // Avoid using object literals passed as JSX props
    'react-perf/jsx-no-new-array-as-prop': 'warn', // Avoid using array literals passed as JSX props
    'react-perf/jsx-no-new-function-as-prop': 'off', // Avoid using function literals passed as JSX props
    'react-perf/jsx-no-jsx-as-prop': 'off', // Avoid passing JSX passed as JSX props
  },
};
