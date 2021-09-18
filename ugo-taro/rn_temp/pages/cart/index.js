import React from 'react';
import { Component } from "@tarojs/taro-rn";

import { View, Text, Label, Input, Navigator, Icon, Image } from "@tarojs/components-rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
export default class Cart extends Component {

  static config = {
    navigationBarTitleText: '购物车'
  };

  render() {
    return <View style={_styleSheet["wrapper"]}>
        {}
        <View style={_styleSheet["shipment"]}>
          <View style={_styleSheet["dt"]}>收货人: </View>
          <View style={[_styleSheet["dd"], _styleSheet["meta"]]}>
            <Text style={_styleSheet["name"]}>刘德华</Text>
            <Text style={_styleSheet["phone"]}>13535337057</Text>
          </View>
          <View style={_styleSheet["dt"]}>收货地址:</View>
          <View style={_styleSheet["dd"]}>广东省广州市天河区一珠吉</View>
        </View>
        {}
        <View style={_styleSheet["carts"]}>
          <View style={_styleSheet["item"]}>
            {}
            <View style={_styleSheet["shopname"]}>优购生活馆</View>
            <View style={_styleSheet["goods"]}>
              {}
              <Navigator url="/pages/goods">
                <Image src="https://static.botue.com/ugo/uploads/goods_1.jpg" style={_styleSheet["pic"]}></Image>
              </Navigator>
              {}
              <View style={_styleSheet["meta"]}>
                <View style={_styleSheet["name"]}>【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
                <View style={_styleSheet["price"]}>
                  <Label style={_styleSheet["label"]}>￥</Label>1399<Label>.00</Label>
                </View>
                {}
                <View style={_styleSheet["amount"]}>
                  <Label style={_styleSheet["label"]}>-</Label>
                  <Input type="number" value="1" style={_styleSheet["input"]} />
                  <Label style={_styleSheet["label"]}>+</Label>
                </View>
              </View>
              {}
              <Label style={_styleSheet["checkbox"]}>
                <Icon type="success" size="20" color="#ea4451"></Icon>
              </Label>
            </View>
            <View style={_styleSheet["goods"]}>
              {}
              <Navigator url="/pages/goods">
                <Image src="https://static.botue.com/ugo/uploads/goods_2.jpg" style={_styleSheet["pic"]}></Image>
              </Navigator>
              {}
              <View style={_styleSheet["meta"]}>
                <View style={_styleSheet["name"]}>【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
                <View style={_styleSheet["price"]}>
                  <Label style={_styleSheet["label"]}>￥</Label>
                  1399
                  <Label style={_styleSheet["label"]}>.00</Label>
                </View>
                {}
                <View style={_styleSheet["amount"]}>
                  <Label style={_styleSheet["label"]}>-</Label>
                  <Input type="number" value="1" style={_styleSheet["input"]} />
                  <Label style={_styleSheet["label"]}>+</Label>
                </View>
              </View>
              {}
              <Label style={_styleSheet["checkbox"]}>
                <Icon type="success" size="20" color="#ea4451"></Icon>
              </Label>
            </View>
            <View style={_styleSheet["goods"]}>
              {}
              <Navigator url="/pages/goods">
                <Image src="https://static.botue.com/ugo/uploads/goods_5.jpg" style={_styleSheet["pic"]}></Image>
              </Navigator>
              {}
              <View style={_styleSheet["meta"]}>
                <View style={_styleSheet["name"]}>【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
                <View style={_styleSheet["price"]}>
                  <Label style={_styleSheet["label"]}>￥</Label>
                  1399
                  <Label style={_styleSheet["label"]}>.00</Label>
                </View>
                {}
                <View style={_styleSheet["amount"]}>
                  <label style={_styleSheet["label"]}>-</label>
                  <Input type="number" value="1" style={_styleSheet["input"]} />
                  <label style={_styleSheet["label"]}>+</label>
                </View>
              </View>
              {}
              <Label style={_styleSheet["checkbox"]}>
                <Icon type="success" size="20" color="#ccc"></Icon>
              </Label>
            </View>
          </View>
        </View>
        {}
        <View style={_styleSheet["extra"]}>
          <Label style={_styleSheet["checkall"]}>
            <Icon type="success" color="#ccc" size="20" style={_styleSheet["icon"]}></Icon>
            全选
          </Label>
          <View style={_styleSheet["total"]}>
            合计: 
            <Label style={_styleSheet["label"]}>￥</Label>
            <Label style={[_styleSheet["lable"], _styleSheet["num"]]}>14110</Label>
            <Label style={_styleSheet["label"]}>.00</Label>
          </View>
          <View style={_styleSheet["pay"]}>结算(3)</View>
        </View>
      </View>;
  }
}