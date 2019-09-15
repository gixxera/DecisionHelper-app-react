import React from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.option.value.trim();
    e.target.option.focus();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p class="info-paragraph">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" placeholder="Add option" />
          <button className="btn">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;