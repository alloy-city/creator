export default function(item) {
    var toBeRemoved = $('#question-list-item-' + item);
    var nextAll = toBeRemoved.nextAll();
    for (var i = 0; i < nextAll.length; i++) {
        var n = Number(nextAll.eq(i).children().first().attr('name')) - 1;
        nextAll.eq(i).attr('id', 'question-list-item-' + n);
        nextAll.eq(i).children().first().attr('name', n);
        nextAll.eq(i).children().first().attr('placeholder', 'option ' + n);
        nextAll.eq(i).children().last().children(0).attr('onclick', 'Creator.Resource.deleteOneListItem(' + n + ')');
    }
    toBeRemoved.remove();
}