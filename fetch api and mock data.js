import React from "react";
import BodyResCard from "./Rescard";
import { CDN_URL } from "../utils/constants";
import { useState, useEffect } from "react";

const BodyCompoent = () => {
  //Normal Js
  let listOfRestra = [
    {
      info: {
        id: "123456",
        name: "KFC",
        cloudinaryImageId: { CDN_URL },
        cuisines: ["Fried Chicken", "Burger"],
        avgRating: 4.5,
        locality: "MG Road",
      },
    },
    {
      info: {
        id: "1234561",
        name: "Pizzahut",
        cloudinaryImageId: { CDN_URL },
        cuisines: ["Pizza", "Burger"],
        avgRating: 4.1,
        locality: "MG Road",
      },
    },
    {
      info: {
        id: "123451",
        name: "MCD",
        cloudinaryImageId: { CDN_URL },
        cuisines: ["Pizza", "Burger", "Chicken"],
        avgRating: 4.7,
        locality: "MG Road",
      },
    },
  ];

  //Use Effect

  useEffect(() => {
    fetchAPiCall();
  }, []);

  const fetchAPiCall = async () => {
    const fetchApiCall = await fetch(
      "https://namastedev.com/api/v1/listRestaurants",
    );

    const dataRes = await fetchApiCall.json();
    console.log(dataRes);
    console.log(
      dataRes.data.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants,
    );

    setListofRestraunts(
      dataRes.data.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants,
    );
  };

  //React Local state varible  - Hook concept - for mormal js function
  const [listOfRestraunts, setListofRestraunts] = useState(listORestra); // useState la [] ithu default ah varbile la assgin agirum
  console.log(listOfRestraunts);

  return (
    <div className="body-component">
      <div className="filter">
        <button
          className="filter-btn-top-rated"
          onClick={() => {
            // filter logic
            const filterListOfRestraunts = listOfRestraunts.filter(
              (restrocard) => restrocard.info.avgRating >= 4.5,
            );

            setListofRestraunts(filterListOfRestraunts);
          }}
        >
          Top Rated Restarunt{" "}
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunts.map((restro) => (
          <BodyResCard key={restro.info.id} resdata={restro} />
        ))}
      </div>
    </div>
  );
};

export default BodyCompoent;
