$(document).ready (function() {


  $.ajax(

    {
       "url": "https://flynn.boolean.careers/exercises/api/array/music,",
       "method": "GET",
       "succes": function (data, status) {
         var result = data.response;
         render(result);
       },

       "error": function (richiesta, stato, errori) {
         alert("E' avvenuto un errore." + errori);
       }
    }

  );


});



function render (results) {
  var source = $("cds-container").html();
  var template = Handlebars.compile(souce);

  for (var i = 0; i < result.length; i++) {
    var album = result[i];


    var contex = {
      "poster": album.poster,
      "title": album.title,
      "author": album.author,
      "year": album.year
    };

    var html = template(album);

    $(".container").append(html);
  }


}
