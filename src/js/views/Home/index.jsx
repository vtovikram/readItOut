import React, { Component } from 'react';

import Styles from '../../../scss/views/home';

import Counter from '../../components/Counter';


export default class extends Component {

  render() {
    return (
      <div>
        <div>
          <Counter />
        </div>
      </div>
    )
  }

}
