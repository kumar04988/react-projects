import React from 'react'
import { motion } from 'framer-motion'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import { Card, CardGroup, CardImg } from 'react-bootstrap'

const Projects = ({ appColor }) => {

    const projectList = [
        {
            id: 1,
            name: "pro1",
            img: img1
        },
        {
            id: 2,
            name: "pro2",
            img: img2
        },
        {
            id: 3,
            name: "pro3",
            img: img3
        },
        {
            id: 4,
            name: "pro4",
            img: img1
        },
        {
            id: 5,
            name: "pro5",
            img: img2
        },
        {
            id: 6,
            name: "pro6",
            img: img3
        }
    ]
    return (
        <motion.div
            animate={{
                scale: [2, 1], //scale from 2x size to 1x
                rotate: [90, 1], //90 degrees to 0  degrees
            }}

            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <h2>Projects</h2>
            <div className='wrapper' style={{ "backgroundColor": appColor.bgColor, "color": appColor.textColor }}>

                {projectList.map((project, index) => {
                    return (
                        <motion.div className='each-card' whileHover={{ scale: 1.1 }}>
                            <Card>
                                <Card.Img variant='top' src={project.img} />
                                <Card.Body className='card-body'>
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

export default Projects