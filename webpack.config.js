const path = require('path');

module.exports = {
  entry: './public/js/firebase.js',
  output: {
    path: path.resolve(__dirname, '/public'),
    filename: 'app.js',
    libraryTarget: "var",
    library: 'YourLibraryName'
  },
};
