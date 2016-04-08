$(document).ready(function() {

  var loadPhotos = function() {
    var tag = $("#tag").val();
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON( flickerAPI, {
      tags: tag,
      tagmode: "any",
      format: "json"
    })
    .done(function( data ) {
      console.log("Success");
      if(data.stat == "fail"){

      }
      $.each( data.items, function( i, item ) {
        $("form").after('<img src="'+item.media.m+' "/>');
        if ( i === 3 ) {
          return false;
        }
      });
    });
  }

  $("#ver").click(loadPhotos);
});
