export default (id) => {
    $('#didactician-display-resources').html('');
    Creator.Lesson.lesson.resourceObject[id]._id = id
    Creator.Resource.addResourceToDOM(Creator.Lesson.lesson.resourceObject[id], true);
    Creator.Resource.selectOneResource(id);
}