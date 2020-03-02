import React from 'react';
import {View, Icon} from 'native-base';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  ImageBackground,
} from 'react-native';
import {
  CheckBox,
  Body,
  ListItem,
  Right,
  Left,
  Badge,
  Button,
} from 'native-base';
const numColumns = 3;

export default class StoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Story', {
            content: this.props.src,
          })
        }>
        <ImageBackground source={{uri: this.props.src}} style={styles.item}>
          <View style={styles.inner}>
            <View
              style={{backgroundColor: 'black', borderRadius: 5, width: 40}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'white',
                }}>
                {this.props.date}
              </Text>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 12}}>
                {this.props.month}월
              </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'blue',
    margin: 0.5,
    width: Dimensions.get('window').width / numColumns - 1,
    height: 230,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 12,
    marginRight: 17,
  },
});
