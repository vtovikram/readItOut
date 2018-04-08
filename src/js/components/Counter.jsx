import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increase, decrease} from '../actions/counter.action';


class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textArea: undefined
    }
  }
  handleClick() {
    var text = this.state.textArea;

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'text.txt');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  textAreaChange(e) {
    const value = e.target.value;
    this.setState({textArea: value})
  }
  render() {
    return (
      <div>
        <textarea onChange={this.textAreaChange.bind(this)} value={this.state.textArea}></textarea>
        <button onClick={this.handleClick.bind(this)}>Download </button>
      </div>
    )
  }
}

export default connect(
    state => ({counter: state.counter}),
    {increase, decrease}
)(Counter);
