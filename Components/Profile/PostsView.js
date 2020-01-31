import React from 'react';
import {View, Icon} from 'native-base';
import {TouchableOpacity, StyleSheet, FlatList, Image} from 'react-native';

const data = [
  {key: 'https://rdd9223.github.io/assets/images/profile.jpg'},
  {key: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4'},
  {key: 'https://rdd9223.github.io/assets/images/profile.jpg'},
  {key: 'https://avatars2.githubusercontent.com/u/55945829?s=64&v=4'},
  {key: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4'},
  {
    key:
      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  },
];

const numColumns = 3;
export default class PostsView extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name={'grid'} color={tintColor} size={25} />
    ),
  };
  renderItem = ({item, index}) => {
    var ImageSource = item.key;
    return (
      <View style={styles.item}>
        <Image source={{uri: ImageSource}} style={{width: 125, height: 125}} />
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
    margin: 13,
  },
  item: {
    backgroundColor: 'blue',
    margin: 1,
    width: 125,
    //height: Dimensions.get('window').width / numColumns,
    height: 125,
  },
});
