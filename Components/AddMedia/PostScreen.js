import React, {useState} from 'react';
import { Text } from 'native-base';
import {View, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet} from "react-native";
import MediaSwitchButton from "./MediaSwitchButton";
import SeparatorLine from "./SeparatorLine";

function PostScreen({route}) {

    const [text, setText] = useState('');
    const [textHeight, setTextHeight] = useState(0);

    return (
        <SafeAreaView style={style.container}>
            <ScrollView>
                <View style={{marginVertical: '1%', flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={{width: 50, height: 50}} source={{uri: route.params.picture}}/>
                    <TextInput
                        textAlignVertical={'top'}
                        multiline
                        style={{height: Math.max(35,textHeight), flex: 1}}
                        onChangeText={text => setText(text)}
                        onContentSizeChange={e => setTextHeight(e.nativeEvent.contentSize.height)}
                        value={text}
                        placeholder={'문구 입력...'}
                    />
                </View>
                <SeparatorLine />
                <View>
                    <TouchableOpacity style={style.row} onPress={()=>alert("사람태그스크린")}>
                        <Text>사람 태그하기</Text>
                    </TouchableOpacity>
                </View>
                <SeparatorLine />
                <View>
                    <TouchableOpacity style={style.row} onPress={()=>alert("위치추가 스크린")}>
                        <Text>위치 추가</Text>
                    </TouchableOpacity>
                </View>
                <SeparatorLine />
                <View>
                    <Text style={style.row}>다른 미디어에도 게시</Text>
                    <MediaSwitchButton name={'Facebook'}/>
                    <MediaSwitchButton name={'Twitter'}/>
                    <MediaSwitchButton name={'Tumblr'}/>
                </View>
                <SeparatorLine />
                <View>
                    <TouchableOpacity style={style.row} onPress={()=>alert("고급설정 스크린")}>
                        <Text style={style.advancedSetting}>고급 설정</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    row: {
        marginVertical: '1%'
    },
    container: {
        flex: 1,
        margin: '2%'
    },
    advancedSetting: {
        color: 'gray',
        fontSize: 10
    }
})
export default PostScreen;
