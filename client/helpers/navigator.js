Template.engNavigator.onRendered(function () {
  var imgArray = ["/images/taoHeader/H1.jpg","/images/taoHeader/H2.jpg","/images/taoHeader/H3.jpg","/images/taoHeader/H4.jpg","/images/taoHeader/H5.jpg"]
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
