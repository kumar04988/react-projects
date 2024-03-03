import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import './users.scss';

const Users = () => {
    const [items,setItems]=useState([])
    console.log("users component rerendered")
    console.log("items",items)
    const itemName = "pizza"

    useEffect(()=>{
        axios.get(`https://www.edamam.com/api/recipes/v2?type=public&q=${itemName}&_=1674643765971`).then((res)=>setItems(res.data)).catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className='item-food-wrapper'>
        Users
        <div className='item-flex'>
            {Object.keys(items).length!==0 &&
                items.hits.map((i)=>{

                    return(
                        <div >
                           <div> <img src={i.recipe.image} /></div>
                        </div>
                    )
                })
            }

        </div>

    </div>
  )
}


// now,we made this functional component as pure component.so,if there is no state values or props ChannelMergerNode.this component won't rerender
const UserMemo = React.memo(Users)

export default UserMemo;