module.exports = {
  dotfiles: 'ignore',
  etag: false,
  index: false,
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
};
