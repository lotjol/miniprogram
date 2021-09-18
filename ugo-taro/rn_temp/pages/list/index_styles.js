
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "filter": {
    "display": "flex",
    "height": scalePx2dp(48),
    "lineHeight": scalePx2dp(48),
    "borderBottom": "0.5px solid #ddd"
  },
  "goods": {
    "position": "absolute",
    "width": "100%",
    "top": scalePx2dp(48.5),
    "bottom": 0
  },
  "item": {
    "display": "flex",
    "paddingTop": scalePx2dp(15),
    "paddingRight": scalePx2dp(10),
    "paddingBottom": scalePx2dp(15),
    "paddingLeft": 0,
    "marginLeft": scalePx2dp(10),
    "borderBottom": "0.5px solid #eee"
  }
})
