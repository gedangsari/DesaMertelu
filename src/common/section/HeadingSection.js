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
            px={16}
        >
            <FadeRight>
                <Text fontSize={[12, 16, 24, 32]} fontWeight='bold'>
                    {props.title}
                </Text>
                <Text fontSize={[8, 10, 14, 20]} fontWeight='medium'>
                    {props.subtitle}
                </Text>
            </FadeRight>
        </VStack>
    );
};