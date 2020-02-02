import React from 'react';
import {View, Icon} from 'native-base';
import {
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
  Text,
  ScrollView,
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

class InnerScrollView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {data.map((contact, i) => {
          return <ScrollViewItem src={contact.key} key={i} />;
        })}
      </View>
    );
  }
}
class ScrollViewItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.item}>
        <Image
          source={{uri: this.props.src}}
          style={{
            width: Dimensions.get('window').width / numColumns - 1,
            height: Dimensions.get('window').width / numColumns - 1,
          }}
        />
      </View>
    );
  }
}

export default class PostsView extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <InnerScrollView />
        </ScrollView>
      </SafeAreaView>
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
    width: Dimensions.get('window').width / numColumns - 1,
    height: Dimensions.get('window').width / numColumns - 1,
  },
});
