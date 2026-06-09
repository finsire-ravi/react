import React from "react";

const BodyResCard = (props) => {
  const { resdata } = props;
  return (
    <div className="res-card">
      <img
        className="res-card-image"
        src={
          resdata.info.cloudinaryImageId.CDN_URL ||
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
            resdata.info.cloudinaryImageId
        }
        alt="logo"
      />
      <h2 className="res-card-title">{resdata.info.name}</h2>
      <h3 className="res-card-cuisine">{resdata.info.cuisines.join(",")}</h3>
      <h4 className="res-card-rating">{resdata.info.avgRating} Star</h4>
    </div>
  );
};

export default BodyResCard;
