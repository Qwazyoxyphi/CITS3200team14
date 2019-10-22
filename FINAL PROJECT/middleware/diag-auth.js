export default function(context) {
  //console.log('[Middleware] Check Auth')
  context.store.dispatch(
    '/diagram/setDiagram',
    context.params.diagrampage2,
    context.req
  )
  //console.log(context.params)
}
