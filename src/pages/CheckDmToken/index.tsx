import { useHistory, useLocation } from '@docusaurus/router';
import Layout from '@theme/Layout';
import React, { useState } from 'react';
import styles from './index.module.css';

// This is not meant to be real security, just a barrier to entry for players.
const CheckDMToken = () => {
  const location = useLocation();
  const history = useHistory();
  const [pass, setPass] = useState('');

  const onEnterHandler = (event) => {
    if (event.key === 'Enter') {
      localStorage.setItem('dmToken', pass);

      if (location.state['referrer']) {
        history.push(location.state['referrer']);
      } else {
        history.push('/');
      }
    }
  };

  return (
    <Layout>
      <div className={styles.centerDiv}>
        <h3>
          This is a restricted page containing campaign spoilers or general DM notes. Please enter the correct pass
          phrase or leave the page.
        </h3>
        <input
          className={styles.input}
          type="text"
          value={pass}
          onChange={(event) => {
            setPass(event.target.value);
          }}
          onKeyPress={(event) => {
            onEnterHandler(event);
          }}
        />
      </div>
    </Layout>
  );
};

export default CheckDMToken;
