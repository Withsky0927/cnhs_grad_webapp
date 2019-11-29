module.exports = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html", "css", "js", "png", "ico", "jpg"],
  index: false,
  redirect: false,
  setHeaders: function(res, path, stat) {
    res.set("x-timestamp", Date.now());
  }
};
