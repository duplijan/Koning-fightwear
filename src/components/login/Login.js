import React from 'react'
import { Main } from '../home/Home-styled-components'

import { Wrapp, LoginHeader, LoginForm, LoginInput, Label, InputGroup, ChechBox, LoginButton,
        Group, HelpButton

} from './Login-styled-components'

const Login = () => {
  return (
    <Wrapp>
      <Main>
        <LoginHeader>Welcome back!</LoginHeader>
        <LoginForm>
          <InputGroup>
            <LoginInput type='text'placeholder='email' />
            <LoginInput type='password'placeholder='password' />
            <ChechBox type='checkbox'/>
            <Label htmlFor='checkbox'>remember me</Label>
            <LoginButton>LOGIN</LoginButton>
          </InputGroup>
            <Group>
              <HelpButton left>sign up</HelpButton>
              <HelpButton>forgot password?</HelpButton>
            </Group>
        </LoginForm>

      </Main>
    </Wrapp>
  )
}

export default Login;
