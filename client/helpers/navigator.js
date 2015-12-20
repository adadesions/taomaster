Template.engNavigator.onRendered(function () {
  var imgArray = ["/images/taoHeader/Head1.jpg","/images/taoHeader/Head2.jpg","/images/taoHeader/Head3.jpg","/images/taoHeader/Head4.jpg","/images/taoHeader/Head5.jpg"]
  var imgCount = 0;
  var startTime = function () {
    if(imgCount == imgArray.length) imgCount = 0
    document.getElementById("header-img").src = imgArray[imgCount]
    imgCount++
  }
  Meteor.setInterval(function () {
    startTime()
  }, 1500)
})
