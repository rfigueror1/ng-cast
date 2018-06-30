angular.module('video-player')
  .service('youTube', function($http) {
    
    this.search = function(query, thisApp) {
      var params = {'q': query, 'key': window.YOUTUBE_API_KEY, 'part': 'snippet'};

      var successCallback = function(data) {
        thisApp.videos = data.data.items;
        thisApp.currentVideo = thisApp.videos[0];
      };
      
      var failureCallback = function(data) {
        console.log('your request failed: ', data);
      };
      
      $http.get('https://www.googleapis.com/youtube/v3/search', {'params': params}).then(successCallback, failureCallback);
    };
    
  });
