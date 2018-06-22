let chaptersList = document.getElementById("creator-chapter-list")
let chapterContainer = document.getElementById("creator-chapter-full")
let newChapterButton = document.getElementById("new-chapter-button")

export default () => {
    chaptersList.classList = ""
    chapterContainer.classList = "hidden"
    newChapterButton.classList = "btn btn-default"
    Creator.Chapter.getAll()
}