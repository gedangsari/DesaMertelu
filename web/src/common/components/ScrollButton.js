import React, { useState } from 'react';
import { IconButton } from '@chakra-ui/react';
import { IoArrowUpOutline as ScrollUpIcon } from "react-icons/io5";

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <IconButton
                aria-label='Scroll to top'
                icon={<ScrollUpIcon />}
                colorScheme='blackAlpha'
                display={visible ? 'center' : 'none'}
                onClick={scrollToTop}
                position='fixed'
                bottom={['10px', '15px', '25px', '25px']}
                right={['10px', '15px', '25px', '25px']}
            />
    );
}

export default ScrollButton;