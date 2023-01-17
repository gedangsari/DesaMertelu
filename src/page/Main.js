import Layout from '../common/layout/Layout';
import React from 'react';

import HeadingSection from '../common/section/HeadingSection';
import OverviewSectionA from '../common/section/OverviewSectionA';
import OverviewSectionB from '../common/section/OverviewSectionB';
import OverviewSectionC from '../common/section/OverviewSectionC';
import RouteSection from '../common/section/RouteSection';

import HeadingImage from '../assets/image/heading.jpg';
import OverviewAnyamanImage from '../assets/image/overview_anyaman.jpg';
import OverviewCabaanImage from '../assets/image/overview_cabaan.jpg';
import OverviewGvgImage from '../assets/image/overview_gvg.jpg';
import OverviewReogImage from '../assets/image/overview_reog.jpg';
import OverviewYohnanImage from '../assets/image/overview_yohnan.jpg';

export default function Main() {
  return (
    <Layout color='white'>
      <HeadingSection
        title='Amazing and Beautiful Views for Everybody'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        image={HeadingImage}
      />
      <OverviewSectionA
        title='Stunning scenery from Green Village'
        description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        image={OverviewGvgImage}
        url='https://goo.gl/maps/rCr4yjbjPghho8Qw6'
      />
      <OverviewSectionB
        title='Lorem ipsum dolor sit amet'
        description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        image={OverviewYohnanImage}
        url='https://goo.gl/maps/kfuAWkyvNcQqaaCU7'
      />
      <OverviewSectionA
        title='Lorem ipsum dolor sit amet'
        description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        image={OverviewCabaanImage}
        url='https://goo.gl/maps/biFCc2oV9y2UWArE8'
      />
      <OverviewSectionC
        title='And many more great things'
        description='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        imageLeft={OverviewAnyamanImage}
        imageRight={OverviewReogImage}
      />
      <RouteSection />
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