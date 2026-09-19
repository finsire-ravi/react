import React from "react";
import BodyResCard from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyCompoent = () => {
  const [listOfRestraunts, setListofRestraunts] = useState([]); // useState la [] ithu default ah varbile la assgin agirum

  const [filterRestro, setFilterRestro] = useState([]);
  const [searchOfRestraunts, setSearchOfRestraunts] = useState("");
  const [fetchError, setFetchError] = useState("");
  const onlineStatus = useOnlineStatus();

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
    try {
      const fetchApiCall = await fetch(
        "https://namastedev.com/api/v1/listRestaurants",
      );

      if (!fetchApiCall.ok) {
        throw new Error(`Restaurant API returned ${fetchApiCall.status}`);
      }

      const dataRes = await fetchApiCall.json();
      const restaurants =
        dataRes?.data?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (!Array.isArray(restaurants)) {
        throw new Error("Restaurant data is missing or invalid");
      }

      setListofRestraunts(restaurants);
      setFilterRestro(restaurants);
    } catch (error) {
      console.error("Unable to load restaurants", error);
      setFetchError(
        "Unable to load restaurants right now. Please try again later.",
      );
    }
  };

  if (!onlineStatus) {
    return (
      <p className="fetch-error">
        You are offline. Please check your connection.
      </p>
    );
  }
  //React Local state varible  - Hook concept - for mormal js function

  if (fetchError) {
    return <p className="fetch-error">{fetchError}</p>;
  }

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
          <Link key={restro.info.id} to={"/restraunts/" + restro.info.id}>
            {" "}
            <BodyResCard resdata={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyCompoent;
