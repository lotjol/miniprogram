
import Taro, { Component } from '@tarojs/taro'

import { View, Input, Text, Navigator, ScrollView } from '@tarojs/components'

import './index.scss'

export default class Search extends Component {

  constructor (props) {
    super(props)

    // 绑定this的指向
    this.goSearch = this.goSearch.bind(this)
    this.cancelSearch = this.cancelSearch.bind(this)
  }
  
  // 初始数据
  state = {
    focused: false,
    placeholder: ''
  }
  
  goSearch () {
    // 更新数据
    this.setState({
      focused: true,
      placeholder: '请输入您想要的商品'
    })
  
    // 父子组件通信
    this.props.onSearch && this.props.onSearch({
      pageHeight: '200px'
    })
  }

  cancelSearch () {
    // 更新数据
    this.setState({
      focused: false,
      placeholder: ''
    })
  
    // 父子组件通信
    this.props.onSearch && this.props.onSearch({
      pageHeight: 'auto'
    })
  }

  render () {
    return (
      <View className={['search', this.state.focused ? 'focused' : ''].join(' ')}>
        {/* 输入框 */}
        <View className="input-wrap">
          <Input
            className="input"
            onFocus={this.goSearch}
            placeholder={this.state.placeholder} />
          <Text
            onClick={this.cancelSearch}
            className="cancel">取消</Text>
        </View>
        {/* 搜索结果 */}
        <View className="content">
          <View className="title">搜索历史<Text className="clear"></Text></View>
          <View className="history">
            <Navigator className="navigator" url="">小米</Navigator>
            <Navigator className="navigator" url="">智能电视</Navigator>
            <Navigator className="navigator" url="">小米空气净化器</Navigator>
            <Navigator className="navigator" url="">西门子洗碗机</Navigator>
            <Navigator className="navigator" url="">华为手机</Navigator>
            <Navigator className="navigator" url="">苹果</Navigator>
            <Navigator className="navigator" url="">锤子</Navigator>
          </View>
          {/* 结果 */}
          <View className="result">
            <ScrollView
              className="scroll-view"
              scrollY>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
              <Navigator className="navigator" url="">小米</Navigator>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}