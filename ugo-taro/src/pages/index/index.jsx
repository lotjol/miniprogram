import Taro, { Component } from '@tarojs/taro'
import {
  View,
  Image,
  Navigator,
  Swiper,
  SwiperItem
} from '@tarojs/components'

import './index.scss'

import Search from '@/components/search'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor (props) {
    super(props)
    
    // 初始数据
    this.state = {
      pageHeight: 'auto'
    }
  
    // 绑定this指向
    this.disableScroll = this.disableScroll.bind(this)
  }

  disableScroll (ev) {
    // 阻止页面溢出产生滚动
    this.setState({
      pageHeight: ev.pageHeight
    })
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View style={{overflow: 'hidden', height: this.state.pageHeight}}>
        {/* 搜索组件 */}
        <Search onSearch={this.disableScroll} />
        {/* 焦点图 */}
        <Swiper
          className="banner"
          indicatorDots
          autoplay
          circular
          indicatorActiveColor="#fff"
          indicatorColor="rgba(255, 255, 255, 0.6)">
          <SwiperItem>
            <Navigator url="/pages/goods/index">
              <Image
                className="image"
                src="http://static.botue.com/ugo/uploads/banner1.png"></Image>
            </Navigator>
          </SwiperItem>
          <SwiperItem>
            <Navigator url="/pages/goods/index">
              <Image
                className="image"
                src="http://static.botue.com/ugo/uploads/banner2.png"></Image>
            </Navigator>
          </SwiperItem>
          <SwiperItem>
            <Navigator url="/pages/goods/index">
              <Image
                className="image"
                src="http://static.botue.com/ugo/uploads/banner3.png"></Image>
            </Navigator>
          </SwiperItem>
        </Swiper>
        {/* 主导航 */}
        <View className="navs">
          <Navigator
            openType="switchTab"
            url="/pages/category/index">
            <Image
              className="image"
              src="http://static.botue.com/ugo/uploads/icon_index_nav_4@2x.png"></Image>
          </Navigator>
          <Navigator url="/pages/list/index/index">
            <Image
              className="image"
              src="http://static.botue.com/ugo/uploads/icon_index_nav_3@2x.png"></Image>
          </Navigator>
          <Navigator url="/pages/list/index">
            <Image
              className="image"
              src="http://static.botue.com/ugo/uploads/icon_index_nav_2@2x.png"></Image>
          </Navigator>
          <Navigator url="/pages/list/index">
            <Image
              className="image"
              src="http://static.botue.com/ugo/uploads/icon_index_nav_1@2x.png"></Image>
          </Navigator>
        </View>
        {/* 楼层 */}
        <View className="floors">
          <View className="floor">
            <View className="title">
              <Image
                className="image"
                src="http://static.botue.com/ugo/uploads/pic_floor01_title.png"></Image>
            </View>
            <View className="items">
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor01_1@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor01_2@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor01_3@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor01_4@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor01_5@2x.png"></Image>
              </Navigator>
            </View>
          </View>
          <View className="floor">
            <View className="title">
              <Image
                className="image"
                src="http://static.botue.com/ugo/uploads/pic_floor02_title.png"></Image>
            </View>
            <View className="items">
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor02_1@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor02_2@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor02_3@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor02_4@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor02_5@2x.png"></Image>
              </Navigator>
            </View>
          </View>
          <View className="floor">
            <View className="title">
              <Image
                className="image"
                src="http://static.botue.com/ugo/uploads/pic_floor03_title.png"></Image>
            </View>
            <View className="items">
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor03_1@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor03_2@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor03_3@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor03_4@2x.png"></Image>
              </Navigator>
              <Navigator className="navigator" url="/pages/list/index">
                <Image
                  className="image"
                  src="http://static.botue.com/ugo/uploads/pic_floor03_5@2x.png"></Image>
              </Navigator>
            </View>
          </View>
        </View>
        <View className="goTop icon-top"></View>
      </View>
    )
  }
}
