var searchAlbums = function(artist){
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
        	q: 'Kanye',
        	type: 'artist'
        },
        success: function (response) {
            console.log(response);
        }
    });
};

document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchAlbums(document.getElementById('artist').value);
}, false);
