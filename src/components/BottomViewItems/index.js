import './index.css'

const BottomViewItems = props => {
  const {initialCountriesList, countryRemoved} = props
  const {id, name, imageUrl, isVisited} = initialCountriesList
  const removeCountry = () => {
    countryRemoved(id)
  }
  return (
    <li className="list-item-visted-country-image">
      <img src={imageUrl} alt="thumbnail" className="image-visited" />
      <div className="container-visited-list">
        <p className="country-name-text">{name}</p>
        <button type="button" className="buttn-remove" onClick={removeCountry}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default BottomViewItems
