import FadeRight from '../../animation/FadeRight';
import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

export default function RouteSection(props) {
    return (
        <VStack>
            <FadeRight>
                <Box
                    bg='green.500'
                    w={['80px', '140px', '200px', '200px']}
                    h={['4px', '8px', '10px', '10px']}
                    mt={['28px', '32px', '32px', '32px']}
                    mb={['4px', '8px', '8px', '8px']} />
                <Text
                    fontSize={['13px', '18px', '32px', '40px']}
                    fontWeight='bold'
                >
                    {props.title}
                </Text>
            </FadeRight>

            <Box
                h={['200px', '300px', '400px', '600px']}
                w='100vw'
                p={['16px', '20px', '28px', '32px']}
            >
                <iframe
                    title='Green Village Gedangsari'
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7800352014306!2d110.61338231472588!3d-7.8130939943698525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a4f32bf83986b%3A0x89cfc63831ddf2a3!2sGreen%20Village%20Gedangsari!5e0!3m2!1sen!2sid!4v1673231908603!5m2!1sen!2sid'
                    style={{
                        width: '100%',
                        height: '100%',
                        border: '0',
                        borderRadius: '8px',
                    }}
                    allowfullscreen=''
                    loading='lazy'
                    referrerpolicy='no-referrer-when-downgrade' />
            </Box>
        </VStack>
    );
};