import Ember from 'ember';
import DS from 'ember-data';
import momentFormat from 'ember-moment/computeds/format';

export default DS.Model.extend({
  slug: DS.attr('string'),
  date: DS.attr('date'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  content: DS.attr('string'),
  mainImg: DS.attr('string'),
  shortDate: momentFormat('date', 'YYYY-MM-DD')
});
