import axios from 'axios';
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
                description='Kalurahan Mertelu, Kapanewon Gedangsari, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta'
                image={HeadingImage}
            />
            <ProductsSection
                title='Ragam Produk'
                product1Image={Product1Image}
                product2Image={Product2Image}
                product3Image={Product3Image}
                product4Image={Product4Image}
                product5Image={Product5Image}
            />
            <UmkmSectionA
                title='Kerajinan Kayu (Meubel)'
                description='Desa Mertelu merupakan kelurahan yang terletak di daerah dengan topografi pegunungan dan tebing curam. Pada daerah tersebut, tumbuh subur berbagai jenis kayu sehingga dapat dimanfaatkan warga untuk membuat berbagai perabotan kayu atau mebel. Proses pembuatan perabotan dari kayu dengan menggunakan berbagai teknik kerajinan kayu. Mebel kayu dapat dibuat dari berbagai jenis kayu, seperti jati, kayu pinus, kayu sono atau kayu mahoni. Proses pembuatan kerajinan mebel kayu di Desa Mertelu diawali dengan membuat desain. Kemudian, kayu yang akan digunakan dipotong dan diolah dengan alat seperti gergaji, mesin bor, atau mesin frais. Setelah itu, kayu diukir, dibentuk, dan digabungkan menjadi bentuk yang diinginkan. Beberapa teknik yang digunakan dalam kerajinan mebel kayu, diantaranya, teknik mortise and tenon, teknik dovetail, dan teknik dowel. Setelah mebel jadi, kerajinan akan diberi finishing dengan melapisi kayu dengan cat atau melapisi kayu dengan minyak. Finishing yang baik dapat membuat mebel kayu tampak lebih indah dan tahan lama. Beberapa produk yang dihasilkan oleh pengrajin kayu di Desa Mertelu, diantaranya almari, pintu, kusen, meja, kursi, tempat tidur, dan lain sebagainya. Pengrajin kayu di Desa Mertelu tersebar di berbagai dusun/dukuh, seperti Dukuh Mertelu, Guyangan Lor, Piji, dan Mertelu Wetan.'
                image={UmkmMeubelImage}
            />
            <UmkmSectionB
                title='Aneka Keripik'
                description1='Masyarakat di Desa Mertelu membuat berbagai inovasi olahan dari berbagai komoditas yang ada di daerah tersebut. Beberapa inovasi olahan tersebut, diantaranya keripik pisang, keripik talas, dan keripik singkong.'
                description2='Aneka keripik tersebut memiki rasa yang lezat dan tekstur yang renyah yang menambah kenikmatan saat dimakan, serta memiliki banyak varian rasa, seperti original, asin, pedas, atau manis. Rasa yang beragam ini membuat aneka keripik cocok untuk berbagai jenis selera. Produksi aneka keripik ini tersebar di berbagai dukuh, diantaranya di Dukuh Mertelu, Piji, Baturturu, dan Gandu.'
                image1={UmkmMeubelImage}
                image2={UmkmKateringImage}
                image3={UmkmKedelaiImage}
            />
            <UmkmSectionA
                title='Olahan Makanan (Katering)'
                description='Selain berbagai olahan keripik, masyarakat Desa Mertelu juga mengembangkan UMKM sejenis katering. Usaha katering adalah bisnis yang menyediakan makanan dan minuman untuk acara-acara tertentu, seperti pernikahan, konferensi, pesta, atau acara lainnya. Usaha katering masyarakat Desa Mertelu menyediakan menu yang beragam serta menyediakan paket katering yang berbeda-beda sesuai dengan kebutuhan klien, seperti paket prasmanan, paket buffet, atau paket khusus. Makanan diolah dengan baik serta menggunakan bahan yang segar dan berkualitas. Selain itu, usaha katering ini juga menyediakan layanan yang profesional dan memuaskan, mulai dari proses pemesanan hingga pengiriman makanan.'
                image={UmkmKateringImage}
            />
            <UmkmSectionB
                title='Kerajinan Anyaman Bambu'
                description1='Usaha Kerajinan Anyaman Bambu di Desa Mertelu sudah berdiri sejak puluhan tahun yang lalu. Berdirinya usaha ini bermula dari hobi dan keahlian turun temurun masyarakat Desa Mertelu yang melihat besarnya potensi kerajinan bambu di Desa Mertelu yang dinilai memiliki ciri khas khusus yang tidak dimiliki daerah lain.'
                description2='Kegiatan utama usaha ini adalah memproduksi berbagai jenis kerajinan yang menggunakan bahan dasar utama bambu. Beberapa bentuk kerajinan yang dihasilkan, antara lain keranjang makanan, keranjang buah, tempat kue, tempat tisu, kap lampu, dan berbagai macam bentuk lain yang biasanya dibutuhkan oleh masyarakat. Proses produksi sebagian besar dikerjakan secara manual (handmade) dengan menggunakan alat-alat sederhana, seperti pisau potong, pisau irat, gergaji, dll. Hal inilah yang menjadikan produk kerajinan bambu Desa Mertelu menarik bagi banyak konsumen, baik lokal atau luar daerah, termasuk wisatawan mancanegara.'
                image1={UmkmMeubelImage}
                image2={UmkmKateringImage}
                image3={UmkmKedelaiImage}
            />
            <UmkmSectionA
                title='Olahan Kedelai'
                description='Kedelai adalah bahan pangan yang sangat populer di Asia, khususnya di negara-negara seperti Jepang, China, dan Korea. Olahan kedelai mencakup berbagai jenis produk yang dibuat dari bahan baku kedelai, seperti tepung kedelai, susu kedelai, tahu, tempe, dan minyak kedelai. Di Desa Mertelu sendiri, kedelai diolah menjadi produk tempe dan tahu. Kedua produk tersebut sangat digemari oleh warga sehingga permintaan akan olahan kedelai tersebut cukup tinggi. Setiap bulan, masyarakat Desa Mertelu dapat memproduksi 10.000 potong tempe.'
                image={UmkmKedelaiImage}
            />
        </Layout>
    );
};