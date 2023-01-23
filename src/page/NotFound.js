import Layout from '../common/layout/Layout';
import React from 'react';
import { Button, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <Layout>
            <VStack h='100vh' justifyContent='center'>
                <Text
                    fontWeight='bold'
                    fontSize='xl'
                    mb={8}
                >
                    Halaman Tidak Ditemukan :(
                </Text>
                <Link to='/home'>
                    <Button>
                        Kembali ke Beranda
                    </Button>
                </Link>
            </VStack>
        </Layout>
    );
};