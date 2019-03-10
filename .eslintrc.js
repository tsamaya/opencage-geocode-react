module.exports = {
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: '16.5', // React version, default to the latest React stable release
    },
  },
};
