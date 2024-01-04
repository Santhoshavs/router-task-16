import React from 'react'
import Card from './Card'

function CyberSecurity({data}) {
  const cyberData=data.filter(item=>item.category==="Cyber")
  return <div className="container">
  <div className="row">
    {
      cyberData.map((e,i)=>{
        return <Card cardData={e} key={i}/>
      })

    }
 </div>
 </div>
}

export default CyberSecurity