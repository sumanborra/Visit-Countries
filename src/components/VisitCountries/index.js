import {Component} from 'react'
import TopView from '../TopView'
import BottomView from '../BottomView'

import './index.css'

class VisitCountries extends Component {
  state = {initialCountriesList: this.props.initialCountriesList}

  changedButton = id => {
    const {initialCountriesList} = this.state
    const newList = initialCountriesList.map(each => {
      if (each.id === id) {
        return {
          id: each.id,
          name: each.name,
          imageUrl: each.imageUrl,
          isVisited: true,
        }
      }
      return each
    })
    this.setState({initialCountriesList: newList})
  }

  countryRemoved = id => {
    const {initialCountriesList} = this.state
    const newList = initialCountriesList.map(each => {
      if (each.id === id) {
        return {
          id: each.id,
          name: each.name,
          imageUrl: each.imageUrl,
          isVisited: false,
        }
      }
      return each
    })
    this.setState({initialCountriesList: newList})
  }

  render() {
    const {initialCountriesList} = this.state
    return (
      <div className="background-main-container">
        <TopView
          initialCountriesList={initialCountriesList}
          changedButton={this.changedButton}
        />
        <BottomView
          initialCountriesList={initialCountriesList}
          countryRemoved={this.countryRemoved}
        />
      </div>
    )
  }
}
export default VisitCountries
