import React from 'react';

import { Component } from "@tarojs/taro-rn";

import { View, Button } from "@tarojs/components-rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
export default class Auth extends Component {

  render() {
    return <View>
        <Button type="primary">微信登录</Button>
      </View>;
  }
}