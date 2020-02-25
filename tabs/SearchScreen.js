import React from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Right,
  Left,
} from 'native-base';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
//Touch Search Screen import
import TouchSearchScreen from './SearchFunction/TouchSearchScreen';

// SearchBar를 눌렀을 때 화면이 변경된다.
class SearchScreen extends React.Component {
  /*
    SearchScreen 내부의 컴포넌트들은 가상의 REST API 를 이용하여 이미지를 출력한다.
    레이아웃은 인스타 그램의 검색 탭을 모방하였다.
    */
  state = {
    data: [],
    page: 1, // 무한 스크롤 구현 이용
  };

  //임시로 렌더링 될 Text 엘리먼트
  _renderItem = ({item}) => (
    <View style={styles.pictureFlatList}>
      <Image source={{uri: item.url}} style={styles.pictureElementStyle} />
      <Text>{item.id}</Text>
    </View>
  );

  //fake REST API를 이용해 이미지 10개를 받아오는 함수 _getData
  _getData = () => {
    const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: this.state.data.concat(data),
          page: this.state.page + 1,
        });
      });
  };

  //스크롤이 바닥에 닿게되면 호출
  _handleLoadMore = () => {
    this._getData();
  };

  //component가 마운트 되고 나서 호출
  componentDidMount() {
    this._getData();
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded transparent>
          <Item>
            <Icon name="ios-search" />
            <Button
              transparent
              style={{marginTop: 1}}
              onPress={() => this.props.navigation.navigate('TouchSearch')}>
              <Text style={styles.gray}>Search</Text>
            </Button>
            <Right>
              <Icon name="ios-people" />
            </Right>
          </Item>
        </Header>
        <View>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => item.id}
            onEndReached={this._handleLoadMore}
            onEndReachedThreshold={1}
            numColumns={3}
          />
        </View>
      </Container>
    );
  }
}

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },

    TouchSearch: {
      screen: TouchSearchScreen,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
      }),
    },
  },
  {
    initialRouteName: 'Search',
  },
);

export default createAppContainer(SearchStack);

const styles = StyleSheet.create({
  gray: {
    color: 'gray',
  },
  pictureFlatList: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  pictureElementStyle: {
    height: 200,
  },
});
