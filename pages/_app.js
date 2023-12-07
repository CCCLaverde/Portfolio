import '../styles/globals.css';

//componets

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
 <Layout>
  <Component {...pageProps} />
  </Layout>
    
  );
}

export default MyApp;
