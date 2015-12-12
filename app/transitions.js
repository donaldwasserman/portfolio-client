export default function() {
  this.transition(
    this.toRoute(function(routeName) {
      return routeName;
    }),
    this.use('fade')
  );
}
