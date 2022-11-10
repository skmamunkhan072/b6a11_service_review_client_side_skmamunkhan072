import React from "react";
import { PhotoProvider } from "react-photo-view";

const PhotoView = ({}) => {
  const images =
    "https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png";
  return (
    <div>
      {/* <PhotoProvider>
        <div className="foo">
          {images.map((item, index) => ( */}
      <PhotoView src={images}>
        <img src={images} alt="" />
      </PhotoView>
      {/* ))}
        </div>
      </PhotoProvider> */}
    </div>
  );
};

export default PhotoView;
