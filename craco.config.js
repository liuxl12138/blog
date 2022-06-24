const path  = require("path");
const { resolve } =path
module.exports = {
  webpack: {
    alias: {
      "@": resolve("src"),
    },
    configure: (webpackConfig, { env, paths }) => {
      // 修改build的生成文件名称
      paths.appBuild = "dist";
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, "dist"),
      };
      return webpackConfig;
    },
  },
};
