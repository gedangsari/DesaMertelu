import DesaWisataLogo from '../../assets/image/logo_desa_wisata.png';
import FadeRight from '../animation/FadeRight';
import React from 'react';
import { Box, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';

export default function ContactSection(props) {
    return (
        <Box h='100vh'>

            {/* Route */}
            <VStack h='70%'>
                <FadeRight>
                    <Text
                        fontSize={['10px', '16px', '24px', '32px']}
                        fontWeight='bold'
                        mt={['8px', '16px', '24px', '32px']}
                        mb={['2px', '6px', '10px', '14px']}
                    >
                        Let's start your journey to Mertelu now
                    </Text>
                </FadeRight>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.7800352014306!2d110.61338231472588!3d-7.8130939943698525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a4f32bf83986b%3A0x89cfc63831ddf2a3!2sGreen%20Village%20Gedangsari!5e0!3m2!1sen!2sid!4v1673231908603!5m2!1sen!2sid'
                    style={{
                        width: '94%',
                        height: '75%',
                        border: '0',
                        borderRadius: '8px',
                    }}
                    allowfullscreen=''
                    loading='lazy'
                    referrerpolicy='no-referrer-when-downgrade'
                ></iframe>
            </VStack>

            {/* Contact */}
            <HStack
                h='24%'
                bg='green.500'
                color='white'
                p={6}
            >
                <VStack w='40%' align='start'>
                    <Text
                        fontSize={['7px', '12px', '17px', '20px']}
                        fontWeight='bold'
                    >
                        Kontak
                    </Text>
                    <Text
                        fontSize={['5px', '8px', '12px', '16px']}
                        fontWeight='light'
                    >
                        <Link href={'https://wa.me/' + props.contactNumber} isExternal>
                            {props.contactNumber}
                        </Link> ({props.contactName})
                    </Text>
                </VStack>

                <VStack w='60%' align='end' textAlign='end'>
                    <Link href='https://wisata.gunungkidulkab.go.id/desa-wisata-mertelu' isExternal>
                        <Image
                            src={DesaWisataLogo}
                            h={['12px', '24px', '32px', '40px']} />
                    </Link>
                    <Text
                        fontSize={['5px', '8px', '12px', '16px']}
                        fontWeight='light'
                    >
                        Kalurahan Mertelu, Kapanewon Gedangsari,<br />Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta
                    </Text>
                </VStack>
            </HStack>

            {/* Copyright */}
            <HStack
                h='6%'
                bg='green.600'
                color='white'
                px={6}
                fontSize={['4px', '7px', '10px', '14px']}
                fontWeight='light'
            >
                <Text w='40%'>
                    Copyright © 2023 Desa Mertelu. All Rights Reserved.
                </Text>
                <Text w='60%' textAlign='end'>
                    KKN-PPM UGM Periode IV Tahun 2022 - <Link href='https://instagram.com/gedangsari.asri' isExternal>
                        Gedangsari Asri
                    </Link>
                </Text>
            </HStack>
        </Box >
    );
};