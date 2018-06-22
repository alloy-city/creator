export default (id) => {
    $('#didactician-display-resources').html('');
    Creator.Resource.addResourceToDOM(Creator.Lesson.lesson.resourceObject[id], true);
    Creator.Resource.selectOneResource(id);
}