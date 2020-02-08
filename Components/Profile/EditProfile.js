/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Thumbnail,
  Title,
  Text,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default class EditProfile extends React.Component {
  render() {
    const userData = this.props.navigation.getParam('userData', 'ccc');

    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: 'white'}}>
          <Left style={{flex: 1}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: '#000'}}>취소</Text>
            </TouchableOpacity>
          </Left>
          <Body style={{flex: 1, alignItems: 'center'}}>
            <Title style={{color: '#000'}}>프로필 편집</Title>
          </Body>
          <Right style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row-reverse',
              }}>
              <Text style={{color: '#4169e1', fontWeight: 'bold'}}>완료</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <View style={styles.profileImage}>
            <Thumbnail
              large
              style={{
                marginBottom: 8,
              }}
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
              }}
            />
            <Button transparent onPress={() => alert('프로필 사진 바꾸기')}>
              <Text>프로필 사진 바꾸기</Text>
            </Button>
          </View>
          <Form>
            <Item fixedLabel>
              <Label style={styles.text}>이름</Label>
              <Input placeholder={userData.name} placeholderTextColor="black" />
            </Item>
            <Item fixedLabel>
              <Label style={styles.text}>사용자 이름</Label>
              <Input
                placeholder={userData.userId}
                placeholderTextColor="black"
              />
            </Item>
            <Item fixedLabel>
              <Label style={styles.text}>웹사이트</Label>
              <Input
                placeholder={userData.webSite ? userData.webSite : '웹사이트'}
                placeholderTextColor={userData.webSite ? 'black' : 'gray'}
              />
            </Item>
            <Item fixedLabel last>
              <Label style={styles.text}>소개</Label>
              <Input
                placeholder={userData.intro ? userData.intro : '소개'}
                placeholderTextColor={userData.intro ? 'black' : 'gray'}
              />
            </Item>
          </Form>
          <Form>
            <Item last>
              <Button transparent>
                <Text>프로페셔널 계정으로 전환</Text>
              </Button>
            </Item>
          </Form>
          <Form>
            <Label style={{padding: 10, fontWeight: '400'}}>개인 정보</Label>
            <Item fixedLabel>
              <Label style={styles.text}>이메일</Label>
              <Input
                placeholder={userData.email ? userData.email : '이메일'}
                placeholderTextColor={userData.email ? 'black' : 'gray'}
              />
            </Item>
            <Item fixedLabel>
              <Label style={styles.text}>전화</Label>
              <Input
                placeholder={userData.phoneNum ? userData.phoneNum : '전화번호'}
                placeholderTextColor={userData.phoneNum ? 'black' : 'gray'}
              />
            </Item>
            <Item fixedLabel last>
              <Label style={styles.text}>성별</Label>
              <Input
                placeholder={userData.gender ? userData.gender : '성별'}
                placeholderTextColor={userData.gender ? 'black' : 'gray'}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  text: {
    color: 'black',
  },
});
