const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts;
const sourceExts = ['jsx', 'js', 'json', 'mjs'].concat(defaultSourceExts);

module.exports = {
  resolver: {
    sourceExts,
  },
};
