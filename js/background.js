$(document).ready(function() {
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=646ef8b09f982c21ecc46c5c976cb8ad&text=morecambe+bay&license=1%2C2%2C4%2C5%2C7&per_page=100&page=1&format=json&jsoncallback=?";

    $.getJSON(url, null, function(data) {
         var index = Math.floor(Math.random() * 100) + 1;

        if (data.stat == "ok" && data.photos.photo.length > 0) {
            var photo = data.photos.photo[index];

            // http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
            var photo_url = "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "b.jpg";

            // http://www.flickr.com/photos/{user-id}/{photo-id}
            var photo_link = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;

            var photo_title = photo.title;

            var css = 'url(' + photo_url + ')';
            $("body").css("background-image", css);

            var photocredit = $('a.photocredit');
            photocredit.attr("href", photo_link);
            photocredit.text(photo_title);
        }
   
    });
});
