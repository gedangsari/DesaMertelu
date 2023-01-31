import FadeRight from '../../animation/FadeRight';
import React from 'react';
import { Box, Text, VStack } from "@chakra-ui/react";

export default function PotentialSection(props) {
    return (
        <VStack pt={['110px', '130px', '150px', '150px']}>
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
                h='640px'
                w='100vw'
                p={['16px', '20px', '28px', '32px']}
            >
                <iframe
                    title='Potensi Desa Mertelu'
                    src='https://www.google.com/maps/d/u/0/embed?mid=1FF2VNuk6wTNWo1ZWYA2n0z6GfpETiy4&ehbc=2E312F'
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