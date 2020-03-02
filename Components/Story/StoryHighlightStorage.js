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
} from 'native-base';

import StoryHighlightItem from './StoryHighlightItem';
import StoryItem from './StoryItem';

const data = [
  {
    src: 'https://rdd9223.github.io/assets/images/profile.jpg',
    month: 3,
    date: 3,
  },
  {
    src: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4',
    month: 2,
    date: 4,
  },
  {
    src: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4',
    month: 5,
    date: 12,
  },
  {
    src: 'https://rdd9223.github.io/assets/images/profile.jpg',
    month: 6,
    date: 13,
  },
  {
    src: 'https://avatars2.githubusercontent.com/u/55945829?s=64&v=4',
    month: 6,
    date: 22,
  },
  {
    src: 'https://avatars0.githubusercontent.com/u/51014797?s=64&v=4',
    month: 7,
    date: 30,
  },
  {
    src: 'https://avatars2.githubusercontent.com/u/52193680?s=64&v=4',
    month: 12,
    date: 31,
  },
];

export default class StoryHighlightStorage extends React.Component {
  componentDidMount = () => {
    this.selectedCheckboxes = new Set();
  };
  toggleCheckbox = src => {
    if (this.selectedCheckboxes.has(src)) {
      this.selectedCheckboxes.delete(src);
    } else {
      this.selectedCheckboxes.add(src);
    }
  };
  render() {
    return (
      <Container>
        <Header transparent>
          <Left style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Text>취소</Text>
            </TouchableOpacity>
          </Left>
          <Body style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={{
                textAlign: 'center',

                fontWeight: '500',
                fontSize: 18,
              }}>
              하이라이트
            </Text>
          </Body>
          <Right style={{flex: 1}}>
            <TouchableOpacity
              onPress={() => {
                for (const src of this.selectedCheckboxes) {
                  // console.log(src, 'is selected.');
                  this.props.navigation.navigate('SetOption', {
                    thumbnail: src,
                  });
                  break;
                }
              }}>
              <Text>다음</Text>
            </TouchableOpacity>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.scroll}>
          {data.map((contact, i) => {
            return (
              <StoryHighlightItem
                src={contact.src}
                key={i}
                month={contact.month}
                date={contact.date}
                onPress={this.toggleCheckbox}
              />
            );
          })}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {},
});
