import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Image, Navigator, Swiper, SwiperItem } from "@tarojs/components-rn";

import indexStyleSheet from "./index_styles";

import Search from "../../components/search/index";

var _styleSheet = indexStyleSheet;
export default class Index extends Component {

  static config = {
    navigationBarTitleText: '首页'
  };

  constructor(props) {
    super(props);

    // 初始数据
    this.state = {
      pageHeight: 'auto'

      // 绑定this指向
    };this.disableScroll = this.disableScroll.bind(this);
  }

  disableScroll(ev) {
    // 阻止页面溢出产生滚动
    this.setState({
      pageHeight: ev.pageHeight
    });
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View style={{ overflow: 'hidden', height: this.state.pageHeight }}>
        {}
        <Search onSearch={this.disableScroll} />
        {}
        <Swiper indicatorDots autoplay circular indicatorActiveColor="#fff" indicatorColor="rgba(255, 255, 255, 0.6)" style={_styleSheet["banner"]}>
          <SwiperItem>
            <Navigator url="/pages/goods/index">
              <Image src="http://static.botue.com/ugo/uploads/banner1.png" style={_styleSheet["image"]}></Image>
            </Navigator>
          </SwiperItem>
          <SwiperItem>
            <Navigator url="/pages/goods/index">
              <Image src="http://static.botue.com/ugo/uploads/banner2.png" style={_styleSheet["image"]}></Image>
            </Navigator>
          </SwiperItem>
          <SwiperItem>
            <Navigator url="/pages/goods/index">
              <Image src="http://static.botue.com/ugo/uploads/banner3.png" style={_styleSheet["image"]}></Image>
            </Navigator>
          </SwiperItem>
        </Swiper>
        {}
        <View style={_styleSheet["navs"]}>
          <Navigator openType="switchTab" url="/pages/category/index">
            <Image src="http://static.botue.com/ugo/uploads/icon_index_nav_4@2x.png" style={_styleSheet["image"]}></Image>
          </Navigator>
          <Navigator url="/pages/list/index/index">
            <Image src="http://static.botue.com/ugo/uploads/icon_index_nav_3@2x.png" style={_styleSheet["image"]}></Image>
          </Navigator>
          <Navigator url="/pages/list/index">
            <Image src="http://static.botue.com/ugo/uploads/icon_index_nav_2@2x.png" style={_styleSheet["image"]}></Image>
          </Navigator>
          <Navigator url="/pages/list/index">
            <Image src="http://static.botue.com/ugo/uploads/icon_index_nav_1@2x.png" style={_styleSheet["image"]}></Image>
          </Navigator>
        </View>
        {}
        <View style={_styleSheet["floors"]}>
          <View style={_styleSheet["floor"]}>
            <View style={_styleSheet["title"]}>
              <Image src="http://static.botue.com/ugo/uploads/pic_floor01_title.png" style={_styleSheet["image"]}></Image>
            </View>
            <View style={_styleSheet["items"]}>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor01_1@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor01_2@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor01_3@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor01_4@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor01_5@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
            </View>
          </View>
          <View style={_styleSheet["floor"]}>
            <View style={_styleSheet["title"]}>
              <Image src="http://static.botue.com/ugo/uploads/pic_floor02_title.png" style={_styleSheet["image"]}></Image>
            </View>
            <View style={_styleSheet["items"]}>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor02_1@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor02_2@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor02_3@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor02_4@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor02_5@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
            </View>
          </View>
          <View style={_styleSheet["floor"]}>
            <View style={_styleSheet["title"]}>
              <Image src="http://static.botue.com/ugo/uploads/pic_floor03_title.png" style={_styleSheet["image"]}></Image>
            </View>
            <View style={_styleSheet["items"]}>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor03_1@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor03_2@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor03_3@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor03_4@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
              <Navigator url="/pages/list/index" style={_styleSheet["navigator"]}>
                <Image src="http://static.botue.com/ugo/uploads/pic_floor03_5@2x.png" style={_styleSheet["image"]}></Image>
              </Navigator>
            </View>
          </View>
        </View>
        <View style={[_styleSheet["goTop"], _styleSheet["icon-top"]]}></View>
      </View>;
  }
}