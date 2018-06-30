angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      selectVideo: '<'
    },
    controller: function() {
      this.onClick = function() {};
    },
    templateUrl: 'src/templates/videoList.html'
  });
