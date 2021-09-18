import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image, Button } from "@tarojs/components-rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
export default class Center extends Component {

  static config = {
    navigationBarTitleText: '我的'
  };

  render() {
    return <View style={_styleSheet["wrapper"]}>
        {}
        <View style={_styleSheet["profile"]}>
          <View style={_styleSheet["meta"]}>
            <Image src="http://static.botue.com/ugo/uploads/monkey.png" style={_styleSheet["avatar"]}></Image>
            <Text style={_styleSheet["nickname"]}>孙悟空</Text>
          </View>
        </View>
        {}
        <View style={_styleSheet["count"]}>
          <View style={_styleSheet["cell"]}>
            8 <Text style={_styleSheet["text"]}>收藏的店铺</Text>
          </View>
          <View style={_styleSheet["cell"]}>
            14 <Text style={_styleSheet["text"]}>收藏的商品</Text>
          </View>
          <View style={_styleSheet["cell"]}>
            18 <Text style={_styleSheet["text"]}>关注的商品</Text>
          </View>
          <View style={_styleSheet["cell"]}>
            84 <Text style={_styleSheet["text"]}>我的足迹</Text>
          </View>
        </View>
        {}
        <View style={_styleSheet["orders"]}>
          <View style={_styleSheet["title"]}>我的订单</View>
          <View style={_styleSheet["sorts"]}>
            <Text style={_styleSheet["icon-bill"]}>待付款</Text>
            <Text style={_styleSheet["icon-car"]}>待收货</Text>
            <Text style={_styleSheet["icon-money"]}>退款/退货</Text>
            <Text style={_styleSheet["icon-list"]}>全部订单</Text>
          </View>
        </View>
        {}
        <View style={[_styleSheet["address"], _styleSheet["icon-arrow"]]}>
          收货地址
        </View>
        {}
        <View style={_styleSheet["extra"]}>
          <View style={[_styleSheet["item"], _styleSheet["icon-arrow"]]}>联系客服</View>
          <Button style={[_styleSheet["button"], _styleSheet["item"], _styleSheet["icon-arrow"]]}>意见反馈</Button>
        </View>
      </View>;
  }
}