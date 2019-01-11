module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: [
        'ie >= 11',
        'Safari >= 8',
        'iOS >= 10',
        'Android >= 4.4',
      ]
    })
  ]
}
