import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchOffices } from '../actions/fetch'
import AutoComplete from 'material-ui/AutoComplete'
import RaisedButton from 'material-ui/RaisedButton'

class SearchBar extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: [],
      searchTerm: 'Amsterdam',
    }
  }

  handleUpdateInput = (value) => {
    this.setState({
      searchTerm: value,
      dataSource: [
        value
      ]
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchOffices(this.state.searchTerm)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <AutoComplete
            hintText='Enter city...'
            dataSource={this.state.dataSource}
            onUpdateInput={this.handleUpdateInput.bind(this)}
          />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <RaisedButton
          label='Search'
          type='submit'
          primary={true}
          />
        </form>
      </div>
    )
  }
}

export default connect(null, { fetchOffices })(SearchBar)
