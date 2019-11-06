import React, {useState} from 'react';
import EditOption from './EditOption';

const Option = (props) => {
  let [state, setState] = useState(false);
  let [newText, setNewText] = useState(props.optionText);

  const setText = (e) => {
    setNewText(newText = e.target.value);
  }

  return (
    <div className="option">
      {state ? <EditOption setText={setText} /> : <p>{props.count}. {props.optionText}</p>}
      <div>
      <button className="btn-big btn btn--link" onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}>X</button>
      <button onClick={() => {
        setState(state = !state);
        if(!state){
        props.handleEditOption(props.optionText, newText);
      }
      }} className="btn-big btn btn--link">{state ? 'Submit' : 'Edit'}</button>
      </div>
    </div>
  );
} 

export default Option;