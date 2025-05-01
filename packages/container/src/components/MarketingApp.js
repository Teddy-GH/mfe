import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);
    useEffect(() => {
        // Mount the marketing app to the div reference
        // This is where the marketing app will be rendered
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
}