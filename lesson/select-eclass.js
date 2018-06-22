export default (id) => {

    Creator.Lesson.lesson.selected = id;

    Auth.database("GET", null, `eclass/${id}`, lesson => {
        console.log(lesson);
        Creator.Lesson.addClassToDOM(lesson);
        Creator.Lesson.editClass(lesson);
        // console.log(lesson.owns);
    })
}