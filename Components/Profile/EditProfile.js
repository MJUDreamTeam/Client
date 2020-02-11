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
import update from 'react-addons-update';

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Data: this.props.navigation.getParam('userData', 'ccc')};
    console.log('수정페이지');
    console.log(this.state.Data);
  }
  goBack() {
    const {navigation} = this.props;
    navigation.state.params.onChange({
      Data: this.state.Data,
    });
    navigation.goBack();
  }
  render() {
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
              onPress={() => this.goBack()}
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
              <Input
                placeholder={this.state.Data.name}
                placeholderTextColor="black"
                onChangeText={text =>
                  this.setState({
                    Data: update(this.state.Data, {name: {$set: text}}),
                  })
                }
              />
            </Item>
            <Item fixedLabel>
              <Label style={styles.text}>사용자 이름</Label>
              <Input
                placeholder={this.state.Data.userId}
                placeholderTextColor="black"
                onChangeText={text =>
                  this.setState({
                    Data: update(this.state.Data, {userId: {$set: text}}),
                  })
                }
              />
            </Item>
            <Item fixedLabel>
              <Label style={styles.text}>웹사이트</Label>
              <Input
                placeholder={
                  this.state.Data.webSite ? this.state.Data.webSite : '웹사이트'
                }
                placeholderTextColor={
                  this.state.Data.webSite ? 'black' : 'gray'
                }
                onChangeText={text =>
                  this.setState({
                    Data: update(this.state.Data, {webSite: {$set: text}}),
                  })
                }
              />
            </Item>
            <Item fixedLabel last>
              <Label style={styles.text}>소개</Label>
              <Input
                placeholder={
                  this.state.Data.intro ? this.state.Data.intro : '소개'
                }
                placeholderTextColor={this.state.Data.intro ? 'black' : 'gray'}
                onChangeText={text =>
                  this.setState({
                    Data: update(this.state.Data, {intro: {$set: text}}),
                  })
                }
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
                placeholder={
                  this.state.Data.email ? this.state.Data.email : '이메일'
                }
                placeholderTextColor={this.state.Data.email ? 'black' : 'gray'}
                onChangeText={text =>
                  this.setState({
                    Data: update(this.state.Data, {email: {$set: text}}),
                  })
                }
              />
            </Item>
            <Item fixedLabel>
              <Label style={styles.text}>전화</Label>
              <Input
                placeholder={
                  this.state.Data.phoneNum
                    ? this.state.Data.phoneNum
                    : '전화번호'
                }
                placeholderTextColor={
                  this.state.Data.phoneNum ? 'black' : 'gray'
                }
                onChangeText={text =>
                  this.setState({
                    Data: update(this.state.Data, {phoneNum: {$set: text}}),
                  })
                }
              />
            </Item>
            <Item fixedLabel last>
              <Label style={styles.text}>성별</Label>
              <Input
                placeholder={
                  this.state.Data.gender ? this.state.Data.gender : '성별'
                }
                placeholderTextColor={this.state.Data.gender ? 'black' : 'gray'}
                onChangeText={text =>
                  this.setState({
                    Data: update(this.state.Data, {gender: {$set: text}}),
                  })
                }
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
