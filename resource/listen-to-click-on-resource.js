export default function (id) {
    $('#' + id).on("click", function () {
        Creator.Resource.selectResource(id);
    });
}