import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";

const About = ({ appColor }) => {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className='progress-bar-animate' style={{ scaleX }}>
      </motion.div>

      <div className='about' style={{ "backgroundColor": appColor.bgColor, "color": appColor.textColor, "fontSize": "20px" }}>
        About

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>
        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>
        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>


        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>
        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>
        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.</p>

        <p style={{ "color": appColor.textColor }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac rhoncus quam.

          Fringilla quam urna. Cras turpis elit, euismod eget ligula quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt neque tincidunt a.

          Sub-header
          In eget sodales arcu, consectetur efficitur metus. Duis efficitur tincidunt odio, sit amet laoreet massa fringilla eu.

          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.

          Sed sem nisi, luctus consequat ligula in, congue sodales nisl.

          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.

          Sub-header
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium.

          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor.

          Quisque convallis ligula non magna efficitur tincidunt.

          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna. Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa ut, rutrum mi.

          Sed sem nisi, luctus consequat ligula in, congue sodales nisl.

          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.

          Sub-header
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque hendrerit ac augue quis pretium.

          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique, elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex ultricies, mollis mi in, euismod dolor.

          Quisque convallis ligula non magna efficitur tincidunt.
        </p>
      </div>
    </>
  )
}

export default About