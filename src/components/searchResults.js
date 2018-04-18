import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
//styling
import './searchResults.css'

class searchResult extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      offices: [],
    }
    this.renderOffices = this.renderOffices.bind(this)
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

  renderOffices() {
    return this.props.offices.map((office, index) => {
      return(
        <tr key={office.id}>
          <td>{ office.name}</td>
          <td>{ office.location_name}</td>
          <td>{ office.location_city}</td>
          <td> &euro;{ office.hour_price}</td>
          <td> &euro;{ office.day_price}</td>
        </tr>
      )
    })
  }

  render() {

    const { error, isLoaded } = this.state

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div><br />Loading...</div>
    } else {
      return (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"><h3>Naam</h3></th>
                  <th scope="col"><h3>Bedrijf</h3></th>
                  <th scope="col"><h3>Plaats</h3></th>
                  <th scope="col"><h3>p.p.u.</h3></th>
                  <th scope="col"><h3>p.p.d.</h3></th>
                </tr>
              </thead>
              <tbody>
                {this.state.offices ? this.renderOffices() : null}
              </tbody>
            </table>
          </div>
      )
    }
  }
}

const mapStateToProps = ({ offices }) => ({ offices })

export default connect( mapStateToProps )(searchResult)
