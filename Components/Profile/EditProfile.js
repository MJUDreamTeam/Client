import React from 'react';
import {
  View,
  Icon,
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
  TextInput,
} from 'native-base';
import {StyleSheet} from 'react-native';
import EditText from './EditText';

export default class EditProfile extends React.Component {
  render() {
    return (
      <Container style={{flex: 1, backgroundColor: 'white'}}>
        <Header>
          <Left style={{flex: 2}}>
            <Button
              onPress={() => this.props.navigation.goBack()}
              style={{width: '90%'}}>
              <Text>취소</Text>
            </Button>
          </Left>
          <Body style={{flex: 2}}>
            <Title>프로필 수정</Title>
          </Body>
          <Right style={{flex: 1.5}}>
            <Button
              onPress={() => this.props.navigation.goBack()}
              style={{width: '90%', flexDirection: 'row-reverse'}}>
              <Text>확인</Text>
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
          <View style={styles.edit}>
            <View style={styles.line}>
              <View style={styles.titleBlock}>
                <Text>이름</Text>
              </View>
              <View style={styles.editText}>
                <EditText />
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.titleBlock}>
                <Text>사용자 이름</Text>
              </View>
              <View style={styles.editText}>
                <EditText />
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.titleBlock}>
                <Text>웹사이트</Text>
              </View>
              <View style={styles.editText}>
                <EditText />
              </View>
            </View>
            <View style={styles.line}>
              <View style={styles.titleBlock}>
                <Text>소개</Text>
              </View>
              <View style={styles.editText}>
                <EditText />
              </View>
            </View>
            <Button transparent>
              <Text>프로페셔널 계정으로 전환</Text>
            </Button>
            <View style={styles.line}>
              <View style={styles.titleBlock}>
                <Text>개인 정보</Text>
              </View>
              <View style={styles.editText}>
                <EditText />
              </View>
            </View>

            <View style={styles.line}>
              <View style={styles.titleBlock}>
                <Text>이메일</Text>
              </View>
              <View style={styles.editText}>
                <EditText />
              </View>
            </View>

            <View style={styles.line}>
              <View style={styles.titleBlock}>
                <Text>전화</Text>
              </View>
              <View style={styles.editText}>
                <EditText />
              </View>
            </View>

            <View style={styles.line}>
              <View style={styles.titleBlock}>
                <Text>성별</Text>
              </View>
              <View style={styles.editText}>
                <EditText />
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  profileImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  edit: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  line: {
    height: 40,
    flexDirection: 'row',
  },
  titleBlock: {
    flex: 1,
    justifyContent: 'center',
  },
  editText: {
    flex: 2.5,
  },
});
