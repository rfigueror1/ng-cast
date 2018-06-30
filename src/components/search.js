angular.module('video-player')
  .component('search', {
    bindings: {
      searchResults: '<'
    },
    controller: function() {
      this.result = '';
    },
    templateUrl: 'src/templates/search.html'
  });
