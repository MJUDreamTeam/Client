import React from 'react';
import {View, Icon} from 'native-base';
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';

const data = [
  {key: 'https://rdd9223.github.io/assets/images/profile.jpg'},
  {key: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4'},
  {key: 'https://rdd9223.github.io/assets/images/profile.jpg'},
  {key: 'https://avatars2.githubusercontent.com/u/55945829?s=64&v=4'},
  {key: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4'},
];

const numColumns = 3;
export default class PostsView extends React.Component {
  renderItem = ({item, index}) => {
    var ImageSource = item.key;

    return (
      <View style={styles.item}>
        <Image
          source={{uri: ImageSource}}
          style={{
            width: Dimensions.get('window').width / numColumns,
            height: Dimensions.get('window').width / numColumns,
          }}
        />
      </View>
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={data}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: 'blue',
    margin: 0.5,
    //flex: 1,
    width: Dimensions.get('window').width / numColumns,
    height: Dimensions.get('window').width / numColumns,
  },
});
