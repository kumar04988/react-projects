import React from 'react'
import HOC from './HOC';

const SearchUsers = ({data}) => {
    console.log("users data",data)
    const renderData=data.map((item,index)=>{
            return(
                <div key={index}>
                    {item.name}
                </div>
            )
        })

return (
    <div>
        {renderData}
    </div>
  )
}

const Users= HOC(SearchUsers,"users")
export default Users;