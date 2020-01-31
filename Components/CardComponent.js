// 앞으로 구현할 피드 목록에서 피드 항목 하나를 담당하게 될 컴포넌트
import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
} from 'native-base';

class CardComponent extends React.Component {
  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: 'https://rdd9223.github.io/assets/images/profile.jpg',
              }}
            />
            <Body>
              <Text>강영우</Text>
              <Text note>Jan 29, 2020</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                'data:image/png;base64,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',
            }}
            style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem style={{height: 45}}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart" style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" style={{color: 'black'}} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" style={{color: 'black'}} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{height: 20}}>
          <Text>101 likes</Text>
        </CardItem>
        <CardItem>
          <Text>
            <Text style={{fontWeight: '900'}}>강영우 </Text>
            흥흥항 이제 너무 재밌당 히히히히 뭐가 어떻게 되는지는 잘 모르겠지만
            지금 만들어 보니너무 기쁘다 하하하하
          </Text>
        </CardItem>
      </Card>
    );
  }
}

export default CardComponent;
