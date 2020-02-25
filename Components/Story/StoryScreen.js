/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  View,
  ProgressBarAndroid,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {
  Text,
  Header,
  Footer,
  Content,
  Icon,
  Thumbnail,
  Item,
  Input,
  Grid,
  Col,
} from 'native-base';

var alreadyRunning = 0;

export default class StoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      Progress_Value: 0.0,
    };
  }

  StartProgress = () => {
    this.value = setInterval(() => {
      if (this.state.Progress_Value <= 1) {
        this.setState({Progress_Value: this.state.Progress_Value + 0.01});
      } else {
        this.CloseProgress();
      }
    }, 100);
  };

  CloseProgress = () => {
    clearInterval(this.value);
    this.props.navigation.goBack();
  };

  StopProgress = () => {
    // this.setState({Progress_Value: 0.0});
    alreadyRunning = this.state.Progress_Value;
    clearInterval(this.value);
  };

  ReStartProgress = () => {
    this.setState({Progress_Value: alreadyRunning});
    this.StartProgress();
  };

  componentDidMount() {
    this.StartProgress();
  }
  render() {
    return (
      <View style={styles.container}>
        <Header transparent style={styles.header}>
          <ProgressBarAndroid
            style={{flex: 1}}
            styleAttr="Horizontal"
            indeterminate={false}
            color={'#000'}
            progress={this.state.Progress_Value}
          />
          <View style={styles.headerUnderProgressBar}>
            <View style={styles.userInfo}>
              <Thumbnail
                small
                style={{
                  marginHorizontal: 5,
                  borderColor: 'gray',
                }}
                source={{uri: this.props.navigation.getParam('content', 'ddd')}}
              />
              <Text>user id</Text>
            </View>
            <TouchableOpacity onPress={() => this.StopProgress()}>
              <Icon
                name={'md-close'}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </TouchableOpacity>
          </View>
        </Header>
        <Content contentContainerStyle={{flex: 1}}>
          <Grid style={{alignItems: 'center'}}>
            <Col>
              <Image
                style={styles.image}
                source={{
                  uri: this.props.navigation.getParam('content', 'cccc'),
                }}
              />
            </Col>
          </Grid>
        </Content>
        <Footer style={styles.footer}>
          <View style={{flex: 6.5, paddingVertical: 10}}>
            <Item rounded style={{height: 40, alignItems: 'center'}}>
              <Icon name={'camera'} type={'SimpleLineIcons'} />
              <Input placeholder="메시지 보내기" />
            </Item>
          </View>
          <TouchableOpacity
            onPress={() => this.ReStartProgress()}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name={'paper-plane'} type={'SimpleLineIcons'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon name={'dots-three-horizontal'} type={'Entypo'} />
          </TouchableOpacity>
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'column',
    height: 105,
  },
  headerUnderProgressBar: {
    flexDirection: 'row',
    flex: 1.5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    aspectRatio: 1.3,
    resizeMode: 'contain',
  },

  footer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
});
