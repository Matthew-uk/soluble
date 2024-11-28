import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Orbit: React.FC = () => {
  const orbitIcons = [
    { icon: <Facebook />, className: 'facebook', label: 'Facebook' },
    { icon: <Twitter />, className: 'twitter', label: 'Twitter' },
    { icon: <Linkedin />, className: 'linkedin', label: 'LinkedIn' },
    { icon: <Instagram />, className: 'instagram', label: 'Instagram' },
    { icon: <Youtube />, className: 'youtube', label: 'YouTube' },
    // { icon: <TikTok />, className: 'tiktok', label: 'TikTok' },
  ];

  return (
    <div className="orbit-container">
      {/* Central Icon */}
      <div className="center-icon">
        <div className="logo">
          <span>V</span>
        </div>
      </div>

      {/* Orbits */}
      <div className="orbits">
        {[...Array(3)].map((_, ringIndex) => (
          <div key={ringIndex} className={`orbit-ring ring-${ringIndex + 1}`}>
            {orbitIcons.map((item, index) => (
              <div
                key={`${ringIndex}-${index}`}
                className={`orbit-icon ${item.className} ring-${ringIndex + 1}`}
                title={item.label}
              >
                {item.icon}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orbit;
