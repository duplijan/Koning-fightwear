import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { Button } from '../home/Home-styled-components'

import { Wrapp, FormGroup, ContactForm, Input, TextArea, ContactHeader} from './Contact-styled-components'

const Contact = () => {
  return (
    <Wrapp>
      <FormGroup>
        <ContactHeader>GET IN TOUCH</ContactHeader>
          <ContactForm>
          <Input placeholder='name' />
          <Input placeholder='email' />
          <TextArea placeholder='message' />
          <Button>send</Button>
        </ContactForm>
      </FormGroup>
    </Wrapp>
  )
}

export default Contact;
