// 앞으로 구현할 피드 목록에서 피드 항목 하나를 담당하게 될 컴포넌트
import React from 'react';
import {Image, Text} from 'react-native';
import {Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon} from 'native-base';

class CardComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {board} = this.props;

        return (
            <Card>
                <CardItem style={{ height: 70}}>
                    <Left>
                        <Button transparent >
                            <Thumbnail
                                // source={{uri: user.thumbnail}}
                                source={{uri: 'https://rdd9223.github.io/assets/images/profile.jpg'}}
                            />
                        </Button>
                        <Body>
                            <Text>강영우</Text>
                            {/*<Text>{user.name}</Text>*/}
                            {/*<Text note>{board.date}</Text>*/}
                            <Text note>Jan 29, 2020</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-more" style={{color: 'black'}} onPress={() => {
                                alert('더보기');
                            }}/>
                        </Button>
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        source={{uri: board.url}}
                        style={{ height: 200, width: null, flex: 1}}
                    />
                </CardItem>
                <CardItem style={{height: 45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{color: 'black'}} onPress={() => {
                                alert('좋아요');
                            }}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{color: 'black'}} onPress={() => {
                                alert('DM보내기');
                            }}/>
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{color: 'black'}} onPress={() => {
                                alert('공유하기');
                            }}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height: 20}}>
                    <Text>101 likes</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        <Text style={{fontWeight: 'bold'}}>강영우 </Text>
                        흥흥항 이제 너무 재밌당 히히히히 뭐가 어떻게 되는지는 잘 모르겠지만
                        지금 만들어 보니너무 기쁘다 하하하하
                    </Text>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;