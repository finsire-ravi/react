import React from "react";
import BodyResCard from "./Rescard";
import { CDN_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyCompoent = () => {
  const [listOfRestraunts, setListofRestraunts] = useState([]); // useState la [] ithu default ah varbile la assgin agirum

  const [filterRestro, setFilterRestro] = useState([]);
  const [searchOfRestraunts, setSearchOfRestraunts] = useState("");

  console.log(listOfRestraunts);
  console.log("LIST");
  console.log(filterRestro);
  console.log("File");
  console.log(searchOfRestraunts);
  //Use Effect

  useEffect(() => {
    fetchAPiCall();
  }, []);

  const fetchAPiCall = async () => {
    const fetchApiCall = await fetch(
      "https://namastedev.com/api/v1/listRestaurants",
    );

    const dataRes = await fetchApiCall.json();

    setListofRestraunts(
      dataRes.data.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants,
    );

    setFilterRestro(
      dataRes.data.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants,
    );
  };

  //React Local state varible  - Hook concept - for mormal js function

  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-component">
      <div className="filter">
        <div className="search-container">
          <div className="saerc-bar">
            <input
              text="search"
              placeholder="Enter the Restro"
              value={searchOfRestraunts}
              onChange={(e) => {
                setSearchOfRestraunts(e.target.value);
              }}
            ></input>
            <button
              onClick={() => {
                const filterRestraunts = listOfRestraunts.filter((restrocard) =>
                  restrocard.info.name
                    .toLowerCase()
                    .includes(searchOfRestraunts.toLowerCase()),
                );

                setFilterRestro(filterRestraunts);
              }}
            >
              Search
            </button>
          </div>
        </div>
        <button
          className="filter-btn-top-rated"
          onClick={() => {
            // filter logic
            const filterListOfRestraunts = listOfRestraunts.filter(
              (restrocard) => restrocard.info.avgRating >= 4.5,
            );
            setFilterRestro(filterListOfRestraunts);
          }}
        >
          Top Rated Restarunt{" "}
        </button>
      </div>
      <div className="res-container">
        {filterRestro.map((restro) => (
          <BodyResCard key={restro.info.id} resdata={restro} />
        ))}
      </div>
    </div>
  );
};

export default BodyCompoent;
