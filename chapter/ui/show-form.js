let formElement = document.getElementById("creator-chapter-create")
let lessonSearchContainerElement = document.getElementById("creator-lesson-search-container")
let newChapterButton = document.getElementById("new-chapter-button")
let list = document.getElementById("creator-chapter-list")
let fullChapter = document.getElementById("creator-chapter-full")
let confirmButton = document.getElementById("creator-chapter-form-confirm")
let chapterLessonsElement = document.getElementById("creator-chapter-lessons")

export default (to) => {
    if (to == "create" || to == "duplicate"){
        // set creat button
        confirmButton.innerText = "Créer"
        confirmButton.setAttribute("onclick", "Creator.Chapter.create()")
        Sortable.create(chapterLessonsElement)
    } else if (to == "modify") {
        // set modify button
        confirmButton.innerText = "Modifier"
        confirmButton.setAttribute("onclick", "Creator.Chapter.modify()")
        Sortable.create(chapterLessonsElement)
    }
    
    list.classList = "hidden"
    fullChapter.classList = "hidden"
    formElement.classList = ""
    lessonSearchContainerElement.classList = ""
    newChapterButton.classList = "hidden"
}