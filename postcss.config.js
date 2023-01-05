
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 192,
      propList: ['*'],
      minPixelValue: 12, // px小于12的不会被转换
      unitPrecision: 1, // 保留rem小数点多少位
      //selectorBlackList: ['van-']
    },

    autoprefixer: {}
  }
}
