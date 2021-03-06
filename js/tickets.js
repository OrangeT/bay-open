$(document).ready(function() {
    var url = "http://json2jsonp.com/?callback=?&url=https%3A%2F%2Fwww.eventbrite.com%2Fjson%2Fevent_list_attendees%3Fid%3D15046250741%26app_key%3DTK33PTRBQQXDJZQTEA%26user_key%3D12529159772113316988";

    $.getJSON(url, null, function(data) {

        var template = $('#entry-list').html();


        //Sabre: 20729029, 20729035
        //Epee: 20729031, 20729037
        //Foil: 20729033, 20729039

        displayEntries(data.attendees, 32320191, 32320194, template, "#sabreEntry");
        displayEntries(data.attendees, 32320192, 32320195, "#epeeEntry");
        displayEntries(data.attendees, 32320193, 32320196, template, "#foilEntry");

    });
});

var displayEntries = function(attendees, ticketId, lateTicketId, template, contentId) {

    var filtered = attendees.filter(function(a) {
        return a.attendee.ticket_id == ticketId || 
        a.attendee.ticket_id == lateTicketId
    });

    var content = Mustache.render(template, filtered);

    $(contentId).html(content);
};
