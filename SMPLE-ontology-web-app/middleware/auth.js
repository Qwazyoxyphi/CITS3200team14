export default function(context) {
  console.log('[Middleware] Just Auth')
  if (context.store.getters.isAuthenticated == false) {
    console.log('NOT AUTHENTICATED- SHOULD REDIRECT')
    //context.redirect('/signin-signup')
  }
}
