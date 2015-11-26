import DS from 'ember-data';

export default DS.Model.extend({
    slug: DS.attr('string'),
    content: DS.attr('string'),
    url: DS.attr('string'),
    mainImg: DS.attr('string'),
    title: DS.attr('string')
});
