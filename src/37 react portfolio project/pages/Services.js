import React from 'react'
import { easeIn, motion } from 'framer-motion'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import {Card, CardGroup, CardImg} from 'react-bootstrap'

const Services = ({appColor}) => {
    const serviceList=[
        {
            id:1,
            name:"pro1",
            img:img1
        },
        {
            id:2,
            name:"pro2",
            img:img2
        },
        {
            id:3,
            name:"pro3",
            img:img3
        },
        {
            id:4,
            name:"pro4",
            img:img1
        },
        {
            id:5,
            name:"pro5",
            img:img2
        },
    ]
  return (
    <motion.div initial={{scaleY:0}} animate={{scaleY:1}} exit={{scaleY:0}} transition={{duration:0.5,ease:easeIn}} >
    <h2 >Services</h2>
    <div className='wrapper' style={{"backgroundColor":appColor.bgColor,"color":appColor.textColor}}>
        
        {serviceList.map((project,index)=>{
            return(
                <motion.div className='each-card' whileHover={{scale:1.1}}>
                   
                   <Card>
                    <Card.Img variant='top' src={project.img}/>
                    <Card.Body>
                        <Card.Title>{project.name}</Card.Title>
                    </Card.Body>

                   </Card>
                </motion.div>
            )
        })}


    </div>
    </motion.div>
  )
}

export default Services