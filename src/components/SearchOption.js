import React from 'react';

const SearchOption = (props) => (
  <div>
    <input className="filter-option" onChange={props.handleFilterOptions} type="text" placeholder="Seach option" />
  </div>
);

export default SearchOption;