import styled from 'styled-components'

export const VisitedListItemContainer = styled.li`
  width: 300px;
  height: 250px;
  background-color: #1f1f2f;
  margin-right: 8px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CountryFlagImage = styled.img`
  width: 300px;
  height: 200px;
`
export const NameAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`
export const VisitedCountryName = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 18px;
`
export const RemoveButton = styled.button`
  border: 1px solid #f1f5f9;
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  padding: 4px;
  background: none;
  outline: none;
  cursor: pointer;
  height: 30px;
  width: 70px;
`
