export default function(doc, id) {
    Auth.database("POST", doc, `resource/modify/${id}`, res => {
        doc._id = Creator.Resource.resources.selected;
        Creator.Resource.resources.resources[Creator.Resource.resources.selected] = doc;
        $('#' + Creator.Resource.resources.selected).remove();
        Creator.Resource.addResourceToDOM(doc, true);
        Creator.Resource.selectOneResource(Creator.Resource.resources.selected);
        notify("Ressource modifiée.", "success", false)
    })
}