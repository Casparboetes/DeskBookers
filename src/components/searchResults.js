import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class searchResult extends PureComponent {
  constructor() {
    super()
    this.renderOffices = this.renderOffices.bind(this)
  }

  renderOffices() {
    return this.props.offices.rows.map((office, index) => {
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
              {this.props.offices.rows ? this.renderOffices() : null}
            </tbody>
          </table>
        </div>
      )
  }
}

const mapStateToProps = ({ offices }) => ({ offices })

export default connect( mapStateToProps )(searchResult)
