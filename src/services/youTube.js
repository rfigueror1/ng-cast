angular.module('video-player')
  .service('youTube', function($http){
    this.searchYoutube = function(query) {
      var options = {q: query, maxResults: 5, key: YOUTUBE_API_KEY, part:'snippet', dataType:'application/JSON'}
      var successCallback = function(data){ return data[0]};
      var failureCallback = function(data){console.log(data)};
      $http.get('https://www.googleapis.com/youtube/v3', options).then(successCallback, failureCallback);
    };
  });
