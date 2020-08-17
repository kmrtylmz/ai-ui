import _ from "lodash";

const all = {
  env: process.env.NODE_ENV || "development",
};

export default _.merge(
  all,
  require(`./${all.env}.js`) || {},
  require("./shared") || {}
);
