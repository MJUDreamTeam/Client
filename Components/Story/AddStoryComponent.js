import React from 'react';
import {Thumbnail, Body} from 'native-base';
import {View, Text, TouchableOpacity} from 'react-native';

class AddStoryComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={{flex: 1, width: 57, margin: 5}}
        onPress={() =>
          this.props.navigation.navigate('AddStoryHighlight', {
            highlight: this.props.highlight,
          })
        }>
        <Thumbnail
          style={{borderColor: 'gray', borderWidth: 1}}
          // source={{uri: user.image}} />
          source={{
            uri:
              'https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-15-512.png',
          }}
        />
        <Body style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>
          <Text numberOfLines={1} style={{fontSize: 10, textAlign: 'center'}}>
            새로 만들기
          </Text>
        </Body>
      </TouchableOpacity>
    );
  }
}

export default AddStoryComponent;
