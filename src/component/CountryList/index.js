import {
  CountryListItemContainer,
  CountryItemContainer,
  CountryName,
  CountryButton,
  CountryParagraph,
} from './styledComponents'

const CountryList = props => {
  const {item, onClickVisit} = props
  const {id, name, isVisited} = item

  const onClickVisitButton = () => {
    onClickVisit(id)
  }

  return (
    <CountryListItemContainer>
      <CountryItemContainer>
        <CountryName>{name}</CountryName>
        {isVisited ? (
          <CountryParagraph>Visited</CountryParagraph>
        ) : (
          <CountryButton type="button" onClick={onClickVisitButton}>
            Visit
          </CountryButton>
        )}
      </CountryItemContainer>
    </CountryListItemContainer>
  )
}

export default CountryList
