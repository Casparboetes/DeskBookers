import React, { PureComponent } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const googleMapStyle = {
  width: '59.5%',
  height: '92%',
  position: 'fixed',
}

class GoogleMap extends PureComponent {
  constructor() {
    super()
    this.state = {
      error: null,
      isLoaded: false,
      offices: [],
    }
  }

  componentDidMount() {
    fetch("https://www.deskbookers.com/nl-nl/explore/ajax.json?q=amsterdam")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            offices: result.rows
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  renderMarker(offices) {
    return this.state.offices.map((office) => {
      return(
        <Marker
          key={ office.id }
          title={ office.location_name }
          name={ office.address }
          icon={ 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'}
          position={{ lat: office.coordinate[0], lng: office.coordinate[1] }}
        />
      )
    })
  }

  render() {

      const { error, isLoaded } = this.state

      if (error) {
        return <div>Error: {error.message}</div>
      } else if (!isLoaded) {
        return <div>Loading...</div>
      } else {
        return (
          <div style={ googleMapStyle }>
            <Map
                google={ this.props.google }
                initialCenter={{ lat: 52.3702, lng: 4.8952 }}
                zoom={13}
                onClick={ this.onMapClicked }
                >
                {this.state.offices ? this.renderMarker() : null}
            </Map>
          </div>
        )
      }
  }
}


export { GoogleMap }
export default GoogleApiWrapper({
  apiKey: 'AIzaSyByixSekM2R5J1v3lvbGi3qVOmr5pUK_XI' })(GoogleMap)
