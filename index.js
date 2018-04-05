const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  const query = {
    part: 'snippet',
    key: 'AIzaSyDX4sLtdNPCNR2l72Ti74Ku1imkg0zG0S8',
    q: `${searchTerm}`,
    per_page: 5
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
  
  
  $.ajax({
    method: "GET",
    url: YOUTUBE_SEARCH_URL,
    query: query
  })
  .done(callback);
}

function renderResult(result) {
  return `
    <div>
    ${result.snippet.title} <img src="${result.snippet.thumbnails.default.url}" class="thumbnail" data-title="${result.snippet.title}" data-videoid="${result.id.videoId}" data-channelid="${result.snippet.channelId}">
    </div>
  `;
}

function showLightbox() {
  $('.modal').addClass('active');
  $('.overlay').addClass('active');
}

function hideLightbox() {
  $('.modal').removeClass('active');
  $('.overlay').removeClass('active');
}

function closeLightboxOnOverlay() {
  $('.overlay').on('click', function() {
    hideLightbox();
  })
}

function thumbnailHandler() {
  $('.thumbnail').on('click', function(){
    let thumbnailImage = $(this).attr('src');
    let thumbnailTitle = $(this).data('title');
    let thumbnailLink = $(this).data('videoid');
    let thumbnailChannel =  $(this).data('channelid');
    
    
    $('.modal-image').attr('src', thumbnailImage);
    $('.modal-title').html(thumbnailTitle);
    $('.modal-link').attr('href', `https://www.youtube.com/watch?v=${thumbnailLink}`);
    
    $('.modal-channel').attr('href', `https://www.youtube.com/channel/${thumbnailChannel}`);
    
    showLightbox();
  })
}

function displayYouTubeSearchData(data) {
  const results = data.items.map((item, index) => renderResult(item));
  $('.js-search-results').html(results);
  thumbnailHandler();
}

function watchSubmit() {
  closeLightboxOnOverlay();
  
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val();
    queryTarget.val("");
    $('.js-search-result').prop('hidden', false);
    getDataFromApi(query, displayYouTubeSearchData);
  });
}


$(watchSubmit);
