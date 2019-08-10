export default function() {
    var type = $("input[type='radio'][name='resource-type']:checked").val();
    var resourcePrimary = $("#create-resource-resource").val();
    var resourceFacilitatorOnly = $("#create-resource-facilitator-only").val();
    var tags = separateTags($("#create-resource-tags").val());

    if (resourcePrimary.toLowerCase().indexOf("http://") > -1) {
        notify("N'utilisez pas de resource servie par le protocole non-sécurisé HTTP.", "danger", true);
        return;
    }

    var resource = {
        author: Auth.userData._id,
        type: type,
        tags: tags,
        resource: resourcePrimary,
        facilitatorOnly: resourceFacilitatorOnly
    }
    return resource;
}
