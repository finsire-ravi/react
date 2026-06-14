import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";

function RestrauntMenu() {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const fetchMenuApi = await fetch(MENU_API_URL + resId);
      const convertJson = await fetchMenuApi.json();
      setResMenu(convertJson?.data || convertJson);
    } catch (error) {
      setResMenu({ status: false });
    }
  };

  if (!resMenu) return <Shimmer />;

  if (resMenu.status === false) return <h1>No data Found</h1>;

  const restaurantInfo =
    resMenu?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info ||
    {};

  const menuSections =
    resMenu?.cards
      ?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) => card?.card?.card?.itemCards,
      ) || [];

  const {
    name,
    cuisines = [],
    cloudinaryImageId,
    avgRatingString,
    locality,
    areaName,
    costForTwoMessage,
  } = restaurantInfo;

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="menu-hero-copy">
          <p className="menu-eyebrow">Restaurant menu</p>
          <h1>{name}</h1>
          <p className="menu-location">
            {[locality, areaName].filter(Boolean).join(", ")}
          </p>
          <div className="menu-meta-row">
            <span className="menu-chip menu-chip-rating">
              {avgRatingString} rating
            </span>
            <span className="menu-chip">{costForTwoMessage}</span>
          </div>
          <p className="menu-cuisines">{cuisines.join(", ")}</p>
        </div>

        {cloudinaryImageId ? (
          <img
            className="menu-hero-image"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              cloudinaryImageId
            }
            alt={name}
          />
        ) : null}
      </div>

      <div className="menu-sections">
        {menuSections.map((section) => {
          const sectionData = section?.card?.card;
          const items = sectionData?.itemCards || [];

          return (
            <section className="menu-section" key={sectionData?.title}>
              <div className="menu-section-header">
                <h2>{sectionData?.title}</h2>
                <span>{items.length} items</span>
              </div>

              <div className="menu-item-list">
                {items.map((item) => {
                  const itemInfo = item?.card?.info || {};
                  return (
                    <article className="menu-item-card" key={itemInfo.id}>
                      <div className="menu-item-copy">
                        <div className="menu-item-title-row">
                          <h3>{itemInfo.name}</h3>
                          {itemInfo.price ? (
                            <span className="menu-item-price">
                              ₹{(itemInfo.price / 100).toFixed(0)}
                            </span>
                          ) : null}
                        </div>
                        <p className="menu-item-category">
                          {itemInfo.category}
                        </p>
                        <p className="menu-item-description">
                          {itemInfo.description}
                        </p>
                      </div>

                      {itemInfo.imageId ? (
                        <img
                          className="menu-item-image"
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            itemInfo.imageId
                          }
                          alt={itemInfo.name}
                        />
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default RestrauntMenu;
