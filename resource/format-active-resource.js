export default function() {
    var type = $("input[type='radio'][name='active-resource-type']:checked").val();
    var resourceFacilitatorOnly = $('#create-active-resource-facilitator-only').val();
    var tags = separateTags($("#create-active-resource-tags").val());
    var worth = $("#create-active-resource-worth").val();
    var question = $("#create-active-resource-resource-question").val();
    var jqObj = $('.create-active-resource-item');
    var items = [];

    if (question.toLowerCase().indexOf("http://") > -1) {
        notify("N'utilisez pas de resource servie par le protocole non-sécurisé HTTP.", "danger", true);
        return;
    }

    for (var i = 0; i < jqObj.length; i++) {
        items.push(jqObj.eq(i).val());
    }

    var resource = {
        author: Auth.userData._id,
        type: type,
        tags: tags,
        worth: worth,
        resource: { 'question': question, 'items': items },
        facilitatorOnly: resourceFacilitatorOnly
    }
    return resource;
}
