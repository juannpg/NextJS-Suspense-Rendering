// Here we are defining both of the skeletons. Those are made with Create React Content Loader. Each skeleton has its own export.

import React from "react";
import ContentLoader from "react-content-loader";

export const NameSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={149}
    height={38}
    viewBox="0 0 149 38"
    backgroundColor="#ddd"
    foregroundColor="#fff" 
    animate={true}
  >
    <rect x="8" y="12" rx="2" ry="2" width="140" height="10" /> 
    <rect x="8" y="28" rx="2" ry="2" width="140" height="10" />
  </ContentLoader>
);

export const HeightSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={149}
    height={38}
    viewBox="0 0 149 38"
    backgroundColor="#d8d0d0"
    foregroundColor="#616161"
  >
    <rect x="8" y="26" rx="2" ry="2" width="140" height="10" /> 
    <circle cx="76" cy="13" r="12" />
  </ContentLoader>
);