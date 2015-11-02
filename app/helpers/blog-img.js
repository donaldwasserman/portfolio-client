import Ember from 'ember';
import ENV from '../config/environment';

export function blogImg(params/*, hash*/) {
  let img = params[0];
  return `http://${ENV.APP.imgHost}${img}`;
}

export default Ember.Helper.helper(blogImg);
