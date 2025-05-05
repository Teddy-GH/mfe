import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();


    useEffect(() => {
        // Mount the marketing app to the div reference
        // This is where the marketing app will be rendered
     const { onParentNavigate } =  mount(ref.current, {
            onNavigate:({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    // We are not on the same path, so we need to navigate
                    // to the new path
                    history.push(nextPathname)
                }
            }
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />;
}