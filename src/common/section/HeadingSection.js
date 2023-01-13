import '../css/ScrollDown.css';
import FadeRight from '../animation/FadeRight';
import React from 'react';
import { Text, VStack } from '@chakra-ui/react';

export default function HeadingSection(props) {
    const styles = {
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    }

    return (
        <VStack
            sx={styles}
            textColor='white'
            textAlign='center'
            justifyContent='center'
            px={['24px', '28px', '32px', '36px']}
        >
            <FadeRight>
                <Text fontSize={['15px', '20px', '28px', '36px']} fontWeight='bold'>
                    {props.title}
                </Text>
                <Text fontSize={['13px', '16px', '18px', '24px']} fontWeight='medium' mt={[0, 1, 1, 1]}>
                    {props.subtitle}
                </Text>
            </FadeRight>

            <span class='scroll-btn'>
                <span class='mouse'>
                    <span></span>
                </span>
            </span>
        </VStack>
    );
};