import styled from 'styled-components'

export const NoDisplayButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const TrendingRoute = styled.div`
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TrendingContainer = styled.div`
  height: 90vh;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  flex-grow: 1;
  overflow: auto;
  @media screen and (max-width: 576px) {
    padding: 0px;
  } ;
`
export const LoaderContainer = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const FailureContainer = styled.div`
  margin-top: 20px;
  width: 70%;
  margin: auto;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
    max-width: 200px;
  } ;
`

export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 23px;
  text-align: center;
  font-weight: 600;
  color: ${props => (props.darkColor ? '#f4f4f4' : '#231f20')};
`

export const FailureViewText = styled.p`
  font-family: 'Roboto';
  font-size: 19px;
  margin-top: 0px;
  text-align: center;
  font-weight: 500;
  color: ${props => (props.darkColor ? '#64748b' : '#616e7c')};
`

export const FailureViewRetryBtn = styled.button`
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
export const VideosContainer = styled.ul`
  padding: 0px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style-type: none;
`
export const LogoWithTextContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 40px 10px 40px;
  background-color: ${props => (props.darkColor ? '#181818' : '#f1f1f1')};
  @media screen and (max-width: 767px) {
    padding: 20px;
  } ;
`

export const LogoBackground = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 15px;
  box-sizing: content-box;
  background-color: ${props => (props.darkColor ? '#000000' : '#e2e8f0')};
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
  } ;
`

export const Heading = styled.h1`
  color: ${props => (props.darkColor ? '#f4f4f4' : '#212121')};
  margin-left: 30px;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 900;
  @media screen and (max-width: 767px) {
    font-size: 25px;
    margin-left: 20px;
  } ;
`
