import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button className="btn btn--link" onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
    {props.options.length === 0 && <p class="info-paragraph">Please add an option</p>}
    {
      props.options.map((option, index) => <Option count={index + 1} key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)
    }
  </div>
);

export default Options;