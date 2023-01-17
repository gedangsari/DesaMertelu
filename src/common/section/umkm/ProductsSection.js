import Fade from '../../animation/Fade';
import FadeRight from '../../animation/FadeRight';
import React from "react";
import { Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";

export default function ProductsSection(props) {
    return (
        <VStack py={['48px']} px={['48px']}>

            {/* Title */}
            <FadeRight>
                <Text
                    fontSize={['11px', '16px', '18px', '24px']}
                    fontWeight='bold'
                    mb={['20px']}
                >
                    UMKM Product
                </Text>
            </FadeRight>

            {/* Products */}
            <Fade>
                <SimpleGrid
                    columns={[2, 3, 3, 5]}
                    spacingX={['24px']}
                    spacingY={['24px']}
                >
                    <Image
                        src={props.product1Image}
                        borderRadius='16px'
                        objectFit='cover'
                        h={['135px', '200px', '220px', '260px']}
                        w={['135px', '200px', '220px', '260px']} />
                    <Image
                        src={props.product2Image}
                        borderRadius='16px'
                        objectFit='cover'
                        h={['135px', '200px', '220px', '260px']}
                        w={['135px', '200px', '220px', '260px']} />
                    <Image
                        src={props.product3Image}
                        borderRadius='16px'
                        objectFit='cover'
                        h={['135px', '200px', '220px', '260px']}
                        w={['135px', '200px', '220px', '260px']} />
                    <Image
                        src={props.product4Image}
                        borderRadius='16px'
                        objectFit='cover'
                        h={['135px', '200px', '220px', '260px']}
                        w={['135px', '200px', '220px', '260px']} />
                    <Image
                        src={props.product5Image}
                        borderRadius='16px'
                        objectFit='cover'
                        h={['135px', '200px', '220px', '260px']}
                        w={['135px', '200px', '220px', '260px']} />
                </SimpleGrid>
            </Fade>

        </VStack>
    );
};