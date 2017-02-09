import React, { Component, PropTypes } from 'react'
import FilterLink from '../containers/FilterLink.jsx'

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <a href='#' onClick={(e) => {
        e.preventDefault()
        this.props.onFilterChange(filter)
      }}>
        {name}
      </a>
    )
  }

  render() {
    return (
      <p>
          Show:
            {" "}
          <FilterLink filter="all">
            All
          </FilterLink>
            {", "}
          <FilterLink filter="active">
            Active
          </FilterLink>
            {", "}
          <FilterLink filter="completed">
            Completed
          </FilterLink>
      </p>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}