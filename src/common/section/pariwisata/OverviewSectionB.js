import Fade from '../../animation/Fade';
import FadeRight from '../../animation/FadeRight';
import React from 'react';
import { Box, Grid, GridItem, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";

export default function OverviewSectionB(props) {
    return (
        <Grid templateColumns='repeat(5, 1fr)'>
            <GridItem colSpan={3} mt={['16px', '24px', '32px', '64px']}>
                <VStack align='start' pr={['8px', '8px', '8px', '8px']}>

                    {/* Title */}
                    <HStack bg='white'>
                        <FadeRight>
                            <Box
                                bg='green.500'
                                w={['22px', '28px', '32px', '40px']}
                                h={['60px', '60px', '90px', '120px']} />
                            <Text
                                fontSize={['13px', '18px', '32px', '40px']}
                                fontWeight='bold'
                                pl={['0px', '12px', '16px', '16px']}>
                                {props.title}
                            </Text>
                        </FadeRight>
                    </HStack>

                    {/* Description */}
                    <Box
                        pl={['30px', '48px', '56px', '62px']}
                        pr={['6px', '24px', '24px', '24px']}
                        pt={['8px', '12px', '16px', '32px']}
                        pb={['20px', '20px', '32px', '64px']}
                    >
                        <FadeRight>
                            <Text
                                fontSize={['12px', '15px', '16px', '20px']}
                                fontWeight='normal'
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
                        </FadeRight>
                    </Box>
                </VStack>
            </GridItem>

            <GridItem colSpan={2}>
                <Fade>
                    <Image
                        src={props.image}
                        h={['50vh', '50vh', '100vh', '100vh']}
                        w='100vw'
                        objectFit='cover' />
                </Fade>
            </GridItem>
        </Grid>
    );
};