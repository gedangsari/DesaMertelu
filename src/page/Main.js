import axios from 'axios';
import Layout from '../common/layout/Layout';
import React, { useState, useEffect } from 'react';
import { Image, Link } from '@chakra-ui/react';

import HeadingSection from '../common/section/pariwisata/HeadingSection';
import OverviewSectionA from '../common/section/pariwisata/OverviewSectionA';
import OverviewSectionB from '../common/section/pariwisata/OverviewSectionB';
import OverviewSectionC from '../common/section/pariwisata/OverviewSectionC';
import RouteSection from '../common/section/pariwisata/RouteSection';

import HeadingImage from '../assets/image/pariwisata/jumbotron_pariwisata.jpg';
import OverviewAnyamanImage from '../assets/image/pariwisata/overview_anyaman.jpg';
import OverviewCabaanImage from '../assets/image/pariwisata/overview_cabaan.jpg';
import OverviewGvgImage from '../assets/image/pariwisata/overview_gvg.jpg';
import OverviewWayangImage from '../assets/image/pariwisata/overview_wayang.jpg';
import OverviewYohnanImage from '../assets/image/pariwisata/overview_yohnan.png';
import DownloadAppImage from '../assets/image/pariwisata/download_app.png';

export default function Main() {
  const [pariwisata, setPariwisata] = useState([]);

  useEffect(() => {
    getPariwisata();
  }, []);

  const getPariwisata = async () => {
    const response = await axios.get("api/d/pariwisata");
    setPariwisata(response.data.data);
  };

  return (
    <Layout color='white'>
      <HeadingSection
        title='Pengalaman yang Mengagumkan untuk Siapa Pun'
        subtitle='Desa Wisata Mertelu akan membawamu ke perjalanan wisata yang tak terlupakan.'
        image={HeadingImage}
      />
      <OverviewSectionA
        title='Panorama menakjubkan dari Green Village'
        description='Green Village menyajikan pesona keindahan alam. Dari atas ketinggian, kita dapat menyaksikan hamparan pegunungan dan persawahan. Pada sisi kiri, kita dapat menikmati hamparan pegunungan yang memisahkan Provinsi Daerah Istimewa Yogyakarta dengan Jawa Tengah. Jika cuaca sedang cerah, maka Gunung Merapi di sisi utara akan tampak begitu gagah. Tak hanya itu, Gunung Lawu yang berada di perbatasan Provinsi Jawa Tengah dan Jawa Timur pun turut juga terlihat. Sedang pada sisi kanan, kita disuguhi hamparan persawahan dan juga Embung Batara Sriten. Tempat wisata ini dilengkapi dengan berbagai fasilitas, seperti tempat parkir yang luas, musala, toilet, joglo, tempat makan, dan masih banyak lagi.'
        image={OverviewGvgImage}
        url='https://goo.gl/maps/rCr4yjbjPghho8Qw6'
      />
      <OverviewSectionB
        title='Pengalaman berwisata sambil belajar di Air Terjun Yohnan'
        description='Tidak hanya wisata pegunungan, Desa Mertelu juga memiliki wisata air terjun yang masih begitu alami, yaitu Air Terjun Yohnan. Wisata air terjun ini belum banyak diketahui orang atau disebut hidden gems. Air Terjun Yohnan terbentuk dari beberapa sumber mata air dan aliran sungai. Wisata air tejun ini bukan hanya tempat wisata biasa, akan tetapi wisatawan disajikan dengan pengetahuan baru mengenai batuan yang jarang sekali ditemui di berbagai tempat. Dengan mengusung konsep wisata edukasi, wisata ini dibuat dengan menggabungkan unsur kegiatan wisata dengan muatan pendidikan di dalamanya. Akses jalan menuju tempat wisata ini dapat dapat dikases dengan menggunakan kendaraan roda dua, lalu berjalan kaki sejauh kurang lebih 700 meter.'
        image={OverviewYohnanImage}
        url='https://goo.gl/maps/kfuAWkyvNcQqaaCU7'
      />
      <OverviewSectionA
        title='Sunrise & sunset indah dari Puncak Cabaan'
        description='Keindahan pesona alam Desa Mertelu tidak hanya dapat dinikmati pagi ataupun siang hari saja, akan tetapi kita juga dapat menikmati indahnya malam dari atas puncak/bukit. Puncak Cabaan menyediakan area camping untuk para pengunjung yang ingin bermalam dan menikmti pesona alam di malam hari. Pada sisi kanan puncak, kita disuguhi pemandangan pegunungan dan perbukitan. Sedangkan pada sisi kiri, kita disuguhi pemandangan hamparan persawan dan Embung Batara Sriten. Selain itu, kita juga dapat menyaksikan sunrise dan sunset pada pagi dan sore hari. Untuk menuju ke puncak tersebut, dapat ditempuh dengan menggunakan kendaraan roda dua ataupun roda empat. Kemudian, dilanjutkan dengan jalan kaki selama 10 menit.'
        image={OverviewCabaanImage}
        url='https://goo.gl/maps/biFCc2oV9y2UWArE8'
      />
      <OverviewSectionC
        title='Masih banyak hal hebat di sini'
        description='Di samping destinasi wisata yang indah, Desa Mertelu adalah desa yang kaya akan keanekaragaman, baik di bidang UMKM, anyaman bambu, kerajinan kayu, kebudayaan, dan kesenian. Selama di sini, kamu bisa menemukan berbagai olahan dan produk asli masyarakat desa, seperti keripik pisang, menyaksikan kebudayaan dan kesenian lokal yang tidak bisa kamu temukan di tempat lain, bertemu dan bersapa dengan masyarakat desa, serta yang tidak kalah penting, kamu dapat merasakan pengalaman hidup di desa yang asri dan tenteram.'
        imageLeft={OverviewAnyamanImage}
        imageRight={OverviewWayangImage}
      />
      <RouteSection
        title='Ayo mulai perjalananmu ke Mertelu sekarang'
      />
      <Link href='https://play.google.com/store/apps/details?id=com.mertelu.wisata' isExternal>
        <Image src={DownloadAppImage} w='100vw' />
      </Link>
    </Layout>
  );
};

// Breakpoints
// 100% xl
// 150% lg
// 175% md
// 300% sm

// Patokan
// 100% xl
// 150% lg
// 200% md -> iPad Air
// 300% sm -> Pixel 5