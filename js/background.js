var photo_url = "";
var photo_link = "";
var photo_title = "";

var jsonFlickrApi = function(rsp) {
    var index = Math.floor(Math.random() * 100) + 1;

    if (rsp.stat == "ok" && rsp.photos.photo.length > 0) {
        var photo = rsp.photos.photo[index];

        // http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
        photo_url = "http://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "b.jpg";

        // http://www.flickr.com/photos/{user-id}/{photo-id}
        photo_link = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;

        photo_title = photo.title;

        update();
    }
};

var update = function() {
    if (document.readyState !== "complete") {
        window.setTimeout(update, 500);
        return;
    }

    var css = 'url(' + photo_url + ')';
    $("body").css("background-image", css);

    var photocredit = $('a.photocredit');
    photocredit.attr("href", photo_link);
    photocredit.text(photo_title);
};

