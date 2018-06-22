let lessonSearchElement = document.getElementById("creator-lesson-search")

lessonSearchElement.addEventListener("keyup", (event) => {
    event.preventDefault()
    if (event.keyCode == 13)
        search()
})

export default function search ()  {
    Creator.Chapter.Lessons.Ui.clearResults();
    let search = lessonSearchElement.value

    if (search.length > 0) {
        Auth.database("GET", null, `eclass/search/${search}`, array => {
            if (array.length > 0) {
                Creator.Chapter.Lessons.Ui.addList(array);
            }
        })
    } else Creator.Chapter.Lessons.getLatest();

}