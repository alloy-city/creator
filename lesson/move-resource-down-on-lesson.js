export default (resourceId) => {
    var index = Creator.Lesson.lesson.resources.indexOf(resourceId);
    if (index < Creator.Lesson.lesson.resources.length - 1) {
        var resourceBelow = Creator.Lesson.lesson.resources[index + 1];
        Creator.Lesson.lesson.resources.move(index, index + 1);
        Creator.Lesson.modifyClass();
        let a = $('[name="' + resourceId + '"]');
        let b = $('[name="' + resourceBelow + '"]');
        a.insertAfter(b);
    }
}