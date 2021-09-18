import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image, Swiper, SwiperItem, RichText, Button } from "@tarojs/components-rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
export default class Goods extends Component {

  static config = {
    navigationBarTitleText: '详情'

    // 跳转到购物车
  };goCart() {
    Taro.switchTab({
      url: '/pages/cart/index'
    });
  }

  // 加入购物车
  addCart() {
    Taro.showToast({
      title: '加入成功!'
    });
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View style={_styleSheet["wrapper"]}>
        {}
        <Swiper indicatorDots indicatorcolor="rgba(255, 255, 255, 0.6)" indicatoractiveColor="#fff" style={_styleSheet["pics"]}>
          <SwiperItem>
            <Image src="http://static.botue.com/ugo/uploads/detail_1.jpg" style={_styleSheet["image"]}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src="http://static.botue.com/ugo/uploads/detail_2.jpg" style={_styleSheet["image"]}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src="http://static.botue.com/ugo/uploads/detail_3.jpg" style={_styleSheet["image"]}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src="http://static.botue.com/ugo/uploads/detail_4.jpg" style={_styleSheet["image"]}></Image>
          </SwiperItem>
          <SwiperItem>
            <Image src="http://static.botue.com/ugo/uploads/detail_5.jpg" style={_styleSheet["image"]}></Image>
          </SwiperItem>
        </Swiper>
        {}
        <View style={_styleSheet["meta"]}>
          <View style={_styleSheet["price"]}>￥199</View>
          <View style={_styleSheet["name"]}>初语秋冬新款毛衣女 套头宽松针织衫简约插肩袖上衣</View>
          <View style={_styleSheet["shipment"]}>快递: 免运费</View>
          <Text style={[_styleSheet["collect"], _styleSheet["icon-star"]]}>收藏</Text>
        </View>
        {}
        <View style={_styleSheet["detail"]}>
          <RichText></RichText>
        </View>
        {}
        <View style={_styleSheet["action"]}>
          <Button open-type="contact" style={[_styleSheet["btn"], _styleSheet["icon-handset"]]}>联系客服</Button>
          <Text onClick={this.goCart} style={[_styleSheet["cart"], _styleSheet["icon-cart"]]}>购物车</Text>
          <Text onClick={this.addCart} style={_styleSheet["add"]}>加入购物车</Text>
          <Text style={_styleSheet["buy"]}>立即购买</Text>
        </View>
      </View>;
  }
}