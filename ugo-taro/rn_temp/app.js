import { Provider as TCRNProvider } from '@tarojs/components-rn';
import TaroRouter from '@tarojs/taro-router-rn';
import staticTabsIconUserActive3XPng from './static/tabs/icon_user_active@3x.png';
import staticTabsIconUser3XPng from './static/tabs/icon_user@3x.png';
import staticTabsIconCartActive3XPng from './static/tabs/icon_cart_active@3x.png';
import staticTabsIconCart3XPng from './static/tabs/icon_cart@3x.png';
import staticTabsIconCategoryActive3XPng from './static/tabs/icon_category_active@3x.png';
import staticTabsIconCategory3XPng from './static/tabs/icon_category@3x.png';
import staticTabsIconHomeActive3XPng from './static/tabs/icon_home_active@3x.png';
import staticTabsIconHome3XPng from './static/tabs/icon_home@3x.png';
import pagesOrderIndex from './pages/order/index';
import pagesListIndex from './pages/list/index';
import pagesGoodsIndex from './pages/goods/index';
import pagesAuthIndex from './pages/auth/index';
import pagesCenterIndex from './pages/center/index';
import pagesCartIndex from './pages/cart/index';
import pagesCategoryIndex from './pages/category/index';
import pagesIndexIndex from './pages/index/index';
import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";


import appStyleSheet from "./app_styles";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

var _styleSheet = appStyleSheet;
class App extends Component {
  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  static config = {
    window: {
      navigationBarBackgroundColor: '#ea4451',
      navigationBarTitleText: '黑马优购'
    },
    tabBar: {
      color: "#333",
      backgroundColor: "#fff",
      selectedColor: "#ea4451",
      list: [{
        text: "首页",
        pagePath: "pages/index/index",
        iconPath: staticTabsIconHome3XPng,
        selectedIconPath: staticTabsIconHomeActive3XPng
      }, {
        text: "分类",
        pagePath: "pages/category/index",
        iconPath: staticTabsIconCategory3XPng,
        selectedIconPath: staticTabsIconCategoryActive3XPng
      }, {
        text: "购物车",
        pagePath: "pages/cart/index",
        iconPath: staticTabsIconCart3XPng,
        selectedIconPath: staticTabsIconCartActive3XPng
      }, {
        text: "我的",
        pagePath: "pages/center/index",
        iconPath: staticTabsIconUser3XPng,
        selectedIconPath: staticTabsIconUserActive3XPng
      }]
    }
  };

  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <TCRNProvider>
                  <RootStack />
                </TCRNProvider>;
  }

  componentWillUnmount() {
    this.componentDidHide && this.componentDidHide();
  }

}

const RootStack = TaroRouter.initRouter([['pages/index/index', pagesIndexIndex], ['pages/category/index', pagesCategoryIndex], ['pages/cart/index', pagesCartIndex], ['pages/center/index', pagesCenterIndex], ['pages/auth/index', pagesAuthIndex], ['pages/goods/index', pagesGoodsIndex], ['pages/list/index', pagesListIndex], ['pages/order/index', pagesOrderIndex]], Taro, App.config);
Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
export default App;