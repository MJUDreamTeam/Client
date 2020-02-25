import React from 'react';
import {Thumbnail, Container} from 'native-base';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
class CommentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {activity} = this.props;
    const otherImage = activity.otherThumbnail;
    const myPost = activity.myPost;

    return (
      <View style={style.container}>
        <View style={style.thumbnail}>
          <Thumbnail source={{uri: otherImage}} />
        </View>
        <View style={style.content}>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => alert('ddd')}>
                <Text>{activity.otherName} </Text>
              </TouchableOpacity>
              <Text>님이 댓글을 남겼습니다:</Text>
            </View>
            <Text> {activity.content} </Text>
            <Text style={{color: '#595959', fontSize: 12}}>
              {activity.date}주
            </Text>
          </View>
        </View>
        <View style={style.thumbnail}>
          <Thumbnail square source={{uri: myPost}} />
        </View>
      </View> 
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    padding: 10,
  },
  thumbnail: {
    flex: 1,
    padding: 4,
  },
  content: {
    flex: 4,
    padding: 2,
  },
});

export default CommentComponent;
