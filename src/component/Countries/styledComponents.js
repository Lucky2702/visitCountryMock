import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #161624;
  min-height: 100vh;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  align-self: flex-start;
  padding-left: 50px;
`
export const CountriesListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 500px;
`
export const VisitedCountriesListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 90%;
  flex-wrap: wrap;
`
export const NoCountryText = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 22px;
  text-align: center;
  margin: auto;
  align-self: center;
`
