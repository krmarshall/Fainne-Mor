import React from 'react';
import { Redirect, useLocation } from '@docusaurus/router';

const DMRedirect = () => {
  const location = useLocation();

  const dmToken = localStorage.getItem('dmToken');
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
