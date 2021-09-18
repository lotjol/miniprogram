import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text,
  Image,
  ScrollView,
  Button
} from '@tarojs/components'

import './index.scss'

export default class Order extends Component {

  config = {
    navigationBarTitleText: '订单'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className="wrapper">
        {/* 订单状态 */}
        <View className="tabs">
          <Text className="text active">全部</Text>
          <Text className="text">待付款</Text>
          <Text className="text">已付款</Text>
          <Text className="text">退款/退货</Text>
        </View>
        {/* 订单 */}
        <ScrollView className="orders" scrollY>
          <View className="item">
            {/* 商品图片 */}
            <Image className="pic" src="http://static.botue.com/ugo/uploads/goods_1.jpg"></Image>
            {/* 商品信息 */}
            <View className="meta">
              <View className="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
              <View className="price">
                <Text className="text">￥</Text>
                1399
                <Text className="text">.00</Text>
              </View>
              <View className="num">x1</View>
            </View>
            {/* 总价 */}
            <View className="amount">
              共1件商品 总计: ￥4099(含运费0.00)
            </View>
            {/* 其它 */}
            <View className="extra">
              订单号: GD20180511000000000178
              <Button size="mini" type="primary">支付</Button>
            </View>
          </View>
          <View className="item">
            {/* 商品图片 */}
            <Image className="pic" src="http://static.botue.com/ugo/uploads/goods_1.jpg"></Image>
            {/* 商品信息 */}
            <View className="meta">
              <View className="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
              <View className="price">
                <Text className="text">￥</Text>
                1399
                <Text className="text">.00</Text>
              </View>
              <View className="num">x1</View>
            </View>
            {/* 总价 */}
            <View className="amount">
              共1件商品 总计: ￥4099(含运费0.00)
            </View>
            {/* 其它 */}
            <View className="extra">
              订单号: GD20180511000000000178
              <Button size="mini" type="primary">支付</Button>
            </View>
          </View>
          <View className="item">
            {/* 商品图片 */}
            <Image className="pic" src="http://static.botue.com/ugo/uploads/goods_1.jpg"></Image>
            {/* 商品信息 */}
            <View className="meta">
              <View className="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
              <View className="price">
                <Text className="text">￥</Text>
                1399
                <Text className="text">.00</Text>
              </View>
              <View className="num">x1</View>
            </View>
            {/* 总价 */}
            <View className="amount">
              共1件商品 总计: ￥4099(含运费0.00)
            </View>
            {/* 其它 */}
            <View className="extra">
              订单号: GD20180511000000000178
              <Button size="mini" type="primary">支付</Button>
            </View>
          </View>
          <View className="item">
            {/* 商品图片 */}
            <Image className="pic" src="http://static.botue.com/ugo/uploads/goods_1.jpg"></Image>
            {/* 商品信息 */}
            <View className="meta">
              <View className="name">【海外购自营】黎珐(ReFa) MTG日本 CARAT铂金微电流瘦脸瘦身提拉紧致V脸美容仪 【保税仓发货】</View>
              <View className="price">
                <Text className="text">￥</Text>
                1399
                <Text className="text">.00</Text>
              </View>
              <View className="num">x1</View>
            </View>
            {/* 总价 */}
            <View className="amount">
              共1件商品 总计: ￥4099(含运费0.00)
            </View>
            {/* 其它 */}
            <View className="extra">
              订单号: GD20180511000000000178
              <Button size="mini" type="primary">支付</Button>
            </View>
          </View>
          {/* 加载更多 */}
          <View className="getMore">正在加载...</View>
        </ScrollView>
      </View>
    )
  }
}
