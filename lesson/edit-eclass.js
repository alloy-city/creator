export default (oneEclass) => {
    $('#create-eclass-title').val(oneEclass.title);
    $('#create-eclass-subtitle').val(oneEclass.subtitle);
    $('#create-eclass-description').val(oneEclass.description);
    document.getElementById("create-eclass-price").value = oneEclass.price
    document.getElementById("level-selector").selectedIndex = oneEclass.level
    $('#create-eclass-facilitator-only').val(oneEclass.facilitatorOnly);
    $('#create-eclass-tags').val(oneEclass.tags.join(", "));

    Creator.Lesson.lesson.resources = oneEclass.owns;
}