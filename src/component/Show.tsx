import React from 'react'
interface ShowProp{
    img:string;
    name:string;
    date:string;
    rate:number;
    isAvailable: boolean;
}
function Show({img,name,date,rate,isAvailable}:ShowProp) {
  return (
    <div className='container'>
        <img src={img} alt="" style={{'height':'430px'}}/>
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

export default Show