import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  date: DS.attr('date'),
  created: DS.attr('string', {
    defaultValue: function() {
      return new Date();
    }
  })
});
