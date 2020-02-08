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
import {StyleSheet, Platform, StatusBar} from 'react-native';

export default class EditProfile extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: 'white'}}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: '#000'}}>취소</Text>
            </Button>
          </Left>
          <Body style={{flex: 1, alignItems: 'center'}}>
            <Title style={{color: '#000'}}>프로필 편집</Title>
          </Body>
          <Right style={{flex: 1}}>
            <Button
              transparent
              onPress={() => this.props.navigation.goBack()}
              style={{width: '60%', flexDirection: 'row-reverse'}}>
              <Text style={{color: '#000'}}>확인</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={styles.profileImage}>
            <Thumbnail
              large
              style={{
                borderColor: 'pink',
                borderWidth: 2,
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
              <Input placeholder="이민환" placeholderTextColor="black" />
            </Item>
            <Item fixedLabel>
              <Label style={styles.text}>사용자 이름</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label style={styles.text}>웹사이트</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label style={styles.text}>소개</Label>
              <Input />
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
              <Input />
            </Item>
            <Item fixedLabel>
              <Label style={styles.text}>전화</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label style={styles.text}>성별</Label>
              <Input />
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
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
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
