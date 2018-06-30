angular.module('video-player')
  .component('app',{
    controller: function(youTube) {
      var thisApp = this;
      thisApp.videos = exampleVideoData;
      thisApp.currentVideo = exampleVideoData[0];
      thisApp.result = '';
      
      thisApp.selectVideo = function(newCurrentVideo) {
        thisApp.currentVideo = newCurrentVideo;
      };
      
      thisApp.searchResults = function(newResult) {
        thisApp.result = newResult;
        thisApp.videos = youTube.searchYoutube(newResult);
        thisApp.currentVideo = thisApp.videos[0];
      };
    },
    templateUrl: 'src/templates/app.html'
  })
  
  
