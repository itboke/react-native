/**
 * React Native 图片轮播组件
 * date 17/02/22
 * by hzl
*/

import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Animated,
    TouchableWithoutFeedback
} from 'react-native';
import Dimensions from 'Dimensions';

const screenWidth = Dimensions.get('window').width;
class Swiper extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            images: ['#dfe24a','#68eaf9','#ef9af9']
        };
        this.index = 0; //当前图片的索引
        this.totalLength = this.state.images.length; //所有轮播图片的长度
    }
    //当组件加载完成的时候 图片自动轮播 -> _swiperAutoRun
    componentDidMount(){
        //this._swiperAutoRun();
    }
    _swiperAutoRun(){
        if(this.totalLength <= 1){
            return false;
        }
        this._timer = setInterval(function(){
            this.index++;
            if(this.index >= this.totalLength){
                this.index = 0;
            }else{
                this._scrollView.scrollTo({x: this.index * screenWidth},true);
            }
        }.bind(this),5000)
    }
    //手势触摸 start事件
    _swiperOnTouchStart(){
        //clearInterval(this._timer);
    }
    //手势触摸 move事件
    _swiperOnTouchMove(){
    }
    //手势触摸 end事件
    _swiperOnTouchEnd(){
        console.log(111);
        this._scrollView.scrollTo({x: this.index * screenWidth},true);
        //this._swiperAutoRun();
    }
    //滑动事件
    _swiperOnScroll(e){
        let x = e.nativeEvent.contentOffset.x;
        this.index = Math.round(x / screenWidth);
    }
    render(){
        let images = this.state.images.map((value,index)=>{
            return (
                <TouchableWithoutFeedback key={index}>
                    <View style={{width:screenWidth,height:130,backgroundColor:value}}/>
                </TouchableWithoutFeedback>
            );
        })
        return(
            <View style={styles.container}>
                <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator = {false}
                        showsVerticalScrollIndicator = {false}
                        onTouchStart = {() => this._swiperOnTouchStart()}
                        onTouchMove = {() => this._swiperOnTouchMove()}
                        onTouchEnd = {() => this._swiperOnTouchEnd()}
                        onScroll = {this._swiperOnScroll.bind(this)}
                        ref={(scrollView) => { this._scrollView = scrollView;}}
                >
                        <Animated.View style={{flexDirection:'row'}}>{images}</Animated.View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
});
module.exports = Swiper;
