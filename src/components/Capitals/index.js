import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {countryName: countryAndCapitalsList[0].country}

  optionChanged = event => {
    const filteredCapital = countryAndCapitalsList.filter(eachCountryDetail =>
      eachCountryDetail.capitalDisplayText
        .toLowerCase()
        .includes(event.target.value.toLowerCase()),
    )
    this.setState({countryName: filteredCapital[0].country})
  }

  generateOption = (eachOption, id) => (
    <option value={id}>{eachOption.capitalDisplayText}</option>
  )

  render() {
    const {countryName} = this.state
    return (
      <div className="pageBackgroundContainer">
        <div className="contentContainer">
          <h1>Countries and Capitals</h1>
          <div>
            <span>
              <select
                name="capitals"
                defaultValue="NEW_DELHI"
                onChange={this.optionChanged}
              >
                {countryAndCapitalsList.map(eachOption =>
                  this.generateOption(eachOption, eachOption.id),
                )}
              </select>
              is capital of which country?
            </span>
          </div>
          <p>{countryName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

//  <option value={countryAndCapitalsList[0].id}>New Delhi</option>
//                 <option value={countryAndCapitalsList[1].id}>London</option>
//                 <option value={countryAndCapitalsList[2].id}>Paris</option>
//                 <option value={countryAndCapitalsList[3].id}>Kathmandu</option>
//                 <option value={countryAndCapitalsList[4].id}>Helsinki</option>
