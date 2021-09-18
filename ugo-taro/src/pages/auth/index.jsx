
import Taro, { Component } from '@tarojs/taro'

import { View, Button } from '@tarojs/components'

import './index.scss'

export default class Auth extends Component {

  render () {
    return (
      <View>
        <Button type="primary">微信登录</Button>
      </View>
    )
  }
}