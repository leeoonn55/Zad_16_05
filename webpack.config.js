
// const path = require('path');

// //webpack.config.js
// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.resolve(__dirname, 'build'),
//         filename: 'app.bundle.js'
//     }
// };

// llllllllllllllllllllllllllllllllllllllllllllllllllllllll

const path = require('path');

module.exports = {
    mode: "development",
    entry: [
        'react-hot-loader/patch',
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules',
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
};