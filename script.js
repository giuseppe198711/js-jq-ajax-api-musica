$(document).ready (function() {


  $.ajax(

    {
       "url": "https://flynn.boolean.careers/exercises/api/array/music",
       "method": "GET",
       "success": function (data, status) {
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
  var source = $("#disco-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < results.length; i++) {
    var album = results[i];


    var context = {
      "poster": album.poster,
      "title": album.title,
      "author": album.author,
      "year": album.year
    };

    var html = template(context);

    $(".cds-container").append(html);
  }


}
