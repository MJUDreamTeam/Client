/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
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
  Input,
} from 'native-base';
export default class SetStoryHighlightOption extends React.Component {
  render() {
    return (
      <Container>
        <Header transparent>
          <Left style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon name="angle-left" type="FontAwesome" />
            </TouchableOpacity>
          </Left>
          <Body style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 18,
              }}>
              제목
            </Text>
          </Body>
          <Right style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                alert('추가');
              }}>
              <Text>추가</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <View style={styles.content}>
            <Thumbnail
              large
              style={{
                borderColor: 'white',
                borderWidth: 2,
                width: 180,
                height: 180,
                borderRadius: 90,
              }}
              source={{
                uri: this.props.navigation.getParam('thumbnail', 'cccc'),
              }}
            />
            <Input
              autoFocus
              style={{textAlign: 'center'}}
              placeholder="하이라이트"
              placeholderTextColor="gray"
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: Dimensions.get('window').height / 7,
    alignItems: 'center',
  },
});
