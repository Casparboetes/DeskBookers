import React, { PureComponent } from 'react'
//components
import GoogleMap from '../components/googleMap'
import SearchResults from '../components/searchResults'
import SearchBar from '../components/searchBar'
//images
import Logo from '../images/logo.svg'


class Main extends PureComponent {

  render() {
    return(
      <div>
        <div className="nav">
            <div className="logo">
              <img src={Logo} width="291" height="50" alt="DeskbookersLogo" />
            </div>
            <div className="searchBar">
              <SearchBar />
            </div>
        </div>
        <div className="container">
            <div className="side">
              <SearchResults />
            </div>
        <div className="map">
          <GoogleMap center={{lat: 52.3702, lng: 4.8952}} />
        </div>
        </div>
      </div>
    )
  }
}

export default Main
