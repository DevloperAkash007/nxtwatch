import styled from 'styled-components'

export const NoDisplayButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const HomeRoute = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const HomeContainer = styled.div`
  height: 90vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
`
export const BannerSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 30vh;
  padding: 20px 40px;
`
export const BsLogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const BsLogo = styled.img`
  width: 120px;
`
export const BsCloseBtn = styled(NoDisplayButton)``

export const BsPara = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #475569;
  max-width: 400px;
`
export const GetItNowBtn = styled.button`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  color: #181818;
  background-color: transparent;
  padding: 10px 20px;
  border: 2px solid #475569;
  border-radius: 5px;
  outline: none;
`

export const LoaderContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const InputContainer = styled.div`
  padding: 10px 20px 10px 20px;
  margin-top: 10px;
`
export const InputItem = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  border: 2px solid #64748b;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const Input = styled.input`
  width: 100%;
  padding: 5px 10px;
  height: 30px;
  border: none;
  outline: none;
  font-size: 18px;
  font-family: 'Roboto';
  color: #475569;
  font-weight: 400;
  background-color: transparent;
`
export const SearchButton = styled(NoDisplayButton)`
  padding: 0px 30px;
  height: 30px;
  border-left: 2px solid #64748b;
  background-color: #f1f1f1;
`
export const VideosContainer = styled.ul`
 padding 10px 20px 10px 20px;
 display: flex;
 flex-wrap: wrap;
 width: 100%;
 list-style-type: none;
 `

export const NoSearchResultContainer = styled.div`
  padding: 10px 20px 50px 20px;
  margin-top: 20px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoSearchImage = styled.img`
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  } ;
`

export const NoSearchHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  font-weight: 600;
  color: ${props => (props.darkColor ? '#f4f4f4' : '#231f20')};
`

export const NoSearchText = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  margin-top: 0px;
  text-align: center;
  font-weight: 500;
  color: ${props => (props.darkColor ? '#64748b' : '#616e7c')};
`

export const NoSearchRetryBtn = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  background-color: #4f46e5;
  padding: 10px 35px;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`

export const FailureContainer = styled(NoSearchResultContainer)``

export const FailureImage = styled(NoSearchImage)``

export const FailureViewHeading = styled(NoSearchHeading)``

export const FailureViewText = styled(NoSearchText)``

export const FailureViewRetryBtn = styled(NoSearchRetryBtn)``
