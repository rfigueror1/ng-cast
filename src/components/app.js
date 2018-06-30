angular.module('video-player')

  .controller('app1.controller', function(){
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      this.selectVideo = function(newCurrentVideo) {
        console.log('this is ', this);
        console.log('this.currentVideo is ', this.currentVideo);
        console.log('newCurrentVideo is ', newCurrentVideo);
        this.currentVideo = newCurrentVideo;
      };
      this.searchResults = function() {
        // q = this.result
        // search()
      };
    })

  .component('app', {
    controller: 'app1.controller',
    templateUrl: 'src/templates/app.html'
  });
