import React from 'react'
import BodyResCard from "./Rescard"
import {CDN_URL} from "../utils/constants"
import { useState } from 'react'

const BodyCompoent = () => {

  //Normal Js
  let listOfRestra = [{
    name: "KFC",
    logo: {CDN_URL},
    cusine: ["Fried Chicken", "Burger"],
    rating: 4.5,
    tragettime: "37 minutes"
  },
  {
    name: "Pizzahut",
    logo: {CDN_URL},
    cusine: ["Pizza", "Burger"],
    rating: 4.1,
    tragettime: "30 minutes"
  },
  {
    name: "MCD",
    logo: {CDN_URL},
    cusine: ["Pizza", "Burger", "Chicken"],
    rating: 4.7,
    tragettime: "25 minutes"
  }];

  //React Local state varible  - Hook concept - for mormal js function
  const [listOfRestraunts, setListofRestraunts] = useState(listOfRestra) // useState la [] ithu default ah varbile la assgin agirum
  console.log(listOfRestraunts )

  

  return (
    <div className="body-component">
      <div className="filter">
        <button className='filter-btn-top-rated' 
        onClick={() => {
          // filter logic
          const filterListOfRestraunts = listOfRestraunts.filter((restrocard) => restrocard.rating>=4.5)

          setListofRestraunts(filterListOfRestraunts)
          }}> 
          Top Rated Restarunt </button>
        </div>
      <div className="res-container">
        {/* <BodyResCard resName = "Chaminar" resLogo = {CDN_URL} resCusine="Indian Food" resRating= "4.5" resTragetTime="37 minutes"/>
        <BodyResCard resName = "KFC" resLogo = {CDN_URL} resCusine="Indian KFC Food" resRating= "4.9" resTragetTime="40 minutes"/> */}

        {listOfRestraunts.map((restro, index) => (<BodyResCard key = {index} resdata = {restro} />)) }
      </div>

    </div>
  )
}


//   let restaurantList = [{
//     id:1,
//     name: "KFC",
//     logo: {CDN_URL},
//     cusine: ["Fried Chicken", "Burger"],
//     rating: 4.5,
//     tragettime: "37 minutes"
//   },
//   {
//     name: "Pizzahut",
//     id:2,
//     logo: {CDN_URL},
//     cusine: ["Pizza", "Burger"],
//     rating: 4.1,
//     tragettime: "30 minutes"
//   },
//   {
//     name: "MCD",
//     id:3,
//     logo: {CDN_URL},
//     cusine: ["Pizza", "Burger", "Chicken"],
//     rating: 4.7,
//     tragettime: "25 minutes"
//   }];

// const BodyCompoent = () => {
//   const [searchText, setSearchText] =
//     useState("");

//   const filteredRestaurants =
//     restaurantList.filter((res) =>
//       res.name
//         .toLowerCase()
//         .includes(searchText.toLowerCase())
//     );

//     console.log(filteredRestaurants)

//   return (
//     <>
//       <input
//         type="text"
//         value={searchText}
//         placeholder="Search Restaurant"
//         onChange={(e) =>
//           setSearchText(e.target.value)
//         }
//       />
 
//       {filteredRestaurants.map((res) => (
//         <BodyResCard
//           key={res.id}
//           resdata = {res}
//         />
//       ))}
//     </>
//   );
// };

export default BodyCompoent;
