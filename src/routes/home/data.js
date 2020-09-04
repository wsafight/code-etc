const {hookInterface} = require('@elderjs/elderjs');
const componentRules = require('../../data/component-rules')
const cssRules = require('../../data/css-rules')
const htmlRules = require('../../data/html-rules')
const jsRules = require('../../data/js-rules')

module.exports = ({request, data}) => {
  data.hookInterface = hookInterface;
  data.componentRules = componentRules;
  data.cssRules = cssRules;
  data.htmlRules = htmlRules;
  data.jsRules = jsRules;

  return data;
};
