import Fade from '../../animation/Fade';
import FadeRight from '../../animation/FadeRight';
import React from 'react';
import { Box, Grid, GridItem, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react'

export default function PlantSection(props) {
    return (
        <>
            <Grid
                templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)']}
                pt='150px'
            >
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
                                    {props.scientificName}<br />({props.localName})
                                </Text>
                            </FadeRight>
                        </HStack>

                        {/* Classification */}
                        <FadeRight>
                            <TableContainer
                                fontSize={['12px', '15px', '16px', '20px']}
                                fontWeight='normal'
                                whiteSpace='pre-line'
                                pl={['30px', '48px', '56px', '62px']}
                                pr={['6px', '24px', '24px', '24px']}
                                pt={['8px', '12px', '16px', '32px']}
                                pb={['20px', '20px', '32px', '64px']}
                            >
                                <Table variant='simple'>
                                    <Tbody>
                                        <Tr>
                                            <Td>Kingdom</Td>
                                            <Td>{props.kingdom}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Division</Td>
                                            <Td>{props.division}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Subdivision</Td>
                                            <Td>{props.subdivision}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Class</Td>
                                            <Td>{props.class}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Order</Td>
                                            <Td>{props.order}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Family</Td>
                                            <Td>{props.family}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Genus</Td>
                                            <Td>{props.genus}</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Spesies</Td>
                                            <Td>{props.species}</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </FadeRight>
                    </VStack>
                </GridItem>

                <GridItem colSpan={2}>
                    <Fade>
                        <Image
                            src={props.imageUrl}
                            h={['50vh', '50vh', '100vh', '100vh']}
                            w='100vw'
                            objectFit='cover' />
                    </Fade>
                </GridItem>
            </Grid>

            {/* Description */}
            <Box
                fontSize={['12px', '15px', '16px', '20px']}
                fontWeight='normal'
                py={['16px', '24px', '32px', '64px']}
                px={['30px', '48px', '56px', '62px']}
            >
                {props.description
                    .split('\\n')
                    .map((item, i) =>
                        <Text key={i}>{item}<br /><br /></Text>
                    )
                }
            </Box>
        </>
    );
};