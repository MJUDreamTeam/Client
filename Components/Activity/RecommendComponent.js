import React from 'react';
import {Thumbnail, container} from 'native-base';
import {View, Text, StyleSheet} from 'react-native';

class RecommendComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {activity} = this.props;
    const myUri = activity.recommendThumbnail;
    return (
      <View style={style.container}>
        <View style={style.thumbnail}>
          <Thumbnail source={{uri: myUri}} />
        </View>
        <View style={style.content}>
          <Text>
            <Text>
              {activity.recommendPersonList[0]} 님,{' '}
              {activity.recommendPersonList[1]} 님 외 지인의 사진 및 동영상을
              보려면 팔로우하세요.
            </Text>
            <Text style={{color: '#595959', fontSize: 12}}>
              {activity.date}주
            </Text>
          </Text>
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
    flex: 5,
    padding: 2,
  },
});
export default RecommendComponent;
