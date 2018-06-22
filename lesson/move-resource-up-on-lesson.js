export default (resourceId) => {
    var index = Creator.Lesson.lesson.resources.indexOf(resourceId);
    if (index > 0) {
        var resourceAbove = Creator.Lesson.lesson.resources[index - 1];
        Creator.Lesson.lesson.resources.move(index, index - 1);
        Creator.Lesson.modifyClass();
        let a = $('[name="' + resourceAbove + '"]');
        let b = $('[name="' + resourceId + '"]');
        b.insertBefore(a);
    }
}