import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon, Container, Content, Button, Thumbnail} from 'native-base';
import PostsNavigator from '../navigators/PostsNavigator';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import EditProfile from '../Components/Profile/EditProfile';
import FollowScreen from '../Components/Profile/FollowScreen';

const following = [
  {key: 'https://rdd9223.github.io/assets/images/profile.jpg', id: '1'},
  {key: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4', id: '2'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4', id: '3'},
  {key: 'https://rdd9223.github.io/assets/images/profile.jpg', id: '4'},
  {key: 'https://avatars2.githubusercontent.com/u/55945829?s=64&v=4', id: '5'},
  {key: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4', id: '7'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4', id: '8'},
];
const follower = [
  {key: 'https://rdd9223.github.io/assets/images/profile.jpg', id: '1'},
  {key: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4', id: '2'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4', id: '3'},
  {key: 'https://rdd9223.github.io/assets/images/profile.jpg', id: '4'},
  {key: 'https://avatars2.githubusercontent.com/u/55945829?s=64&v=4', id: '5'},
  {key: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4', id: '7'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4', id: '8'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4', id: '9'},
  {key: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4', id: '10'},
];

class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="contact" style={{color: tintColor}} />
    ),
    headerShown: false,
  };
  render() {
    return (
      <Container style={{flex: 1, backgroundColor: 'white'}}>
        <Content>
          <View style={{flexDirection: 'row', paddingTop: 30}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => alert('프로필 사진 클릭', 'Image tapped')}>
                <Thumbnail
                  large
                  style={{
                    marginHorizontal: 5,
                    borderColor: 'pink',
                    borderWidth: 2,
                  }}
                  source={{
                    uri:
                      'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{flex: 2, marginTop: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text>0</Text>
                  <Text style={{fontSize: 10, color: 'gray'}}>게시물</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Follow', {
                        followerData: follower,
                        followingData: following,
                      })
                    }>
                    <View style={{alignItems: 'center'}}>
                      <Text>{follower.length + 1}</Text>
                      <Text style={{fontSize: 10, color: 'gray'}}>팔로워</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('Follow', {
                        followerData: follower,
                        followingData: following,
                      })
                    }>
                    <View style={{alignItems: 'center'}}>
                      <Text>{following.length + 1}</Text>
                      <Text style={{fontSize: 10, color: 'gray'}}>팔로잉</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
            <Text style={{fontWeight: 'bold'}}>이민환</Text>
          </View>
          <Button
            light
            style={{
              justifyContent: 'center',
              marginHorizontal: 30,
              height: 36,
            }}
            onPress={() => this.props.navigation.navigate('Edit')}>
            <Text>프로필 수정</Text>
          </Button>
          <PostsNavigator />
        </Content>
      </Container>
    );
  }
}
const AppNavigator = createStackNavigator(
  {
    Home: ProfileScreen,
    Edit: EditProfile,
    Follow: FollowScreen,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);
export default createAppContainer(AppNavigator);

//export default ProfileScreen;
