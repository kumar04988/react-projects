import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Exit = () => {
    const navigate=useNavigate()
  return (
    <div style={{"textAlign":"center"}}>
        <h2><i>Thanks for Shopping......</i></h2>
        <div>
            <button style={{"backgroundColor":"tomato","color":"white","padding":"10px 20px","borderRadius":"6px","border":"none","cursor":"pointer"}} onClick={()=>navigate("/")}>
                Back to home
            </button>
        </div>
    </div>
  )
}

export default Exit