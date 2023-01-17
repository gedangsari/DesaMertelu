import Layout from "../common/layout/Layout";
import React from "react";

import HeadingSection from '../common/section/umkm/HeadingSection';
import ProductsSection from "../common/section/umkm/ProductsSection";
import UmkmSectionA from "../common/section/umkm/UmkmSectionA";
import UmkmSectionB from "../common/section/umkm/UmkmSectionB";

import HeadingImage from '../assets/image/umkm/jumbotron_umkm.png';
import Product1Image from '../assets/image/umkm/products_meubel.png';
import Product2Image from '../assets/image/umkm/products_keripik.png';
import Product3Image from '../assets/image/umkm/products_anyaman.png';
import Product4Image from '../assets/image/umkm/products_katering.png';
import Product5Image from '../assets/image/umkm/products_kedelai.png';
import UmkmMeubelImage from '../assets/image/umkm/umkm_meubel.png';
import UmkmKateringImage from '../assets/image/umkm/umkm_katering.png';
import UmkmKedelaiImage from '../assets/image/umkm/umkm_kedelai.png';

export default function Umkm() {
    return (
        <Layout color='gray.800'>
            <HeadingSection
                title='UMKM'
                subtitle='Usaha Mikro, Kecil, Menengah'
                description='Kalurahan Mertelu, Kepanewon Gedangsari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta'
                image={HeadingImage}
            />
            <ProductsSection
                title='UMKM Products'
                product1Image={Product1Image}
                product2Image={Product2Image}
                product3Image={Product3Image}
                product4Image={Product4Image}
                product5Image={Product5Image}
            />
            <UmkmSectionA
                title='Kerajinan Kayu (Meubel)'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                image={UmkmMeubelImage}
            />
            <UmkmSectionB
                title='Aneka Keripik'
                description1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                description2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                image1={UmkmMeubelImage}
                image2={UmkmKateringImage}
                image3={UmkmKedelaiImage}
            />
            <UmkmSectionA
                title='Olahan Makanan (Katering)'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                image={UmkmKateringImage}
            />
            <UmkmSectionB
                title='Kerajinan Anyaman Bambu'
                description1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                description2='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                image1={UmkmMeubelImage}
                image2={UmkmKateringImage}
                image3={UmkmKedelaiImage}
            />
            <UmkmSectionA
                title='Olahan Kedelai'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                image={UmkmKedelaiImage}
            />
        </Layout>
    );
};