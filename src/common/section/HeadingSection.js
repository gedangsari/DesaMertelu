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
            px={12}
        >
            <FadeRight>
                <Text fontSize={['12px', '18px', '28px', '36px']} fontWeight='bold'>
                    {props.title}
                </Text>
                <Text fontSize={['10px', '12px', '18px', '24px']} fontWeight='medium' mt={[0, 1, 1, 1]}>
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