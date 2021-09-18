
import { StyleSheet, Dimensions } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp (uiElementPx) {
  return uiElementPx * deviceWidthDp / uiWidthPx
}

export default StyleSheet.create({
  "search": {
    "display": "flex",
    "flexDirection": "column"
  },
  "search.focused": {
    "width": "100%",
    "height": "100%",
    "position": "absolute",
    "left": 0,
    "top": 0,
    "zIndex": 9
  }
})
