import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

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
      isLoaded: true,
    }
  }

  componentDidMount() {
    fetch("https://www.deskbookers.com/nl-nl/explore/ajax.json?q=amsterdam")
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
    return this.props.offices.rows.map((office) => {
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
                initialCenter={this.props.center}
                center={this.props.offices.center}
                zoom={13}
                >
                {this.props.offices.rows ? this.renderMarker() : null}
            </Map>
          </div>
        )
      }
  }
}

const mapStateToProps = ({ offices }) => ({ offices })

export default connect( mapStateToProps )(GoogleApiWrapper({
  apiKey: 'AIzaSyByixSekM2R5J1v3lvbGi3qVOmr5pUK_XI' })(GoogleMap))
