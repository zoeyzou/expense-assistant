import React from 'react'

const Pagination = (props) => {
  return (
    <div class="c-pagination">
      <div class="c-pagination__rows">
        <span class="c-pagination__text">Rows per page:</span>
        <select>
          <option>10</option>
          <option>20</option>
        </select>
      </div>
      <div class="c-pagination__controls">
        <div class="c-pagination__controls-button"><i class="fas fa-angle-left"></i></div>
        <div class="c-pagination__controls-button"><i class="fas fa-angle-right"></i></div>
      </div>
  </div>
  )
}

export default Pagination
