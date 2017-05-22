$(document).ready(function () {

//Index Script

  $('#searchButton').on('click', function () {
    $('#movieResultDiv').empty();
    var searchedMovie = $('#movieSearchBar').val();
    var apiResults = $.get('http://www.omdbapi.com/?apikey=d31f1a94&s=' + searchedMovie).done(function (data) {
      var searchResults = apiResults.responseJSON.Search;
      console.log(apiResults.responseJSON.Search[0].imdbID);

      searchResults.forEach(function (movie) {
        // console.log(movie);
        var movieListEntry = $('<div class="movie-result" id="' + movie.imdbID + '"><a href=http://localhost:3000/search/' + movie.imdbID + '>');

        movieListEntry.append(
          '<img class="movie-poster" src="' + movie.Poster + '" />'
        );

        movieListEntry.append(
          '<div><strong>' + "Title: " + movie.Title + '</strong></div>'
        );

        movieListEntry.append(
          '<div>' + "Year: " + movie.Year + '</div>'
        );

        movieListEntry.append('</a></div>');

        $(".movie-result").click(function () {
          window.location = $(this).find("a").attr("href");
          return false;
        });

        $('#movieResultDiv').append(movieListEntry);

      });
    });
  })


});