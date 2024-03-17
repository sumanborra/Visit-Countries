import TopViewItems from '../TopViewItems'
import './index.css'

const TopView = props => {
  const {initialCountriesList, changedButton} = props
  return (
    <div>
      <h1 className="heading-top-view">Countries</h1>

      <ul className="list-container">
        {initialCountriesList.map(each => (
          <TopViewItems
            initialCountriesList={each}
            key={each.id}
            changedButton={changedButton}
          />
        ))}
      </ul>
    </div>
  )
}
export default TopView
