import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to startup the app
const mount = (el) => {
    ReactDOM.render(
      <App />,
       el
    )
}

// If we are in dev mode and running in isolation, call the bootstrap immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}


// We are running througth the container and we should export the mount 

export { mount };
