import React from 'react'

const BodyResCard = (props) => {
  console.log(props)
  const {resdata} = props
  return (
   
      <div className="res-card" >
      <img className="res-card-image" src={resdata.logo.CDN_URL} alt="logo" />
      <h2 className="res-card-title">{resdata.name}</h2>
      <h3 className="res-card-cuisine">{resdata.cusine.join(",")}</h3>
      <h4 className="res-card-rating">{resdata.rating} Star</h4>
      <h4 className="res-card-esimated">{resdata.tragettime}</h4>
    </div>
    
  )
}

export default BodyResCard;
