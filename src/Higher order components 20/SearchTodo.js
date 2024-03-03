import React from 'react'
import HOC from './HOC'

const SearchTodo = ({data}) => {
    const renderData=data.map((item,index)=>{
        return(
            <div>
                {item.title}
            </div>
        )
    })
  return (
    <div>
        {renderData}

    </div>
  )
}

const Todo = HOC(SearchTodo,"todos")

export default Todo;