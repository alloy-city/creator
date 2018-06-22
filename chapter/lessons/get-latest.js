export default () => {

    Auth.database("GET", null, "eclass/", array => {
        Creator.Chapter.Lessons.Ui.addList(array);
    })

}