export default (oneResource) => {
    var facilitatorMarkUp = '<div class="facilitatorsOnly well"><span class="label label-default pull-right">pour le facilitateur</span>' + Teacher.Lesson.markUpFacilitatorParagraphs(oneResource.facilitatorOnly) + '</div></div>';

    var tags = ''
    if (oneResource.tags) {
        for (var i = 0; i < oneResource.tags.length; i++) {
            tags = tags + '<span class="label label-default">' + oneResource.tags[i] + '</span>';
        }
    }

    var markUpHeader = `
        <div class="resource sortable" name="${oneResource._id}">
        <span class="pull-right glyphicon glyphicon-remove" aria-hidden="true" onclick="Creator.Lesson.deleteOneResourceFromEclass('${oneResource._id}')" role="button"></span>
        <span class="pull-right glyphicon glyphicon-triangle-bottom" aria-hidden="true" onclick="Creator.Lesson.moveResourceDownOnClass('${oneResource._id}')" role="button"></span>
        <span class="pull-right glyphicon glyphicon-triangle-top" aria-hidden="true" onclick="Creator.Lesson.moveResourceUpOnClass('${oneResource._id}')" role="button"></span>
        <span onclick="Creator.Lesson.selectOneResourceInClass('${oneResource._id}')" class="pull-right glyphicon glyphicon-pencil" aria-hidden="true" role="button"></span>`

    var markUp = markUpHeader
    
    var items = ''
    if (oneResource.type == "html") {
        markUp = markUp + '<span class="label label-info">' + oneResource.type + '</span>' + tags + '' + oneResource.resource;
    } else if (oneResource.type == "text") {
        markUp = markUp + '<span class="label label-info">' + oneResource.type + '</span>' + tags + '<p>' + oneResource.resource + '</p>';
    } else if (oneResource.type == "image") {
        markUp = markUp + '<span class="label label-info">' + oneResource.type + '</span>' + tags + '<img class="img-responsive" src="images/slides/' + oneResource.resource + '" />';
    } else if (oneResource.type == "audio") {
        markUp = markUp + '<span class="label label-info">' + oneResource.type + '</span>' + tags + '<p>' + oneResource.resource + '</p><audio style="width: 100%;" controls><source src="media/' + oneResource.resource + '" type="audio/ogg">Your browser does not support the audio element.</audio>';
    } else if (oneResource.type == "video") {
        markUp = markUp + '<span class="label label-info">' + oneResource.type + '</span>' + tags + '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/' + oneResource.resource + '"></iframe></div>';
    } else if (oneResource.type == "open") {
        markUp = markUp + '<span class="label label-danger">' + oneResource.type + '</span>' + tags + '<p>' + oneResource.resource.question + '</p>';
    } else if (oneResource.type == "choice") {
        for (var i = 0; i < oneResource.resource.items.length; i++) {
            items = items + '<li>' + oneResource.resource.items[i] + '</li>';
        }
        markUp = markUp + '<span class="label label-primary">' + oneResource.type + '</span>' + tags + '<p>' + oneResource.resource.question + '</p><ol>' + items + '</ol>';
    } else if (oneResource.type == "order") {
        for (var i = 0; i < oneResource.resource.items.length; i++) {
            items = items + '<li>' + oneResource.resource.items[i] + '</li>';
        }
        markUp = markUp + '<span class="label label-success">' + oneResource.type + '</span>' + tags + '<p>' + oneResource.resource.question + '</p><ol>' + items + '</ol>';
    } else if (oneResource.type == "gaps") {
        items = '<p>'
        for (var i = 0; i < oneResource.resource.items.length; i++) {
            if (isEven(i)) items = items + oneResource.resource.items[i] + ' ';
            else items = items + '<mark><b class="text-danger">' + oneResource.resource.items[i] + '</b></mark> ';
        }
        items = items + '</p>';
        markUp = markUp + '<span class="label label-warning">' + oneResource.type + '</span>' + tags + '<p>' + oneResource.resource.question + '</p>' + items;
    }
    return markUp + facilitatorMarkUp;
}