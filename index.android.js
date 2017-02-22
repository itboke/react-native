/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  TouchableHighlight,
  ListView,
  TouchableOpacity,
  ScrollView,
  Animated,
  TouchableWithoutFeedback
} from 'react-native';
import Dimensions from 'Dimensions';
import Search from './app/search';
import Tabs from './app/tabs';
class Detail extends Component{
    render(){
        return(
            <Text>{this.props.content}</Text>
        )
    }
}
class List extends Component{
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const listData = [
            {
                'title': '金刚经 第九品 一相无相分',
                'content': '须菩提。于意云何。须陀洹能作是念。我得须陀洹果不。须菩提言。不也。世尊。何以故。须陀洹名为入流。而无所入。不入色声香味触法。是名须陀洹，须菩提。于意云何。斯陀含能作是念。我得斯陀含果不。须菩提言。不也。世尊。何以故。斯陀含名一往来。而实无往来。是名斯陀含。须菩提。于意云何。阿那含能作是念。我得阿那含果不。须菩提言。不也。世尊。何以故。阿那含名为不来，而实无不来。是故名阿那含。须菩提。于意云何。阿罗汉能作是念。我得阿罗汉道不。须菩提言。不也。世尊。何以故。实无有法名阿罗汉。世尊。若阿罗汉作是念。我得阿罗汉道。即著我人众生寿者。世尊。佛说我得无诤三昧。人中最为第一。是第一离欲阿罗汉。我不作是念。我是离欲阿罗汉。世尊。我若作是念。我得阿罗汉道。世尊则不说须菩提。是乐阿兰那行者。以须菩提实无所行。而名须菩提。是乐阿兰那行。'
            },
            {
                'title': '金刚经 第十品 庄严净土分',
                'content': '佛告须菩提。于意云何。如来昔在然灯佛所。于法有所得不。不也。世尊。如来在然灯佛所。于法实无所得。须菩提。于意云何。菩萨庄严佛土不。不也。世尊。何以故。庄严佛土者。即非庄严。是名庄严。是故须菩提。诸菩萨摩诃萨。应如是生清净心。不应住色生心。不应住声香味触法生心。应无所住而生其心。须菩提。譬如有人。身如须弥山王，于意云何。是身为大不。须菩提言。甚大。世尊。何以故。佛说非身。是名大身。'
            }
        ];
        this.state = {
            listData: ds.cloneWithRows(listData)
        };
    }
    inDetail(_content){
        this.props.navigator.push({
            component: Detail,
            params:{
                content: _content
            }
        });
    }
    render(){
       return(
            <ListView
                dataSource = {this.state.listData}
                renderRow = {
                    (rowData)=>{
                        return (
                            <TouchableHighlight
                                style = {styles.listItem}
                                onPress = {this.inDetail.bind(this,rowData.content)}
                                underlayColor = "#B5B5B5"
                            >
                                <Text>{rowData.title}</Text>
                            </TouchableHighlight>
                        )
                    }
                }
            />
        )
    }
}

const screenWidth = Dimensions.get('window').width;
export default class Novel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            images: ['#dfe24a','#68eaf9','#ef9af9']
        };
    }
    render() {
      // 图片列表
      let images = this.state.images.map((value,i) => {
          return (
                <TouchableWithoutFeedback key={i}>
                    <View style={{width:screenWidth,height:130,backgroundColor:value}}/>
                </TouchableWithoutFeedback>
          );
      });
      return(
        <View style={styles.container}>
            <View style={styles.image}>
                <Image style={{width:414,height:127}}
                source={{uri: "http://upload.didadi.fm/data/upload/shop/media/05224087229341820.png"}} resizeMode="contain"></Image>
            </View>
            <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    ref={(scrollView) => { this._scrollView = scrollView;}}>
                    <Animated.View style={{flexDirection:'row'}}>{images}</Animated.View>
            </ScrollView>
            <Tabs></Tabs>
            <Navigator
                style = {styles.main}
                initialRoute = {{component:List}}
                configureScene = {(route)=>{
                    return Navigator.SceneConfigs.FadeAndroid;
                }}
                //sceneStyle = {{paddingTop: 66}}
                renderScene = {(route, navigator)=>{
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        </View>
      )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#F5FCFF',
    },
    image: {
        height:127
    },
    main: {
        height: 50,
    },
    listItem: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 12,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    navContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backNavButtonText: {
        flex:1,
        backgroundColor: 'gray'
    },
    rightNavButtonText: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    NavTitle: {
        flex:1,
        padding: 10,
        marginLeft: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
});

AppRegistry.registerComponent('novel', () => Novel);
