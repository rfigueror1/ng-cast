angular.module('video-player')
  .component('search', {
    bindings: {
      searchResults: '<',
      result: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
