export default {
    module : {
        rules: [
            {
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer : {
        overlay: true
    }
};