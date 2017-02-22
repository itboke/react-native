/*
 * 搜索组件
*/ 
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const Search = React.createClass({

	render() {
		return(
			<View style={styles.div}>
				<View style={[styles.flex,styles.flexDirection]}>
					<View style={styles.flex}>
						<TextInput underlinecolorandroid={'transparent'} style={styles.input} placeholder="请输入搜索内容" ></TextInput>
					</View>
					<View>
						<Text style={[styles.searchBtn]}>搜索</Text>
					</View>
				</View>
			</View>
		)
	}

});

const styles = StyleSheet.create({
	div:{
		height:50
	},
	flex:{
		flex:1,
	},
	flexDirection:{
		flexDirection: 'row'
	},
	input:{
		marginLeft: 5,
		height: 50,
	},
	searchBtn:{
		marginTop:5,
		marginRight:5,
		marginBottom:5,
		width: 60,
		textAlign:'center',
		padding: 10,
		borderWidth:1,
		borderColor: '#ccc',
		borderRadius: 4,
	}
});
module.exports = Search;