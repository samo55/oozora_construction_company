module.exports = {
  "publicPath": process.env.NODE_ENV === 'production'
    ? '/oozora_construction_company/'
    : '/',
  "outputDir": "docs",
  "assetsDir": "./",
  "transpileDependencies": [
    "vuetify"
  ]
}