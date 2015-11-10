import Ember from 'ember';

export function unescapeContent(params/*, hash*/) {
  return Ember.String.htmlSafe(params[0]);
}

export default Ember.Helper.helper(unescapeContent);
