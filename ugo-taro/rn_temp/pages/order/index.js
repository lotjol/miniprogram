import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text, Image, ScrollView, Button } from "@tarojs/components-rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
export default class Order extends Component {

  static config = {
    navigationBarTitleText: '订单'
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View style={_styleSheet["wrapper"]}>
        {}
        <View style={_styleSheet["tabs"]}>
          <Text style={[_styleSheet["text"], _styleSheet["active"]]}>全部</Text>
          <Text style={_styleSheet["text"]}>待付款</Text>
          <Text style={_styleSheet["text"]}>已付款</Text>
          <Text style={_styleSheet["text"]}>退款/退货</Text>
        </View>
        {}
        <ScrollView scrollY style={_styleSheet["orders"]}>
          <View style={_styleSheet["item"]}>
            {}
            <Image src="http://static.botue.com/ugo/uploads/goods_1.jpg" style={_styleSheet["pic"]}></Image>
            {}
            <View style={_styleSheet["meta"]}>
              <View style={_styleSheet["name"]}>【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
              <View style={_styleSheet["price"]}>
                <Text style={_styleSheet["text"]}>￥</Text>
                1399
                <Text style={_styleSheet["text"]}>.00</Text>
              </View>
              <View style={_styleSheet["num"]}>x1</View>
            </View>
            {}
            <View style={_styleSheet["amount"]}>
              共1件商品 总计: ￥4099(含运费0.00)
            </View>
            {}
            <View style={_styleSheet["extra"]}>
              订单号: GD20180511000000000178
              <Button size="mini" type="primary">支付</Button>
            </View>
          </View>
          <View style={_styleSheet["item"]}>
            {}
            <Image src="http://static.botue.com/ugo/uploads/goods_1.jpg" style={_styleSheet["pic"]}></Image>
            {}
            <View style={_styleSheet["meta"]}>
              <View style={_styleSheet["name"]}>【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
              <View style={_styleSheet["price"]}>
                <Text style={_styleSheet["text"]}>￥</Text>
                1399
                <Text style={_styleSheet["text"]}>.00</Text>
              </View>
              <View style={_styleSheet["num"]}>x1</View>
            </View>
            {}
            <View style={_styleSheet["amount"]}>
              共1件商品 总计: ￥4099(含运费0.00)
            </View>
            {}
            <View style={_styleSheet["extra"]}>
              订单号: GD20180511000000000178
              <Button size="mini" type="primary">支付</Button>
            </View>
          </View>
          <View style={_styleSheet["item"]}>
            {}
            <Image src="http://static.botue.com/ugo/uploads/goods_1.jpg" style={_styleSheet["pic"]}></Image>
            {}
            <View style={_styleSheet["meta"]}>
              <View style={_styleSheet["name"]}>【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
              <View style={_styleSheet["price"]}>
                <Text style={_styleSheet["text"]}>￥</Text>
                1399
                <Text style={_styleSheet["text"]}>.00</Text>
              </View>
              <View style={_styleSheet["num"]}>x1</View>
            </View>
            {}
            <View style={_styleSheet["amount"]}>
              共1件商品 总计: ￥4099(含运费0.00)
            </View>
            {}
            <View style={_styleSheet["extra"]}>
              订单号: GD20180511000000000178
              <Button size="mini" type="primary">支付</Button>
            </View>
          </View>
          <View style={_styleSheet["item"]}>
            {}
            <Image src="http://static.botue.com/ugo/uploads/goods_1.jpg" style={_styleSheet["pic"]}></Image>
            {}
            <View style={_styleSheet["meta"]}>
              <View style={_styleSheet["name"]}>【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
              <View style={_styleSheet["price"]}>
                <Text style={_styleSheet["text"]}>￥</Text>
                1399
                <Text style={_styleSheet["text"]}>.00</Text>
              </View>
              <View style={_styleSheet["num"]}>x1</View>
            </View>
            {}
            <View style={_styleSheet["amount"]}>
              共1件商品 总计: ￥4099(含运费0.00)
            </View>
            {}
            <View style={_styleSheet["extra"]}>
              订单号: GD20180511000000000178
              <Button size="mini" type="primary">支付</Button>
            </View>
          </View>
          {}
          <View style={_styleSheet["getMore"]}>正在加载...</View>
        </ScrollView>
      </View>;
  }
}