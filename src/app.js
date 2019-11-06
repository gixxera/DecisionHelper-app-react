import React from 'react';
import './App.scss';
import AddOption from './components/AddOption';
import Options from './components/Options';
import Action from './components/Action';
import Header from './components/Header';
import OptionModal from './components/Modal';
import SearchOption from './components/SearchOption';

class App extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    filteredOptions: [],
    error: undefined
  };

  handleFilterOptions = (e) => {
    let input = e.target.value;
    let filters = [];
    if (input !== '') {
      filters = this.state.options.filter((option) => option.toLowerCase().includes(input.toLowerCase()));
    }
    this.setState(() => ({ filteredOptions: filters }));
  }

  handleClearOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handlePick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex]
    this.setState(() => ({ selectedOption: option }));
  }

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.option.value.trim();
    e.target.option.focus();

    if (!option) {
      return this.setState(() => ({error: 'You need to provide an option'}));
    } else if (this.state.options.indexOf(option) > -1) {
      return this.setState(() => ({error: 'This option already exists'}));
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option]), error: undefined }));

    if (!this.state.error) {
      e.target.option.value = '';
    }
  }

  handleEditOption = (optionToEdit, newText) => {
    let optionIndex = this.state.options.findIndex((option) => option === optionToEdit);
    let copyState = [...this.state.options];
    copyState.splice(optionIndex, 1, newText);
    this.setState({options: copyState});
  } 

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const subtitle = 'Make your decision easier';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="wrapper">
          <Action handlePick={this.handlePick} hasOptions={this.state.options.length > 0} />
          <SearchOption handleFilterOptions={this.handleFilterOptions} />
          <div className="widget">
            <Options handleEditOption={this.handleEditOption} handleDeleteOption={this.handleDeleteOption} handleDeleteOptions={this.handleDeleteOptions} options={this.state.options} filteredOptions={this.state.filteredOptions} />
            <AddOption error={this.state.error} handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal selectedOption={this.state.selectedOption} handleClearOption={this.handleClearOption} />
      </div>
    );
  }
}

export default App;
