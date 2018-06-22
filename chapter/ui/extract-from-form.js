let titleElement = document.getElementById("creator-chapter-title")
let descriptionElement = document.getElementById("creator-chapter-description")
let priceElement = document.getElementById("creator-chapter-price")
let levelElement = document.getElementById("creator-level-selector")
let themeElement = document.getElementById("creator-theme-selector")
let instructionsElement = document.getElementById("creator-chapter-instructions")
let tagsElement = document.getElementById("creator-chapter-tags")

function lessons() {
    let l = []
    let list = document.getElementById("creator-chapter-lessons").children
    for (let i = 0; i < list.length; i++) {
        l.push(list[i].getAttribute("data-lesson-id"))
    }
    return l
}

export default () => {
    clearNotifications()

    if (titleElement.value.length == 0) {
        notify("Pensez à un titre.", "warning", false)
        return false
    } else if (Creator.Chapter.chapter.lessons.length == 0) {
        notify("Chapitre vide. Rajoutez au moins une leçon.", "warning", false)
        return false
    } else {
        Creator.Chapter.chapter.title = titleElement.value
        Creator.Chapter.chapter.description = descriptionElement.value
        Creator.Chapter.chapter.price = Number(priceElement.value)
        Creator.Chapter.chapter.level = Number(levelElement.options[levelElement.selectedIndex].value)
        Creator.Chapter.chapter.theme = Number(themeElement.options[themeElement.selectedIndex].value)
        Creator.Chapter.chapter.instructions = instructionsElement.value
        Creator.Chapter.chapter.tags = separateTags(tagsElement.value)
        Creator.Chapter.chapter.language = "fr"

        Creator.Chapter.chapter.lessons = lessons()

        return true
    }
}