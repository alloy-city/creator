export default () => {
    let doc = Creator.Lesson.formatClassFromForm();
    Auth.database("POST", doc, `eclass/modify/${Creator.Lesson.lesson.selected}`, res => {
        doc._id = Creator.Lesson.lesson.selected;
        Creator.Lesson.lesson.classObject = doc;
        Creator.Lesson.addClassToDOM(doc)
        notify("Leçon modifiée", "success", false)
    })
}