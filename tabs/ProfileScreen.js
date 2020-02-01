import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Thumbnail,
} from 'native-base';
import PostsNavigator from '../Components/Profile/PostsNavigator';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="contact" style={{color: tintColor}} />
    ),
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
              <TouchableHighlight
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
              </TouchableHighlight>
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
                  <Text>100</Text>
                  <Text style={{fontSize: 10, color: 'gray'}}>팔로워</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text>100</Text>
                  <Text style={{fontSize: 10, color: 'gray'}}>팔로잉</Text>
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
            onPress={() => {
              alert('dddd');
            }}>
            <Text>프로필 수정</Text>
          </Button>
          <PostsNavigator />
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen;
