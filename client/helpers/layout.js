Template.layout.onCreated(function () {
  // Session.set('lang', 'eng')
  // console.log(Session.get('lang'))
})
Template.layout.helpers({
  lang : function () {
    var path = Router.current().route.getName()

    if((path.indexOf('Ita') > -1) || (path.indexOf('Rom') > -1)) Session.set('lang', false)
    else Session.set('lang', true)
    return Session.get('lang')
  }
})
Meteor.startup(function () {
    $('body').addClass('site com_content view-featured no-layout no-task itemid-101')    
})
