const { JWT_SECRET } = require('../helper/env')
const jwt = require('jsonwebtoken')
const { failed } = require('../helper/response')

module.exports = (req, res, next) => {
  try {
    const { token } = req.headers
    const decoded = jwt.verify(token, JWT_SECRET)
    req.APP_DATA = { tokenDecoded: decoded }
    next()
  } catch (err) {
    failed(res, err, 'failed', 'invalid token')
  }
}