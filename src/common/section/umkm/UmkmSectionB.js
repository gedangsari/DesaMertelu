import FadeRight from '../../animation/FadeRight';
import React from 'react';
import { Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function OverviewSectionB(props) {
    return (
        <Grid
            templateColumns='repeat(10, 1fr)'
            py={['16px', '24px', '32px', '64px']}
        >
            <GridItem colSpan={[10, 10, 3, 3]}>
                <VStack align='start'>

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

                    {/* Description 1 */}
                    <Box
                        pl={['30px', '48px', '56px', '62px']}
                        pr={['30px', '48px', '24px', '24px']}
                        pt={['8px', '12px', '16px', '32px']}
                        pb={['20px', '20px', '32px', '64px']}
                    >
                        <FadeRight>
                            <Text
                                fontSize={['12px', '15px', '16px', '20px']}
                                fontWeight='normal'
                                textAlign='justify'>
                                {props.description1}
                            </Text>
                        </FadeRight>
                    </Box>
                </VStack>
            </GridItem>


            {/* Description 2 */}
            <GridItem colSpan={[10, 10, 7, 7]}>
                <VStack mx={['30px', '48px', '56px', '62px']}>
                    <FadeRight>
                        {/* Image */}
                        <HStack
                            columns={[1, 1, 3, 3]}>
                            <Image
                                src={props.image1}
                                objectFit='cover'
                                w={100 / 3 + '%'} />
                            <Image
                                src={props.image2}
                                objectFit='cover'
                                w={100 / 3 + '%'} />
                            <Image
                                src={props.image3}
                                objectFit='cover'
                                w={100 / 3 + '%'} />
                        </HStack>

                        {/* Description */}
                        <Text
                            fontSize={['12px', '15px', '16px', '20px']}
                            fontWeight='normal'
                            textAlign='justify'
                            mt={['12px', '16px', '18px', '34px']}>
                            {props.description2}
                        </Text>
                    </FadeRight>
                </VStack>
            </GridItem>
        </Grid>
    );
};