import {
  VisitedListItemContainer,
  CountryFlagImage,
  VisitedCountryName,
  RemoveButton,
  NameAndButtonContainer,
} from './styledComponents'

const VisitedCountries = props => {
  const {item, onClickRemove} = props
  const {id, name, imageUrl} = item
  const onClickRemoveButton = () => {
    onClickRemove(id)
  }

  return (
    <VisitedListItemContainer>
      <CountryFlagImage src={imageUrl} alt="thumbnail" />
      <NameAndButtonContainer>
        <VisitedCountryName>{name}</VisitedCountryName>
        <RemoveButton type="button" onClick={onClickRemoveButton}>
          Remove
        </RemoveButton>
      </NameAndButtonContainer>
    </VisitedListItemContainer>
  )
}

export default VisitedCountries
