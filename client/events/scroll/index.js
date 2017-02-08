const PROPERTIES = require('./properties')
const pickProperties = require('../../util/pickProperties')

function handleScrollEvent (e) {
  const data = pickProperties(e, PROPERTIES)
  data.ic = this.ic
  this.fetch.post('/event/scroll', data)
}

module.exports = handleScrollEvent
