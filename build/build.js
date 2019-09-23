const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entity: '/src/index.js',
    output: {
        path: path.join(__dirname, './lib/'),
        /* 出口文件模块所属目录，必须是一个绝对路径 */
        filename: 'bundle.js' /* 打包的结果文件名称 */
    },
    devServer: {
        // 配置webpack-dev-server的www目录
        contentBase: './dist'
    },
    plugins: [
        // 该插件可以把index.html打包到bundle.js文件所属目录，跟着bundle走
        // 同时也会自动在index.html中注入script引用链接，并且引用的资源名称，也取决于打包的文件名称
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [{
                test: /.css$/,
                use: [
                    //注意：这里的顺序很重要，不要乱了顺序
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.(jpg|png|gif|svg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //排除掉node_module目录
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'] //转码规则
                    }
                }
            }
        ]
    }
}