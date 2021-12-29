import React, { useEffect, useState } from 'react';
import { Redirect, useLocation } from '@docusaurus/router';

const DMRedirect = () => {
  const location = useLocation();
  const [dmToken, setDmToken] = useState('');

  useEffect(() => {
    setDmToken(localStorage.getItem('dmToken'));
  }, []);

  if (dmToken === 'im not mad im just disappointed') {
    return <></>;
  } else {
    return (
      <Redirect
        to={{
          pathname: '/checkdmtoken',
          state: { referrer: location.pathname },
        }}
      />
    );
  }
};

export default DMRedirect;
