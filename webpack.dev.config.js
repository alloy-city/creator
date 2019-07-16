const path = require('path');

const opts = {
    DEBUG: true,
    "ifdef-verbose": true,
    "ifdef-triple-slash": true
};

module.exports = {
    entry: './index.js',
    module: {
        rules: [{
            use: [{ loader: "ifdef-loader", options: opts }],
            exclude: /node_modules/
        }]
    },
    output: {
        filename: 'creator-bundle.js',
        path: path.resolve("../../alloy-server-v3.0/apps/pantoufle/public/static-files/modules")
    },
    devtool: "inline-source-map",
    mode: "development"
};