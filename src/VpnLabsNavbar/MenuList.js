import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './menuList.scss'
const MenuList = () => {

    const [clicked,setClicked]=useState(false)
    const List = [
        {
            title: "Home",
            url: "/"
        },
        {
            title: "KeyFeature",
            url: "/key_feature"
        },
        {
            title: "Pricing",
            url: "/pricing"
        },
        {
            title: "Testimonial",
            url: "/testmonial"
        },
        {
            title: "Try for free",
            url: "/try-for-free"
        },
    ]

    const renderList = List.map(({ url, title }, index) => {
        return (
            <div key={index} className="menu-list-render">
                <li><a href={url}  activeClassName="active">{title}</a></li>
            </div>
        )
    })

    return (
        <>
        <div className='menu-icon'  onClick={()=>setClicked(!clicked)}>
        <i className={clicked?"fa fa-times":'fa fa-bars'} ></i>


        </div>
        {/* <div className='three-bars'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
</div> */}
<div className={clicked? 'render-list':"render-list closed"} >
            {renderList}
            
        </div>
</>
    )
}

export default MenuList