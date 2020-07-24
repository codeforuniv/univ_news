import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function(value) {
  const date = moment.unix(value)
  return date.format('YYYY/MM/DD(ddd)')
})
