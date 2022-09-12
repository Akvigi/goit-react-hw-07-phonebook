import { Label } from 'components/styled-comp/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from 'redux/filterSlice'
import PropTypes from 'prop-types'

const PBSearch = () => {
  const dispatch = useDispatch()
  const array = useSelector(state => state.contacts)
  return (
    <>
        {array.length > 0 && <Label>Find contacts by name
            <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={(e)=> dispatch(setFilter(e.currentTarget.value))} 
            />
        </Label>}
    </>
  )
}

PBSearch.propTypes = {
  array: PropTypes.array,
//   onChange: PropTypes.func  
}

export default PBSearch