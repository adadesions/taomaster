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
    var imgArray = new Array("pic tao/Head1.jpg","pic tao/Head2.jpg","pic tao/Head3.jpg","pic tao/Head4.jpg","pic tao/Head5.jpg");
    var imgCount = 0;
    startTime()

    function startTime() {
      if(imgCount == imgArray.length) {
          imgCount = 0;
      }
      document.getElementById("img1").src = imgArray[imgCount];
      imgCount++;
      setTimeout("startTime()", 1500);
    }
})
//Hello Naress
