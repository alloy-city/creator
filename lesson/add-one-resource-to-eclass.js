export default (id) => {
    if (Creator.Lesson.lesson.selected == '') console.error('No Eclass selected.');
    else if (Creator.Lesson.lesson.resources.indexOf(id) == -1) {
        Creator.Lesson.lesson.resources.push(id);
        Creator.Lesson.lesson.resourceObject[id] = Creator.Lesson.lesson.resources[id];
        Creator.Lesson.modifyClass();
        $('#didactician-eclass-empty').remove();
        // var resourceFormatedToEclass = markUpResourceInClass(didactician.resources.resources[id]);
        $('#' + Creator.Lesson.lesson.selected).append(Creator.Lesson.markUpResourceInClass(Creator.Resource.resources.resources[id]));
        // console.log(Creator.lesson.resources);
    } else {
        console.error("This resource is already on this Eclass.");
        notify("Cette ressource est déjà sur cette leçon.", "warning", true)
    }
}