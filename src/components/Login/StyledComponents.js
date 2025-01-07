import styled from 'styled-components'

export const LoginBackground = styled.div`
  height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginForm = styled.form`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#ffffff')};
  width: 450px;
  box-shadow: 0px 4px 5px 0px #f8fafc;
  box-shadow: ${props =>
    props.darkTheme ? '0px 2px 5px 0px #000000' : '0px 2px 5px 0px #e2e8f0'};
  border-radius: 10px;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 767px) {
    width: 300px;
    padding: 30px;
    border-radius: 5px;
  }
`

export const LogoImage = styled.img`
  width: 250px;
  margin-bottom: 40px;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    width: 150px;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`

export const Label = styled.label`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 900;
  color: ${props => (props.darkTheme ? ' #f1f5f9' : '#475569')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  height: 40px;
  outline: none;
  font-family: 'Roboto';
  background-color: transparent;
  font-weight: 500px;
  padding: 15px 10px;
  font-size: 22px;
  color: #64748b;
  border: 1px solid #94a3b8;
  border-radius: 2px;
`
export const CheckBoxInputContainer = styled(InputContainer)`
  display: flex;
  align-items: center;
`
export const CheckBoxInput = styled.input`
  width: 30px;
  height: 30px;
  border-radius: 2px;
  margin-right: 10px;
  @media screen and (max-width: 767px) {
    width: 20px;
    height: 20px;
  }
`
export const CheckBoxLabel = styled(Label)`
  font-size: 25px;
  font-weight: 500;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
export const LoginButton = styled.button`
  align-self: stretch;
  background-color: #4f46e5;
  border-radius: 10px;
  padding: 14px 0px;
  border: none;
  color: #ffffff;
  font-size: 25px;
  font-family: 'Roboto';
  outline: none;
  font-weight: 900;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    padding: 10px 20px;
    font-size: 15px;
  }
`
export const ErrorMsg = styled.p`
  font-size: 20px;
  margin-top: 5px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #ff0000;
  align-self: stretch;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
