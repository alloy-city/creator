export default function (doc) {
    // console.log(doc)
    Auth.database("POST", doc, "eclass", _id => {
        Creator.Lesson.lesson.selected = _id;
        Creator.Lesson.lesson.classObject = doc;
        Creator.Lesson.addClassToDOM(doc);
        notify("Leçon enregistrée.", "success", false)
    })

}