import { MotionConfig,motion } from 'framer-motion'
import React from 'react'
import man from '../images/test21.png';
import kn from '../images/test2.png';

const Home = () => {
  return (
    <div className='home'>
        <motion.div style={{"zIndex":"3"}} initial={{y:-300,scale:0.5}} animate={{x:-147,y:-65,rotate:-350,scale:1}} transition={{duration:3}}>
            <img alt="kn" src={kn} width="120px"/>
        </motion.div>
        <motion.div initial={{rotate:230,scale:0.1}} animate={{y:-244,scale:1,rotate:[0,360]}} transition={{duration:3}}>
            <img alt="man" src={man} width="300px"/>
        </motion.div>
        
        <motion.div className='name' initial={{x:-300,scale:0.5,rotate:300}} animate={{x:0,scale:1,rotate:0}} transition={{duration:3}}>
            Hemanth <font>Kumar Reddy</font>
        </motion.div>
        <motion.div className='desc' initial={{x:300,scale:0.5,rotate:-300}} animate={{x:0,scale:1,rotate:0}} transition={{duration:3}}>
            <font>Full stack developer </font>in <font>India</font>
        </motion.div> 
    </div>
  )
}

export default Home