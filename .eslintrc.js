module.exports = {
  root: true,
  // env: {
  //   node: true,
  // },
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
