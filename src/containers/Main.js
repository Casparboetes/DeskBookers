import React, { PureComponent } from 'react'
//components
import GoogleMap from '../components/googleMap'
import SearchResults from '../components/searchResults'
//images
import Logo from '../images/logo.svg'
//styling
import './Main.css'

class Main extends PureComponent {

  render() {
    return(
      <div>
      <div className="nav">
        <div className="row">
          <div className="logo">
        <img src={Logo} width="291" height="50" alt="DeskbookersLogo" />
      </div>
    </div>
      </div>
      <div className="container">
        <div className="side">
          <SearchResults />
        </div>
        <div className="map">
          <GoogleMap />
        </div>
      </div>
    </div>
    )
  }
}

export default Main
