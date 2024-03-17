import './index.css'

const TopViewItems = props => {
  const {initialCountriesList, changedButton} = props
  const {id, name, imageUrl, isVisited} = initialCountriesList
  const changeButton = () => {
    changedButton(id)
  }
  const buttonresult = isVisited ? (
    <p className="para-visited-text">Visited</p>
  ) : (
    <button type="button" className="buttn" onClick={changeButton}>
      Visit
    </button>
  )
  return (
    <li className="list-items">
      <div className="items-container">
        <p className="text-para">{name}</p>
        {buttonresult}
      </div>
      <hr className="harizontal-line" />
    </li>
  )
}
export default TopViewItems
