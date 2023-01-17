import FadeRight from '../../animation/FadeRight';
import React from 'react';
import { Text, VStack } from '@chakra-ui/react';

export default function HeadingSection(props) {
    const styles = {
        background: `url(${props.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    }

    return (
        <VStack
            sx={styles}
            textColor='gray.800'
            textAlign='center'
            justifyContent='center'
            pr={['24px', '28px', '32px', '36px']}
            pl={['38vw', '38vw', '40vw', '40vw']}
            maxH={['50vh', '50vh', '100vh', '100vh']}
        >
            <FadeRight>
                <Text
                    fontSize={['32px', '40px', '52px', '64px']}
                    fontWeight='bold'
                    textTransform='uppercase'
                >
                    {props.title}
                </Text>
                <Text
                    fontSize={['11px', '16px', '18px', '24px']}
                    fontWeight='bold'
                    textTransform='uppercase'
                >
                    {props.subtitle}
                </Text>
                <Text
                    fontSize={['10px', '14px', '16px', '20px']}
                    fontWeight='normal'
                    mt={[0, 1, 1, 1]}
                    px={[0, 50, 100, 180]}
                >
                    {props.description}
                </Text>
            </FadeRight>
        </VStack>
    );
};