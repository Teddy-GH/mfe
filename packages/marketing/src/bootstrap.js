import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';

// Mount function to startup the app
const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();
    
    if (onNavigate) {
        history.listen(onNavigate);
    }
    ReactDOM.render(
      <App  history={history}/>,
       el
    )

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                // We are not on the same path, so we need to navigate
                // to the new path
                history.push(nextPathname);
            }   
        }
    }
}

// If we are in dev mode and running in isolation, call the bootstrap immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() });
    }
}


// We are running througth the container and we should export the mount 

export { mount };
