import Fade from '../../animation/Fade';
import FadeLeft from '../../animation/FadeLeft';
import React from 'react';
import { Box, Grid, GridItem, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";

export default function OverviewSectionA(props) {
    return (
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)']}>
            <GridItem colSpan={3}>
                <Fade>
                    <Image
                        src={props.image}
                        h={['50vh', '50vh', '100vh', '100vh']}
                        w='100vw'
                        objectFit='cover' />
                </Fade>
            </GridItem>

            <GridItem colSpan={2} mt={['16px', '24px', '32px', '64px']} textAlign='end'>
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
                                fontWeight='normal'
                                textAlign='justify'
                                mb={['12px', '16px', '18px', '34px']}>
                                {props.description}
                            </Text>

                            <Link
                                href={props.url}
                                fontSize={['8px', '10px', '12px', '16px']}
                                fontWeight='medium'
                                color='green.600'
                                isExternal>
                                <Text>Lihat lebih lanjut</Text>
                            </Link>
                        </FadeLeft>
                    </Box>

                </VStack>
            </GridItem>
        </Grid>
    );
};