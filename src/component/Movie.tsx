import React from 'react'
interface MovieProp{
    img:string;
    name:string;
    date:string;
    rate:number;
    isAvailable: boolean;
}
function Movie({img,name,date,rate,isAvailable}:MovieProp) {
  return (
    <div className='container'>
        <img src={img} alt="" />
        <h2>{name}</h2>
        Show Date: {date}
        <br />
        Rate: {rate} / 10
        <br />
        {(isAvailable)? 'Available' : 'Coming Soon'}
        {/* <button>More</button> */}
    </div>
  )
}

export default Movie