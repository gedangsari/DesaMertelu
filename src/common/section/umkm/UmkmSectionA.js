import Fade from '../../animation/Fade';
import FadeLeft from '../../animation/FadeLeft';
import React from 'react';
import { Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function UmkmSectionA(props) {
    return (
        <Grid
            templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
            py={['16px', '24px', '32px', '64px']}
        >
            <GridItem colSpan={1}>
                <VStack>
                    <Fade>
                        <Image
                            src={props.image}
                            h={['30vh', '30vh', '80vh', '80vh']}
                            w='100vw'
                            objectFit='cover' />
                    </Fade>
                </VStack>
            </GridItem>

            <GridItem colSpan={1} textAlign='end'>
                <VStack align='end' pl={['8px', '8px', '8px', '8px']}>

                    {/* Title */}
                    <HStack bg='white'>
                        <FadeLeft>
                            <Text
                                fontSize={['13px', '18px', '32px', '40px']}
                                fontWeight='bold'
                                pr={['0px', '12px', '16px', '16px']}>
                                {props.title}
                            </Text>
                            <Box
                                bg='green.500'
                                w={['22px', '28px', '32px', '40px']}
                                h={['60px', '60px', '90px', '120px']} />
                        </FadeLeft>
                    </HStack>

                    {/* Description */}
                    <Box
                        pr={['30px', '48px', '56px', '62px']} // pr title + w box + 8
                        pl={['6px', '24px', '24px', '24px']}
                        pt={['8px', '12px', '16px', '32px']}
                        pb={['20px', '20px', '32px', '64px']}
                    >
                        <FadeLeft>
                            <Text
                                fontSize={['12px', '15px', '16px', '20px']}
                                fontWeight='normal'>
                                {props.description}
                            </Text>
                        </FadeLeft>
                    </Box>

                </VStack>
            </GridItem>
        </Grid>
    );
};