import React from 'react';

import { Component } from "@tarojs/taro-rn";

import { View, Input, Text, Navigator, ScrollView } from "@tarojs/components-rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;

function _getClassName() {
  var className = [];
  var args = arguments[0];
  var type = Object.prototype.toString.call(args).slice(8, -1).toLowerCase();

  if (type === 'string') {
    args = args.trim();
    args && className.push(args);
  } else if (type === 'array') {
    args.forEach(function (cls) {
      cls = _getClassName(cls).trim();
      cls && className.push(cls);
    });
  } else if (type === 'object') {
    for (var k in args) {
      k = k.trim();

      if (k && args.hasOwnProperty(k) && args[k]) {
        className.push(k);
      }
    }
  }

  return className.join(' ').trim();
}

function _getStyle(classNameExpression) {
  var className = _getClassName(classNameExpression);

  var classNameArr = className.split(/\s+/);
  var style = [];

  if (classNameArr.length === 1) {
    style.push(_styleSheet[classNameArr[0].trim()]);
  } else {
    classNameArr.forEach(function (cls) {
      style.push(_styleSheet[cls.trim()]);
    });
  }

  return style;
}

export default class Search extends Component {

  constructor(props) {
    super(props);

    // 绑定this的指向
    this.goSearch = this.goSearch.bind(this);
    this.cancelSearch = this.cancelSearch.bind(this);
  }

  // 初始数据
  state = {
    focused: false,
    placeholder: ''
  };

  goSearch() {
    // 更新数据
    this.setState({
      focused: true,
      placeholder: '请输入您想要的商品'
    });

    // 父子组件通信
    this.props.onSearch && this.props.onSearch({
      pageHeight: '200px'
    });
  }

  cancelSearch() {
    // 更新数据
    this.setState({
      focused: false,
      placeholder: ''
    });

    // 父子组件通信
    this.props.onSearch && this.props.onSearch({
      pageHeight: 'auto'
    });
  }

  render() {
    return <View style={_getStyle(['search', this.state.focused ? 'focused' : ''].join(' '))}>
        {}
        <View style={_styleSheet["input-wrap"]}>
          <Input onFocus={this.goSearch} placeholder={this.state.placeholder} style={_styleSheet["input"]} />
          <Text onClick={this.cancelSearch} style={_styleSheet["cancel"]}>取消</Text>
        </View>
        {}
        <View style={_styleSheet["content"]}>
          <View style={_styleSheet["title"]}>搜索历史<Text style={_styleSheet["clear"]}></Text></View>
          <View style={_styleSheet["history"]}>
            <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
            <Navigator url="" style={_styleSheet["navigator"]}>智能电视</Navigator>
            <Navigator url="" style={_styleSheet["navigator"]}>小米空气净化器</Navigator>
            <Navigator url="" style={_styleSheet["navigator"]}>西门子洗碗机</Navigator>
            <Navigator url="" style={_styleSheet["navigator"]}>华为手机</Navigator>
            <Navigator url="" style={_styleSheet["navigator"]}>苹果</Navigator>
            <Navigator url="" style={_styleSheet["navigator"]}>锤子</Navigator>
          </View>
          {}
          <View style={_styleSheet["result"]}>
            <ScrollView scrollY style={_styleSheet["scroll-view"]}>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
              <Navigator url="" style={_styleSheet["navigator"]}>小米</Navigator>
            </ScrollView>
          </View>
        </View>
      </View>;
  }
}