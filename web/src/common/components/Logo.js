import logo from '../../logo.png';
import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react'

export default function Logo(props) {
    return (
        <Flex align='center'>
            <Image h={['56px', '72px', '72px', '72px']} src={logo}></Image>
            <Box px='16px' {...props}>
                <Text fontSize={['14px', '18px', '18px', '18px']} fontWeight='bold'>
                    Desa Mertelu
                </Text>
                <Text fontSize={['10px', '12px', '12px', '12px']} fontWeight='normal'>
                    Kapanewon Gedangsari
                </Text>
                <Text fontSize={['10px', '12px', '12px', '12px']} fontWeight='normal'>
                    Kabupaten Gunungkidul
                </Text>
            </Box>
        </Flex>
    );
};