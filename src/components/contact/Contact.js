import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Button } from '../home/Home-styled-components'

import { Wrapp, Center, FormGroup, ContactForm, Input, TextArea, ContactHeader} from './Contact-styled-components'

const Contact = () => {
  return (
    <Wrapp>
      <Center>
      <FormGroup>
        <ContactHeader>GET IN TOUCH</ContactHeader>
          <ContactForm>
          <Input placeholder='name' />
          <Input placeholder='email' />
          <TextArea placeholder='message' />
          <Button>send</Button>
        </ContactForm>
      </FormGroup>
      </Center>
    </Wrapp>
  )
}

export default Contact;
