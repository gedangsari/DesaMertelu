import DesaWisataLogo from '../../assets/image/logo_desa_wisata.png';
import React from 'react';
import { HStack, Image, Link, Text, VStack } from '@chakra-ui/react';

export default function Footer(props) {
    return (
        <>
            {/* About */}
            <HStack
                bg='green.500'
                color='white'
                px={['16px', '20px', '28px', '32px']}
                py={['18px', '24px', '34px', '42px']}
            >
                {/* Contact */}
                <VStack w='40%' align='start'>
                    <Text
                        fontSize={['12px', '15px', '16px', '20px']}
                        fontWeight='bold'
                    >
                        Kontak
                    </Text>
                    <Text
                        fontSize={['10px', '12px', '14px', '16px']}
                        fontWeight='light'
                    >
                        <Link href={'https://wa.me/' + props.contactNumber} isExternal>
                            {props.contactNumber}
                        </Link> ({props.contactName})
                    </Text>
                </VStack>

                {/* Address */}
                <VStack w='60%' align='end' textAlign='end'>
                    <Link href='https://wisata.gunungkidulkab.go.id/desa-wisata-mertelu' isExternal>
                        <Image
                            src={DesaWisataLogo}
                            h={['22px', '28px', '32px', '40px']} />
                    </Link>
                    <Text
                        fontSize={['10px', '12px', '14px', '16px']}
                        fontWeight='light'
                    >
                        Kalurahan Mertelu, Kapanewon Gedangsari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta
                    </Text>
                </VStack>
            </HStack>

            {/* Copyright */}
            <HStack
                bg='green.600'
                color='white'
                px={['16px', '20px', '28px', '32px']}
                py={['8px', '10px', '14px', '16px']}
                fontSize={['8.5px', '10.5px', '12px', '14px']}
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
        </>
    );
};