import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginBackground,
  LoginForm,
  LogoImage,
  InputContainer,
  Input,
  LoginButton,
  CheckBoxLabel,
  CheckBoxInput,
  CheckBoxInputContainer,
  Label,
  ErrorMsg,
} from './StyledComponents'
import ThemeContent from '../../context/ThemeContext'

const lightLogoImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkLogoImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    username: 'rahul',
    password: 'rahul@2021',
    showErrMsg: false,
    errorMsg: '',
    showPassword: 'password',
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeCheckBox = event => {
    const showPassword = event.target.checked
    if (showPassword) {
      this.setState({
        showPassword: 'text',
      })
    } else {
      this.setState({
        showPassword: 'password',
      })
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      errorMsg,
      showErrMsg: true,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const body = JSON.stringify({username, password})
    const option = {
      method: 'POST',
      body,
    }
    const response = await fetch(apiUrl, option)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContent.Consumer>
        {value => {
          const {darkTheme} = value
          const {showErrMsg, errorMsg, username, password, showPassword} =
            this.state

          return (
            <LoginBackground darkTheme={darkTheme}>
              <LoginForm darkTheme={darkTheme} onSubmit={this.submitForm}>
                <LogoImage
                  alt="website logo"
                  src={darkTheme ? darkLogoImage : lightLogoImage}
                />
                <InputContainer>
                  <Label darkTheme={darkTheme} htmlFor="Username">
                    USERNAME
                  </Label>
                  <Input
                    type="text"
                    onChange={this.onChangeUserName}
                    value={username}
                    id="Username"
                    placeholder="Enter 'rahul' as the username"
                  />
                </InputContainer>
                <InputContainer>
                  <Label darkTheme={darkTheme} htmlFor="Password">
                    PASSWORD
                  </Label>
                  <Input
                    type={showPassword}
                    onChange={this.onChangePassword}
                    value={password}
                    id="Password"
                    placeholder="Enter 'rahul@2021' as the password"
                  />
                </InputContainer>
                <CheckBoxInputContainer>
                  <CheckBoxInput
                    onChange={this.onChangeCheckBox}
                    type="checkbox"
                    id="ShowPassword"
                  />
                  <CheckBoxLabel darkTheme={darkTheme} htmlFor="ShowPassword">
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxInputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrMsg && <ErrorMsg>{`*${errorMsg}`}</ErrorMsg>}
              </LoginForm>
            </LoginBackground>
          )
        }}
      </ThemeContent.Consumer>
    )
  }
}
export default Login
