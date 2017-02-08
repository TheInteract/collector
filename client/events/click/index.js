const PROPERTIES = require('./properties')
const pickProperties = require('../../util/pickProperties')

function handleClickEvent (e) {
  const data = pickProperties(e, PROPERTIES)
  data.ic = this.ic
  this.fetch.post('/event/click', data)
}

module.exports = handleClickEvent
