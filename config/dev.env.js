'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VPC_API: '"https://www.easy-mock.com/mock/5af52ce18efab658654cbbfa/dave/"'
})
