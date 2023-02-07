import React from 'react';
import { Fade as FadeReveal } from 'react-awesome-reveal';

const Fade = ({ children }) => {
    return (
        <>
            <FadeReveal duration='1500' direction='left' triggerOnce='true'>
                {children}
            </FadeReveal>
        </>
    );
};

export default Fade;