export default function() {
    var nItems = $('.create-active-resource-items').children().length + 1;
    var markUp = '<div id="question-list-item-' + nItems + '" class="input-group more-than-three"><input type="text" class="form-control create-active-resource-item" name="' + nItems + '" placeholder="option ' + nItems + '"><span class="input-group-btn"><button class="btn btn-default" type="button" onclick="Creator.Resource.deleteOneListItem(' + nItems + ')">X</button></span></div>';
    $('.create-active-resource-items').append(markUp);
}