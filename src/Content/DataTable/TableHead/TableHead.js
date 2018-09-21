import React from 'react';

const TableHead = (props) => {
  const titles = props.titles.map(title => (
    <th key={title}>{title}</th>
  ));

  return (
    <thead>
      <tr>
        {titles}
      </tr>
    </thead>
  )
}

export default TableHead;
