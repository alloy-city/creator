export default function selectResource(id) {
    Creator.Resource.clearResourceForm();
    if (keys[17]) { // ctrl
        if (Creator.Resource.resources.multipleSelection.indexOf(id) >= 0) {
            deleteOneItemFromArrayOfStrings(Creator.Resource.resources.multipleSelection, id);
            $('#' + id).removeClass('selected');
            if (Creator.Resource.resources.selected == id) Creator.Resource.resources.selected = $('.selected').first().attr("id");
        } else {
            Creator.Resource.resources.multipleSelection.push(id);
            Creator.Resource.resources.selected = id;
            $('#' + id).addClass('selected');
        }
    } else if (Creator.Resource.resources.multipleSelection.length > 1) {
        Creator.Resource.resources.multipleSelection = [id];
        Creator.Resource.resources.selected = id;
        $('.resource').removeClass('selected');
        $('#' + id).addClass('selected');
    } else {
        if (Creator.Resource.resources.selected == id) {
            Creator.Resource.resources.selected = '';
            Creator.Resource.resources.multipleSelection = [];
            $('#' + id).removeClass('selected');

        } else {
            Creator.Resource.selectOneResource(id);
        }
    }
}