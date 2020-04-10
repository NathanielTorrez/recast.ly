// destructure the options parameter thats passed in as a first argumemt
var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  // used for ajax request
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({ items }) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({ responseJSON }) => {
      responseJSON.error.errors.forEach((err) => console.error(error)
      );
    });
};

export default searchYouTube;
