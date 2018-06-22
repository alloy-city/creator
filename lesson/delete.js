export default () => {
    console.log("DANGER: delete lesson")

    let ok = confirm("Êtes-vous sûr ? Cette action ne pourra pas être annulée.")

    if (ok) {
        Auth.database("DELETE", null, `eclass/${Creator.Lesson.lesson.selected}`, response => {
            console.log(response);
            Creator.Lesson.lesson.selected = ''
            Creator.Lesson.clearEclassDisplay()
            Creator.Lesson.clearEclassForm()
            Creator.Lesson.getLatestEclasses()
            notify("Leçon supprimée.", "success", false)
        })
    }

}