import React from 'react';
import { Component } from "@tarojs/taro-rn";

import { View, Image, Text, Navigator, ScrollView } from "@tarojs/components-rn";

import indexStyleSheet from "./index_styles";

import Search from "../../components/search/index";

var _styleSheet = indexStyleSheet;
export default class Category extends Component {

  static config = {
    navigationBarTitleText: '分类'
  };

  render() {
    return <View style={_styleSheet["wrapper"]}>
        {}
        <Search />
        <View style={_styleSheet["category"]}>
          {}
          <View style={_styleSheet["sup"]}>
            <ScrollView scrollY style={_styleSheet["scroll-view"]}>
              <Text style={[_styleSheet["list"], _styleSheet["active"]]}>大家电</Text>
              <Text style={_styleSheet["list"]}>热门推荐</Text>
              <Text style={_styleSheet["list"]}>海外购</Text>
              <Text style={_styleSheet["list"]}>苏宁房产</Text>
              <Text style={_styleSheet["list"]}>手机相机</Text>
              <Text style={_styleSheet["list"]}>电脑办公</Text>
              <Text style={_styleSheet["list"]}>厨卫电器</Text>
              <Text style={_styleSheet["list"]}>食品酒水</Text>
              <Text style={_styleSheet["list"]}>居家生活</Text>
              <Text style={_styleSheet["list"]}>厨房电器</Text>
            </ScrollView>
          </View>
          {}
          <View style={_styleSheet["sub"]}>
            <ScrollView scrollY style={_styleSheet["scroll-view"]}>
              {}
              <Image src="https://static.botue.com/ugo/uploads/category.png" style={_styleSheet["thumb"]}></Image>
              <View style={_styleSheet["children"]}>
                <View style={_styleSheet["title"]}>电视</View>
                {}
                <View style={_styleSheet["brands"]}>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_1.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>曲面电视</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_2.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>海信</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_3.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>创维</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_4.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>夏普</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_5.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>TCL</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_6.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>PPTV</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_7.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>小米</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_8.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>长虹</Text>
                  </Navigator>
                </View>
              </View>
              <View style={_styleSheet["children"]}>
                <View style={_styleSheet["title"]}>电视</View>
                {}
                <View style={_styleSheet["brands"]}>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_1.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>曲面电视</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_2.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>海信</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_3.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>创维</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_4.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>夏普</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_5.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>TCL</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_6.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>PPTV</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_7.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>小米</Text>
                  </Navigator>
                  <Navigator url="/pages/list" style={_styleSheet["navigator"]}>
                    <Image src="https://static.botue.com/ugo/uploads/brand_8.jpg" style={_styleSheet["image"]}></Image>
                    <Text style={_styleSheet["text"]}>长虹</Text>
                  </Navigator>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>;
  }
}