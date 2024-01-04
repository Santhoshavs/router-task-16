import React from 'react'
import Card from './Card'

function DataScience({data}) {
  const dataScienceData=data.filter(item=>item.category==="Dscience")
  return <div className="container">
  <div className="row">
    {
      dataScienceData.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })

    }
 </div>
 </div>
}

export default DataScience