const path = require('path')
module.exports = {
    entry: ["./src/index.js"],
    output: {
        library: 'rxvuex',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, '../lib'),
        filename: 'rxvuex.js' /* 打包的结果文件名称 */
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/, //排除掉node_module目录
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"], //转码规则
                    plugins: [
                        require("@babel/plugin-transform-runtime"),
                        require("@babel/plugin-transform-arrow-functions"),
                        require("@babel/polyfill"),
                        require("@babel/plugin-transform-classes"),
                        require("@babel/plugin-transform-property-mutators"),
                        require("@babel/plugin-transform-computed-properties"),
                        require("@babel/plugin-transform-function-name"),
                        require("@babel/plugin-proposal-class-properties"),
                        require("@babel/plugin-syntax-function-bind"),
                    ]
                }
            }
        }]
    }
}