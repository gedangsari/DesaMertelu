import logo from '../../logo.png';
import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react'

export default function Logo(props) {
    return (
        <Flex align='center'>
            <Image h='48px' src={logo}></Image>
            <Box px='16px' {...props}>
                <Text fontSize='sm' fontWeight='bold'>
                    Desa Mertelu
                </Text>
                <Text fontSize='xs' fontWeight='normal'>
                    Kabupaten Gunungkidul
                </Text>
            </Box>
        </Flex>
    );
};