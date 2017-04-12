import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class EmployeeList extends Component {
  renderList () {
    return this.props.employees.map(employee => {
      return (
        <li key={employee.name}>{employee.name}</li>
      )
    })
  }

  render () {
    return (
      <ul>
        {this.renderList()}
      </ul>
    )
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.array
}

function mapStateToProps (state) {
  return {
    employees: state.employees
  }
}

export const Unwrapped = EmployeeList

export default connect(mapStateToProps)(EmployeeList)
