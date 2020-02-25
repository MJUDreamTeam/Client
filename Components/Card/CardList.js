import React from 'react';
import {FlatList} from 'react-native';
import CardComponent from './CardComponent';
import StoryHeaderList from '../Story/StoryHeaderList';

class CardList extends React.Component {
  state = {boards: [], page: 1, refreshing: false};

  _getBoardData = () => {
    const boardUrl =
      'https://jsonplaceholder.typicode.com/photos?_limit=10&_page=' +
      this.state.page;
    fetch(boardUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({
          boards: this.state.refreshing ? data : this.state.boards.concat(data),
          page: this.state.page + 1,
          refreshing: false,
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  componentDidMount() {
    this._getBoardData();
  }

  _handleLoadMore = () => {
    this._getBoardData();
  };

  // refresh 함수
  _handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
        page: 1,
      },
      this._getBoardData,
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.boards}
        renderItem={({item}) => <CardComponent board={item} />}
        keyExtractor={(item, index) => String(item.id)}
        onEndReachedThreshold={0.5}
        onEndReached={this._handleLoadMore}
        refreshing={this.state.refreshing}
        onRefresh={this._handleRefresh}
        ListHeaderComponent={<StoryHeaderList />}
      />
    );
  }
}

export default CardList;
