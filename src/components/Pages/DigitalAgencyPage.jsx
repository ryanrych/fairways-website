import React from 'react';
import HeroStyle4 from '../Hero/HeroStyle4';
import Spacing from '../Spacing';
import SectionHeading from '../SectionHeading';
import PostGridStyle2 from '../PostGrid/PostGridStyle2';
import Marquee from '../Marquee';
import Brands from '../Brands';
import Cta from '../Cta';
import TestimonialSlider from '../Slider/TestimonialSlider';
import FunFact from '../FunFact';
import AboutStyle4 from '../About/AboutStyle4';
import AboutStyle5 from '../About/AboutStyle5';
import IconBoxStyle2 from '../IconBox/IconBoxStyle2';
import PortfolioSlider from '../Slider/PortfolioSlider';
import PricingTableList from '../PricingTable/PricingTableList';
import { pageTitle } from '../../helpers/PageTitle';
const funfactData = [
  { title: 'Golf Courses', number: '21,000' },
  { title: 'Countries', number: '109' },
  { title: 'Data Points Per Course', number: '100+' },
];
const postData = [
  {
    date: '05 Mar 2023',
    title: 'How to keep fear from ruining your art business with confident',
    thumbnailSrc: '/images/studio-agency/post_2.jpeg',
    href: '/blog/blog-details',
  },
  {
    date: '07 Mar 2023',
    title: 'Artistic mind will be great for creation anything',
    thumbnailSrc: '/images/studio-agency/post_1.jpeg',
    href: '/blog/blog-details',
  },
  {
    date: '03 Mar 2023',
    title: 'How to keep fear from ruining your art business with confident',
    thumbnailSrc: '/images/studio-agency/post_3.jpeg',
    href: '/blog/blog-details',
  },
  {
    date: '02 Mar 2023',
    title: 'How to keep fear from ruining your art business with confident',
    thumbnailSrc: '/images/studio-agency/post_4.jpeg',
    href: '/blog/blog-details',
  },
];
const brandList = [
  {
    logoSrc: '/images/marketing-agency/brand_1.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_2.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_3.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_4.svg',
    logoAlt: 'Brand',
  },
];
const brandListDark = [
  {
    logoSrc: '/images/marketing-agency/brand_1_dark.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_2_dark.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_3_dark.svg',
    logoAlt: 'Brand',
  },
  {
    logoSrc: '/images/marketing-agency/brand_4_dark.svg',
    logoAlt: 'Brand',
  },
];
const testimonialData = [
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Ansari Patron',
    avatarDesignation: 'CEO at Delta',
  },
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Jhon Doe',
    avatarDesignation: 'Manager at Delta',
  },
  {
    text: 'Zivans Motion Graphics did an excellent job on my video related projects. The motion graphics added an extra layer of polish and really brought the video to life. I highly recommend their high quality services and work.',
    avatarName: 'Ramatam Coo',
    avatarDesignation: 'MD at Delta',
  },
];
const portfolioData = [
  {
    thumbnailSrc: '/images/digital-agency/portfolio_1.jpeg',
    miniTitle: 'React Development',
    title: 'Corporate Webly <br />Application',
    subTitle:
      'From designing the user interface to coding the functionality and ensuring the <br /> website is secure and optimized for performance.',
    href: '/portfolio/portfolio-details',
  },
  {
    thumbnailSrc: '/images/digital-agency/portfolio_2.jpeg',
    miniTitle: 'UI/UX Design',
    title: 'eCommerce User <br />Interface Design',
    subTitle:
      'From designing the user interface to coding the functionality and ensuring the <br /> website is secure and optimized for performance.',
    href: '/portfolio/portfolio-details',
  },
  {
    thumbnailSrc: '/images/digital-agency/portfolio_3.jpeg',
    miniTitle: '3D Render',
    title: 'Multi Dimension <br />Two Square',
    subTitle:
      'From designing the user interface to coding the functionality and ensuring the <br /> website is secure and optimized for performance.',
    href: '/portfolio/portfolio-details',
  },
  {
    thumbnailSrc: '/images/digital-agency/portfolio_4.jpeg',
    miniTitle: 'Animation',
    title: 'Animated Abstract <br />3D Background',
    subTitle:
      'From designing the user interface to coding the functionality and ensuring the <br /> website is secure and optimized for performance.',
    href: '/portfolio/portfolio-details',
  },
];

