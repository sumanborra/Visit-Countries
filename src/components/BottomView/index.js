import BottomViewItems from '../BottomViewItems'
import './index.css'

const BottomView = props => {
  const {initialCountriesList, countryRemoved} = props
  // const {id, name, imageUrl, isVisited} = initialCountriesList
  const filteredList = initialCountriesList.filter(each => each.isVisited)
  const resultPageVisitedCountries =
    filteredList.length > 0 ? (
      <ul className="list-container-bottom-view">
        {filteredList.map(each => (
          <BottomViewItems
            initialCountriesList={each}
            key={each.id}
            countryRemoved={countryRemoved}
          />
        ))}
      </ul>
    ) : (
      <div className="no-coutries-container">
        <p className="no-countries-visited-text">No Countries Visited Yet!</p>
      </div>
    )
  return (
    <div className="bottom-view-main-container">
      <h1 className="visited-countries-text">Visited Countries</h1>
      {resultPageVisitedCountries}
    </div>
  )
}
export default BottomView
