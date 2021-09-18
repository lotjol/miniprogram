
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "tabs": {
    "display": "flex",
    "height": scalePx2dp(48),
    "lineHeight": scalePx2dp(48),
    "backgroundColor": "#fff",
    "shadowOffset": {
      "width": 0,
      "height": scalePx2dp(2)
    },
    "shadowRadius": scalePx2dp(5),
    "shadowColor": "#ccc",
    "shadowOpacity": 1
  },
  "orders": {
    "width": "100%",
    "backgroundColor": "#f4f4f4",
    "position": "absolute",
    "top": scalePx2dp(48.5),
    "bottom": 0
  },
  "item": {
    "paddingTop": scalePx2dp(15),
    "paddingRight": scalePx2dp(10),
    "paddingBottom": 0,
    "paddingLeft": scalePx2dp(10),
    "marginTop": scalePx2dp(8),
    "backgroundColor": "#fff"
  }
})
