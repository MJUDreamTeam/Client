/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {
  Header,
  Icon,
  Container,
  Content,
  Button,
  Thumbnail,
  Body,
  Right,
  Left,
  Title,
  ActionSheet,
} from 'native-base';
//게시물 네비게이터
import PostsNavigator from '../navigators/PostsNavigator';
import {createAppContainer} from 'react-navigation';
//스택네비게이션
import {createStackNavigator} from 'react-navigation-stack';
//프로필수정스크린
import EditProfile from '../Components/Profile/EditProfile';
//팔로워,팔로잉스크린
import FollowScreen from '../Components/Profile/FollowScreen';
//스토리 드롭다운 뷰
import Accordion from '@dooboo-ui/native-accordion';
import StoryHeaderComponent from '../Components/Story/StoryHeaderComponent';
import AddStoryComponent from '../Components/Story/AddStoryComponent';
import {ScrollView} from 'react-native-gesture-handler';

var userData = {
  name: '이민환',
  userId: 'hvv_an2',
  webSite: '',
  intro: '',
  email: 'eminhwan@naver.com',
  phoneNum: '010-2597-5747',
  gender: 'male',
};

const following = [
  {
    profileImage: 'https://rdd9223.github.io/assets/images/profile.jpg',
    id: '1',
  },
  {
    profileImage: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4',
    id: '2',
  },
  {
    profileImage: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4',
    id: '3',
  },
  {
    profileImage: 'https://rdd9223.github.io/assets/images/profile.jpg',
    id: '4',
  },
  {
    profileImage: 'https://avatars2.githubusercontent.com/u/55945829?s=64&v=4',
    id: '5',
  },
  {
    profileImage: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4',
    id: '6',
  },
  {
    profileImage: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4',
    id: '7',
  },
];
const follower = [
  {
    profileImage: 'https://rdd9223.github.io/assets/images/profile.jpg',
    id: '1',
  },
  {
    profileImage: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4',
    id: '2',
  },
  {
    profileImage: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4',
    id: '3',
  },
  {
    profileImage: 'https://rdd9223.github.io/assets/images/profile.jpg',
    id: '4',
  },
  {
    profileImage: 'https://avatars2.githubusercontent.com/u/55945829?s=64&v=4',
    id: '5',
  },
  {
    profileImage: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4',
    id: '6',
  },
  {
    profileImage: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4',
    id: '7',
  },
  {
    profileImage: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4',
    id: '8',
  },
  {
    profileImage: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4',
    id: '9',
  },
];
const storyHighlight = [
  {
    name: 'qqqq',
    content: 'con',
    key: '1',
  },
  {
    name: 'wwww',
    content: 'con',
    key: '2',
  },
  {
    name: 'eeee',
    content: 'con',
    key: '3',
  },
  {
    name: 'rrrr',
    content: 'con',
    key: '4',
  },
];

const BUTTONS = [
  {text: '설정', icon: 'ios-settings'},
  {text: '보관', icon: 'ios-download'},
  {text: '내 활동', icon: 'md-time'},
  {text: '네임 태그', icon: 'md-qr-scanner'},
  {text: '저장됨', icon: 'md-bookmark'},
  {text: '친한 친구', icon: 'ios-list'},
  {text: '사람 찾아보기', icon: 'md-person-add'},
  {text: 'Facebook 열기', icon: 'logo-facebook'},
];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="contact" style={{color: tintColor}} />
    ),
    headerShown: false,
  };
  render() {
    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={{flex: 1}} />
          <Body style={styles.body}>
            <Title style={styles.title}>{userData.userId}</Title>
          </Body>
          <Right style={{flex: 1}}>
            <TouchableOpacity
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  },
                  buttonIndex => {
                    alert(buttonIndex);
                  },
                )
              }>
              <Icon name={'menu'} size={20} />
            </TouchableOpacity>
          </Right>
        </Header>
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
            <View style={{flex: 2, marginTop: 10, justifyContent: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
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
                      <Text>{follower.length}</Text>
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
                      <Text>{following.length}</Text>
                      <Text style={{fontSize: 10, color: 'gray'}}>팔로잉</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={{paddingHorizontal: 30, paddingVertical: 10}}>
            <Text style={{fontWeight: 'bold'}}>
              {userData.intro ? userData.intro : userData.name}
            </Text>
          </View>
          <Button
            light
            style={{
              justifyContent: 'center',
              marginHorizontal: 30,
              height: 30,
            }}
            onPress={() =>
              this.props.navigation.navigate('Edit', {
                userData: userData,
              })
            }>
            <Text>프로필 수정</Text>
          </Button>
          <View style={{alignSelf: 'stretch', flex: 1}}>
            <Accordion
              style={{marginTop: '5%', marginHorizontal: '7%', flex: 1}}
              contentVisible={false}
              visibleElement={
                <Icon
                  name={'ios-arrow-up'}
                  style={{
                    width: 20,
                    height: 20,
                    position: 'absolute',
                    right: 16,
                  }}
                />
              }
              invisibleElement={
                <Icon
                  name={'ios-arrow-down'}
                  style={{
                    width: 20,
                    height: 20,
                    position: 'absolute',
                    right: 16,
                  }}
                />
              }
              header={
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      fontWeight: '300',
                    }}>
                    스토리 하이라이트
                  </Text>
                </View>
              }>
              <View>
                <Text
                  style={{
                    fontSize: 13,
                    marginBottom: '2%',
                  }}>
                  좋아하는 스토리를 프로필에 보관해보세요
                </Text>
              </View>
              <ScrollView horizontal>
                <AddStoryComponent />
                {storyHighlight.map(story => {
                  return <StoryHeaderComponent key={story.key} user={story} />;
                })}
              </ScrollView>
            </Accordion>
          </View>
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
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);
export default createAppContainer(AppNavigator);

//export default ProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    color: 'black',
  },
});
