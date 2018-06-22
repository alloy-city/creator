export default function(id) {
    console.log(id)

    var type = Creator.Resource.resources.resources[id].type;

    if (type == "text" || type == "html" || type == "image" || type == "audio" || type == "video") {
        Creator.Resource.createPassiveResource();
        $(':radio[value="' + type + '"]').prop('checked', true);
        $('#create-resource-resource').val(Creator.Resource.resources.resources[id].resource);
        $('#create-resource-facilitator-only').val(Creator.Resource.resources.resources[id].facilitatorOnly);
        if (Creator.Resource.resources.resources[id].tags) $('#create-resource-tags').val(Creator.Resource.resources.resources[id].tags.join());
    } else if (type == "open" || type == "choice" || type == "order" || type == "gaps") {
        Creator.Resource.createActiveResource();
        $('.more-than-three').remove();
        $(':radio[value="' + type + '"]').prop('checked', true);
        $('#create-active-resource-resource-question').val(Creator.Resource.resources.resources[id].resource.question);
        for (var i = 0; i < Creator.Resource.resources.resources[id].resource.items.length - 2; i++) {
            Creator.Resource.addOneListItem();
        }
        var items = $('.create-active-resource-item');
        for (var i = 0; i < items.length; i++) {
            items.eq(i).val(Creator.Resource.resources.resources[id].resource.items[i]);
        }
        $('#create-active-resource-facilitator-only').val(Creator.Resource.resources.resources[id].facilitatorOnly);
        if (Creator.Resource.resources.resources[id].worth) $('#create-active-resource-worth').val(Creator.Resource.resources.resources[id].worth);
        if (Creator.Resource.resources.resources[id].tags) $('#create-active-resource-tags').val(Creator.Resource.resources.resources[id].tags.join());
    }
}