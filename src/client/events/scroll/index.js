const PROPERTIES = require('./properties')
const pickProperties = require('../../../util/pickProperties')

function handleLoadEvent(e) {
    const data = pickProperties(e, PROPERTIES)
    data.uid = this.uid
    this.fetch.post('/event/scroll', data)
}

module.exports = handleLoadEvent