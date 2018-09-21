import React from 'react'

const CurrencySelect = (props) => {
  const options = props.currency.map(item => (
    <option key={item} value={item}>{item}</option>
  ))
  return (
    <select>
      <option value="all">All</option>
      {options}
    </select>
  )
}

export default CurrencySelect
