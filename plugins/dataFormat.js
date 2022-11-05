export default (context, inject) => {
  inject('date', (date) => date.split('T')[0].split('-').reverse().join('/'))
}