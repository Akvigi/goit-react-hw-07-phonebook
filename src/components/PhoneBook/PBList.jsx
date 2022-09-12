import React from 'react'
import PropTypes from 'prop-types'

const List = ({ array = [], del }) => {
  return (
      <ul>
        {array.length !== 0 ? array.map(item => <li key={item.id}>{item.name}: {item.number} <button onClick={() => del(item.id)} type='click'>delete</button></li>) : <li>Havent contacts to show</li>}
      </ul>
  )
}

List.propTypes = {
  array: PropTypes.array,
  del: PropTypes.func
}

export default List