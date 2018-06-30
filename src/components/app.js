angular.module('video-player')
  .component('app', {
    controller: function(youTube, $http) {
      var thisApp = this;
      thisApp.videos = exampleVideoData;
      thisApp.currentVideo = exampleVideoData[0];
      thisApp.result = '';
      
      thisApp.selectVideo = function(newCurrentVideo) {
        thisApp.currentVideo = newCurrentVideo;
      };
      
      thisApp.searchResults = function(newResult) {
        thisApp.result = newResult;
        youTube.search(newResult, thisApp);
        thisApp.result = '';
      };
      
      thisApp.init = function() {
        console.log('init');
        thisApp.searchResults('');
      };
      
      thisApp.init();
    },
    templateUrl: 'src/templates/app.html'
  });
  
  
