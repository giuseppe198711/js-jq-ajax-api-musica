$(document).ready (function() {


  $.ajax(

    {
       "url": "https://flynn.boolean.careers/exercises/api/array/music",
       "method": "GET",
       "success": function (data, status) {
         // data è un oggetto che contiene un array di un album e lo stato della risposta
         //
         var result = data.response;
         // result è l array di album e non tutto l oggetto
         console.log(data);

         render(result);
       },

       "error": function (richiesta, stato, errori) {
         alert("E' avvenuto un errore." + errori);
       }
    }

  );


});




$(".genere").change(function() {
  var valueSelect = $(this).val();

  if (valueSelect == "") {
    $(".cd").show();
  } else {
    $(".cd").hide();
    $(".cd[data-genere='"+valueSelect+"']").show();
  }

});



function render (results) {
  var source = $("#disco-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < results.length; i++) {
    var album = results[i];

  // in alternativa  se i nomi all'interno dell'oggetto della risposta non corrispondono a
  // quelli utilizzati nel template ci creiamo un nuovo oggetto contex che contiene
  // le proprietà utilizzate nel nostro teamplate.

    // console.log(context);
    // var context = {
    //
    //   "poster": album.poster,
    //   "title": album.title,
    //   "author": album.author,
    //   "year": album.year,
    //   "genre": album.genre,
    // };
    

    var html = template(album);

    $(".cds-container").append(html);
  }


}
