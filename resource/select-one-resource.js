export default function (id) {
    Creator.Resource.resources.multipleSelection = [id];
    Creator.Resource.resources.selected = id;
    $('.resource').removeClass('selected');
    $('#' + id).addClass('selected');
    Creator.Resource.editResource(id);
}