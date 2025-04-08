import React from 'react';
import VideoModal from '../VideoModal';

export default function HeroStyle4({ videoSrc, bgUrl, thumbnailSrc }) {
  return (
    <section
      className="cs_hero cs_style_4 position-relative"
      style={{
        backgroundImage: `url(${thumbnailSrc})`,
      }}
    >
      <div className="container">
        <div className="cs_hero_text position-relative">
          <h1 id="maintitle">
            LeagueBet
          </h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="cs_hero_subtitle">
              <p className="mb-0 cs_fs_21">
              LeagueBet is a tournament-style, skill-based sports betting app. Buy in for a virtual bankroll to make multiple 
              real-odds bets and compete head-to-head. Top performers share the pool, offering a safer, social alternative to 
              house betting. 
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <VideoModal videoSrc={videoSrc} bgUrl={bgUrl} />
          </div>
        </div>
      </div>
      <div className="cs_hero_shape">
        {/*<img src="/images/digital-agency/download.gif" width="458px" />*/}

        {/* <img src="/images/digital-agency/trophy.png" height="80px" width="80px" alt="Description of the image"/> */}
        
      {/*
      <svg
          width={458}
          height={475}
          viewBox="0 0 458 475"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M2.35848 153.351L456.103 1.77286L370.156 472.382L2.35848 153.351Z"
            stroke="#A3A3A3"
            strokeWidth={2}
          />
        </svg>*/}
      </div>
    </section>
  );
}
