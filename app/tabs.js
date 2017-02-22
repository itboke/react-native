/*
 * 导航切换组件
 */
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

const Tabs = React.createClass({
    render() {
        return (
        	< View style = { styles.container } >
        		<View style = { [styles.flex,styles.flexDirection] } >
        			<View style = { [styles.item,styles.center,styles.lineRight] }><Text>最新文章</Text></View>
        			<View style = { [styles.item,styles.center,styles.lineRight] }><Text>热门分类</Text></View>
        			<View style = { [styles.item,styles.center] }><Text>哈哈大笑</Text></View>
        		</View>
            < /View>
        )
    }
});

const styles = StyleSheet.create({

    container: {
        height: 45,
    },
	flex: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: '#eee'
	},
	flexDirection:{
  		flexDirection: 'row'
	},
	item: {
		flex: 1,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	lineRight:{
		borderRightWidth:1,
		borderColor: '#eee'
	}
});
module.exports = Tabs;
