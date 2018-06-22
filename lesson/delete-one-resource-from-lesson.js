export default (resourceId) => {
    // console.log('delete from class');
    deleteOneItemFromArrayOfStrings(Creator.Lesson.lesson.resources, resourceId);
    // console.log(Creator.lesson.resources);

    Creator.Lesson.modifyClass();
    $('[name="' + resourceId + '"]').remove();
    if (Creator.Lesson.lesson.resources.length == 0) $('#' + Creator.Lesson.lesson.selected).append("<p id='didactician-eclass-empty'>Sequence vide.</p>");
}