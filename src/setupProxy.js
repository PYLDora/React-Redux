const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:7001/api',
      pathRewrite: {
        "^/api": ""
      },
      changeOrigin: true,
    })
  );
};