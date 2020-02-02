import React from 'react';
import {
  View,
  Text,
  Icon,
  Container,
  Content,
  Button,
  Thumbnail,
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default class FollowItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Thumbnail
          style={{
            marginHorizontal: 5,
            borderWidth: 2,
          }}
          source={{uri: this.props.src}}
        />
        <View style={styles.text}>
          <Text>{this.props.id}</Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={{borderWidth: 1, borderColor: 'grey', borderRadius: 4}}
            onPress={() => alert('삭제')}>
            <Text style={{paddingVertical: 3, paddingHorizontal: 7}}>삭제</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: '2%',
    //backgroundColor: 'red',
  },
  text: {
    justifyContent: 'center',
    width: '65%',
    //backgroundColor: 'blue',
    marginHorizontal: '3%',
  },
  button: {
    justifyContent: 'center',
    //backgroundColor: 'yellow',
    alignItems: 'center',
  },
});
