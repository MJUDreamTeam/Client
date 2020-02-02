import React from 'react';
import {TextInput} from 'react-native';

export default class EditText extends React.Component {
  state = {
    text: '',
  };

  render() {
    return (
      <TextInput
        underlineColorAndroid={'gray'}
        value={this.state.text}
        onChangeText={text => this.setState({text})}
      />
    );
  }
}
