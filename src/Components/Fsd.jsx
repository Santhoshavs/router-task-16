import React from 'react'
import Card from './Card'

function Fsd({data}) {
  const fsdData=data.filter(item=>item.category==="FSD")
  return <div className="container">
  <div className="row">
    {
      fsdData.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })

    }
 </div>
 </div>
}

export default Fsd