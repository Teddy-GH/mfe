import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();


    useEffect(() => {
        // Mount the marketing app to the div reference
        // This is where the marketing app will be rendered
     const { onParentNavigate } =  mount(ref.current, {
           initialPath: history.location.pathname,
            onNavigate:({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    // We are not on the same path, so we need to navigate
                    // to the new path
                    history.push(nextPathname)
                }
            },
            onSignIn,
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />;
}