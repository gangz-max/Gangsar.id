import React from 'react';

    // Spanduk berjalan: strip A (kiri -> kanan) & strip B (kanan -> kiri), membentuk huruf X
    function BannerStrip({ items, className }) {
      const group = [...items, ...items, ...items];  // satu grup cukup panjang untuk menutupi layar
      const renderGroup = (key) => (
        <div key={key} className="flex items-center" aria-hidden={key !== 0}>
          {group.map((text, i) => (
            <React.Fragment key={i}>
              <span className="banner-item">{text}</span>
              <span className="banner-star">✦</span>
            </React.Fragment>
          ))}
        </div>
      );
      return (
        <div className={`banner-strip ${className}`}>
          <div className="banner-track">
            {renderGroup(0)}
            {renderGroup(1)}
          </div>
        </div>
      );
    }

    export default function CrossBanner() {
      const topRow = ["Web Development", "Kolaborasi", "Networking", "Cyber Security", "Programming", "UI/UX Design"];
      const bottomRow = ["React", "Tailwind CSS", "JavaScript", "Database SQL", "Cloud Computing", "Artificial Intelligence"];
      return (
        <div className="banner-stage" role="presentation">
          <BannerStrip items={topRow} className="strip-a" />
          <BannerStrip items={bottomRow} className="strip-b" />
        </div>
      );
    }

