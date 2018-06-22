export default () => {

    Auth.database("GET", null, `eclass/`, array => {
        Creator.Lesson.clearLesson()
        Creator.Lesson.clearEclassDisplay()
        Creator.Lesson.clearEclassForm()
        Creator.Lesson.markUpEclassList(array)
    })

}