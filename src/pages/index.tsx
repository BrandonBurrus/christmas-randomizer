import SecretSantaList from 'components/SecretSantaList';
import React from 'react';
import Layout from '../components/Layout';

/**
 * Initial home page of the application
 */
function HomePage() {
  return (
    <Layout>
      <SecretSantaList />
    </Layout>
  );
}

export default HomePage;
