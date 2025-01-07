import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const NotFoundContainer = styled.div`
  height: 90vh;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const NFHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 0px;
  color: ${props => (props.darkTheme ? '#ffffff' : '#181818')};
`

export const NFParagrap = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  color: #64748b;
  max-width: 400px;
`

export const NotFoundImage = styled.img`
  width: 400px;
`
