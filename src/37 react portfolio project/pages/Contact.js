import React from 'react'
import { motion } from 'framer-motion'
import { Col, FormGroup, Row, Form, FormLabel, FormControl, Button, ListGroup, ListGroupItem } from 'react-bootstrap'

const Contact = ({ appColor }) => {
  return (
    <motion.div className='contact' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <h2>Contact</h2>
      <Row>
        <Col>
          <motion.div initial={{ y: -300 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            <Form className='contact-form' >
              <FormGroup controlId='validation1' className='mb-3'>
                <FormLabel>Name</FormLabel>
                <FormControl className='form-control' required type='text' placeholder='Name' />

              </FormGroup>
              <FormGroup controlId='validation1'>
                <FormLabel>Email</FormLabel>
                <FormControl required type='email' placeholder='Email' />
              </FormGroup>

              <FormGroup controlId='validation1' className='mb-3'>
                <FormLabel>Message</FormLabel>
                <FormControl required as='textarea' placeholder='Message' />
              </FormGroup>
              
              <Button type='submit'>submit form</Button>
            </Form>
          </motion.div>

        </Col>
        <div className='between' style={{ "backgroundColor": appColor.textColor }}></div>

        <Col>
          <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1 }} className='contact-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci optio, minus dolore velit aperiam tenetur doloremque eos reprehenderit deserunt architecto recusandae placeat quam nesciunt, ex illum atque, culpa sed reiciendis.
            <ListGroup horizontal >
              <ListGroupItem style={{ "backgroundColor": appColor.bgColor, "color": appColor.textColor }}><a href=''></a>youtube</ListGroupItem>
              <ListGroupItem style={{ "backgroundColor": appColor.bgColor, "color": appColor.textColor }}><a href=''></a>instagram</ListGroupItem>
              <ListGroupItem style={{ "backgroundColor": appColor.bgColor, "color": appColor.textColor }}><a href=''></a>twitter</ListGroupItem>
              <ListGroupItem style={{ "backgroundColor": appColor.bgColor, "color": appColor.textColor }}><a href=''></a>facebook</ListGroupItem>
            </ListGroup>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  )
}

export default Contact