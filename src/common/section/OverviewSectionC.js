import Fade from '../animation/Fade';
import FadeRight from '../animation/FadeRight';
import React from 'react';
import { Box, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react'

export default function OverviewSectionC(props) {
    return (
        <>
            {/* Title + Description */}
            <Grid
                templateColumns='repeat(5, 1fr)'
                mt={['16px', '24px', '32px', '64px']}
            >
                {/* Title */}
                <GridItem colSpan={2}>
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
                </GridItem>

                {/* Description */}
                <GridItem colSpan={3}>
                    <FadeRight>
                        <Text
                            fontSize={['12px', '15px', '16px', '20px']}
                            fontWeight='normal'
                            align='end'
                            pr={['12px', '20px', '24px', '32px']}
                            ml='8px'>
                            {props.description}
                        </Text>
                    </FadeRight>
                </GridItem>
            </Grid>

            {/* Image */}
            <Grid
                templateColumns='repeat(10, 1fr)'
                mt={['30px', '40px', '60px', '80px']}
            >
                <GridItem colSpan={3}>
                    <Fade>
                        <Image
                            src={props.imageLeft}
                            h={['30vh', '30vh', '60vh', '60vh']}
                            w='100%'
                            objectFit='cover' />
                    </Fade>
                </GridItem>

                <GridItem colSpan={7}>
                    <Fade>
                        <Image
                            src={props.imageRight}
                            h={['30vh', '30vh', '60vh', '60vh']}
                            w='100%'
                            objectFit='cover' />
                    </Fade>
                </GridItem>
            </Grid>
        </>
    );
};