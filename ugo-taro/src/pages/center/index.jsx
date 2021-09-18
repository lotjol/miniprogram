import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Text,
  Image,
  Button
} from '@tarojs/components'

import './index.scss'

export default class Center extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  render () {
    return (
      <View className="wrapper">
        {/* 个人资料 */}
        <View className="profile">
          <View className="meta">
            <Image className="avatar" src="http://static.botue.com/ugo/uploads/monkey.png"></Image>
            <Text className="nickname">孙悟空</Text>
          </View>
        </View>
        {/* 统计 */}
        <View className="count">
          <View className="cell">
            8 <Text className="text">收藏的店铺</Text>
          </View>
          <View className="cell">
            14 <Text className="text">收藏的商品</Text>
          </View>
          <View className="cell">
            18 <Text className="text">关注的商品</Text>
          </View>
          <View className="cell">
            84 <Text className="text">我的足迹</Text>
          </View>
        </View>
        {/* 我的订单 */}
        <View className="orders">
          <View className="title">我的订单</View>
          <View className="sorts">
            <Text className="icon-bill">待付款</Text>
            <Text className="icon-car">待收货</Text>
            <Text className="icon-money">退款/退货</Text>
            <Text className="icon-list">全部订单</Text>
          </View>
        </View>
        {/* 地址管理 */}
        <View className="address icon-arrow">
          收货地址
        </View>
        {/* 其它 */}
        <View className="extra">
          <View className="item icon-arrow">联系客服</View>
          <Button className="button item icon-arrow">意见反馈</Button>
        </View>
      </View>
    )
  }
}