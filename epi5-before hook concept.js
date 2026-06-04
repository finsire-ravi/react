import React from 'react'
import BodyResCard from "./src/components/Rescard"
import {CDN_URL} from "./src/utils/constants"
import { useState } from 'react'

const BodyCompoent = () => {
  

  //React Local state varible  - Hook concept - for mormal js function
 
  //Normal Js varbile
  const listOfRestraunts = [{
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

  return (
    <div className="body-component">
      <div className="filter">
        <button className='filter-btn-top-rated' 
        onClick={() => {
          // filter logic
          const filterListOfRestraunts = listOfRestraunts.filter((restrocard) => restrocard.rating>=4.5)

          console.log(filterListOfRestraunts)
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


export default BodyCompoent;
