import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteC } from 'redux/contactsSlice'

const List = ({ array }) => {
  const dispatch = useDispatch()
  return (
      <ul>
        {array.length !== 0 ? array.map(item => <li key={item.id}>{item.name}: {item.number} <button onClick={() => dispatch(deleteC(item.id))} type='click'>delete</button></li>) : <li>Havent contacts to show</li>}
      </ul>
  )
}

List.propTypes = {
  array: PropTypes.array,
  // onDelete: PropTypes.func
}

export default List