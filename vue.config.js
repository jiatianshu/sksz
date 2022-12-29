module.exports = {
    configureWebpack: {
        resolve: {
            alias: { //配置别名,修改后需要重新编译才能生效
                '@':"/src",
                "_c":"/src/components"
            
            }
        }
    }
}
console.log('NODE_ENV-------'+ process.env.VUE_APP_SERVER_URL)