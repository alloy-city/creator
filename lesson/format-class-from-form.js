export default () => {
    let obj = {}

    obj.author = Auth.userData._id;
    obj.title = $('#create-eclass-title').val();
    obj.subtitle = $('#create-eclass-subtitle').val();
    obj.price = $('#create-eclass-price').val();
    obj.description = $('#create-eclass-description').val();
    obj.level = $('#level-selector').val();
    obj.facilitatorOnly = $('#create-eclass-facilitator-only').val();
    obj.tags = separateTags($('#create-eclass-tags').val());
    obj.owns = Creator.Lesson.lesson.resources;

    return obj;
}