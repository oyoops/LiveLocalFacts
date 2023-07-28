// components/GoogleAd.tsx

import React from 'react';

interface GoogleAdProps {
  adSlot: string; // This is the ad slot ID provided by Google AdSense
  adFormat?: string; // This could be 'auto', 'rectangle', etc.
}

const GoogleAd: React.FC<GoogleAdProps> = ({ adSlot, adFormat = 'auto' }) => {
  React.useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6656205365711369"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
    ></ins>
  );
};

export default GoogleAd;
