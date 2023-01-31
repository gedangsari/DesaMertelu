import Fade from '../../animation/Fade';
import FadeRight from '../../animation/FadeRight';
import React from 'react';
import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function AboutSection(props) {
    return (
        <Box pt={['110px', '130px', '150px', '150px']}>

            {/* About */}
            <VStack>
                {/* Title */}
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
                        {props.aboutTitle}
                    </Text>
                </FadeRight>

                {/* Description */}
                <Box
                    px={['30px', '48px', '56px', '62px']}
                    pt={['8px', '12px', '16px', '32px']}
                    pb={['20px', '20px', '32px', '64px']}
                >
                    <FadeRight>
                        <Text
                            fontSize={['12px', '15px', '16px', '20px']}
                            fontWeight='normal'
                            mb={['12px', '16px', '18px', '34px']}
                            textAlign='justify'
                        >
                            {props.aboutDescription}
                        </Text>
                    </FadeRight>
                </Box>
            </VStack>

            {/* Origin */}
            <VStack>
                {/* Title */}
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
                        {props.originTitle}
                    </Text>
                </FadeRight>

                {/* Image */}
                <Fade>
                    <Image
                        src={props.originImage}
                        h={['50vh', '50vh', '80vh', '80vh']}
                        w='100vw'
                        objectFit='cover'
                        py={['8px', '12px', '16px', '32px']} />
                </Fade>

                {/* Description */}
                <Box
                    px={['30px', '48px', '56px', '62px']}
                    pb={['20px', '20px', '32px', '64px']}
                    fontSize={['12px', '15px', '16px', '20px']}
                    fontWeight='normal'
                    textAlign='justify'
                >
                    <FadeRight>
                        {props.originDescription
                            .split('\\n')
                            .map((item, i) =>
                                <Text key={i}>{item}<br /><br /></Text>
                            )
                        }
                    </FadeRight>
                </Box>
            </VStack>

        </Box>
    );
};