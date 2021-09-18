import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/category/index',
      'pages/cart/index',
      'pages/center/index',
      'pages/auth/index',
      'pages/goods/index',
      'pages/list/index',
      'pages/order/index'
    ],
    window: {
      navigationBarBackgroundColor: '#ea4451',
      navigationBarTitleText: '黑马优购'
    },
    tabBar: {
      color: "#333",
      backgroundColor: "#fff",
      selectedColor: "#ea4451",
      list: [
        {
          text: "首页",
          pagePath: "pages/index/index",
          iconPath: "static/tabs/icon_home@3x.png",
          selectedIconPath: "static/tabs/icon_home_active@3x.png"
        },
        {
          text: "分类",
          pagePath: "pages/category/index",
          iconPath: "static/tabs/icon_category@3x.png",
          selectedIconPath: "static/tabs/icon_category_active@3x.png"
        },
        {
          text: "购物车",
          pagePath: "pages/cart/index",
          iconPath: "static/tabs/icon_cart@3x.png",
          selectedIconPath: "static/tabs/icon_cart_active@3x.png"
        },
        {
          text: "我的",
          pagePath: "pages/center/index",
          iconPath: "static/tabs/icon_user@3x.png",
          selectedIconPath: "static/tabs/icon_user_active@3x.png"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
