
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "banner": {
    "width": "100%",
    "height": scalePx2dp(170)
  },
  "navs": {
    "display": "flex",
    "justifyContent": "space-between",
    "paddingTop": scalePx2dp(15),
    "paddingRight": scalePx2dp(22),
    "paddingBottom": scalePx2dp(15),
    "paddingLeft": scalePx2dp(22)
  },
  "goTop": {
    "position": "fixed",
    "bottom": scalePx2dp(15),
    "right": scalePx2dp(15),
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "width": scalePx2dp(50),
    "height": scalePx2dp(50),
    "fontSize": scalePx2dp(24),
    "color": "#666",
    "borderRadius": "50%",
    "backgroundColor": "rgba(255, 255, 255, 0.8)"
  }
})