export default function DigitalAgencyPage({ darkMode }) {
  pageTitle('Digital Agency');
  return (
    <>
      <HeroStyle4
        title=""
        subTitle=""
      />
      <div className="cs_primary_bg">
        <Spacing lg="40" md="80" />
        <div className="container">
          <FunFact data={funfactData} colorVariant="cs_color_1" />
        </div>
        <Spacing lg="40" md="80" />
      </div>
      {/*
      <Spacing lg="150" md="80" />
      <AboutStyle4
        thumbnailSrc="/images/digital-agency/about_1.jpeg"
        miniTitle="Company Info"
        title="Marketing agency for your business"
        subTitle="Our team, specializing in strategic digital marketing, partners with aiming the world's leading brands. Breaking from the norm, we push boundaries and do merge imaginative thinking posible.
        dolores eos qui ratione voluptatem lipe sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam ever the world lorem ipsum."
        btnText="See Our Services"
        btnUrl="/service"
      />

      <Spacing lg="150" md="80" />
      */}
      <Spacing lg="100" md="80" />
      <AboutStyle5
        thumbnailSrc="/images/digital-agency/waterfall.jpg"
        videoSrc="/images/digital-agency/cut3.mp4"
        miniTitle=""
        title="The Best Value Golf API in the Industry"
        subTitle="We've spent hundreds of hours building one comprehensive database to solve all of the needs for your project or company. Here are just a few of our records:"
        progressBarList={[
          { title: 'US Coverage', percentage: '99' },
          { title: 'Contact Information', percentage: '62' },
          { title: 'Course Location', percentage: '92' },
          { title: 'Hole Length', percentage: '86' },
          { title: 'Hole Par & Handicap', percentage: '86' },
          { title: 'Tee Box Slope & Rating', percentage: '99' },
        ]}
      />
      {/*
      <Spacing lg="150" md="80" />
      <section className="cs_primary_bg">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="balls"
            subTitle="Services"
            variantColor="cs_white_color"
          />
          <Spacing lg="85" md="45" />
          <div className="row cs_gap_y_45">
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_1.svg"
                title="Brand Stratege"
                subTitle="Brand's strategy and insights are a forward-thinking blueprint for success."
                features={[
                  'Business Development',
                  'Research & Branding',
                  'Strategy Services',
                  'Business Consulting',
                  'Idea Generate',
                  'Search Engine Optimize',
                ]}
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_2.svg"
                title="UI/UX Design"
                subTitle="Help reinforce your brand's identity & cultivate positive user behaviors."
                features={[
                  'UX Research',
                  'Trend Analysis',
                  'A/B Testing',
                  'Information Architecture',
                  'Mockup Design',
                  'Color Analysis',
                ]}
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_3.svg"
                title="Animation"
                subTitle="Bringing stories to life the power of modern age animation."
                features={[
                  'Idea Generate',
                  'Story Writing',
                  'White Board Animation',
                  'Advertise Animation',
                  'Video Editing',
                ]}
              />
            </div>
            <div className="col-lg-3 col-sm-6">
              <IconBoxStyle2
                iconSrc="/images/digital-agency/service_icon_4.svg"
                title="Web Development"
                subTitle="Exploring the World of Web Development in zivan digital agency."
                features={[
                  'UI/UX Design',
                  'React Application',
                  'eCommerce Development',
                  'Business Website',
                  'App Development',
                  'Web Application',
                ]}
              />
            </div>
          </div>
        </div>
        <Spacing lg="143" md="75" />
      </section>
      <section>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some featured work" subTitle="Portfolio" />
          <Spacing lg="85" md="45" />
        </div>
        <PortfolioSlider data={portfolioData} />
        <Spacing lg="150" md="80" />
      </section>
      */}
      <section className="cs_gray_bg_2 cs_shape_animation_2">
        <div className="cs_height_143 cs_height_lg_75" />
        <div className="container">
          <SectionHeading
            title="Our Budget-Friendly Packages"
            subTitle=""
          />
          <Spacing lg="85" md="45" />
        </div>
        <div className="container">
          <PricingTableList />
        </div>
        <div className="cs_height_150 cs_height_lg_80" />
      </section>
      {/*
      <TestimonialSlider
        layeredImages={[
          '/images/digital-agency/layer_img_1.png',
          '/images/digital-agency/layer_img_2.png',
          '/images/digital-agency/layer_img_3.png',
          '/images/digital-agency/layer_img_4.png',
          '/images/digital-agency/layer_img_5.png',
        ]}
        data={testimonialData}
      />
      */}
      <Cta
        title="Questions?"
        btnText="Contact Us"
        btnUrl="/light/contact"
        bgUrl="/images/creative-agency/cta_bg.jpeg"
        variant="cs_type_1"
      />
      {/*
      <section className="cs_shape_animation_3">
        <div className="cs_shape_1 position-absolute">
          <svg
            width={509}
            height={458}
            viewBox="0 0 509 458"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={254} cy={229} r="228.5" stroke="currentColor" />
            <circle
              cx={26}
              cy={237}
              r="25.5"
              className="anio_3_c_1"
              fill="white"
              stroke="currentColor"
            />
            <circle cx={26} cy={237} r={15} fill="currentColor" />
            <circle
              cx={483}
              cy={229}
              r="25.5"
              className="anio_3_c_1"
              fill="white"
              stroke="currentColor"
            />
            <circle cx={483} cy={229} r={15} fill="currentColor" />
          </svg>
        </div>
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Some recent news" subTitle="Our Blog" />
          <Spacing lg="85" md="45" />
          <PostGridStyle2 data={postData} />
        </div>
      </section>
      <Spacing lg="135" md="70" />
      <Marquee text="We Create Design - Build App - Website - Branding - SEO" />
      <Spacing lg="84" md="50" />
      <div className="container">
        <Brands data={darkMode ? brandListDark : brandList} />
      </div>
      <Spacing lg="135" md="80" />
      */}
    </>
  );
}
