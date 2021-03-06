import { showForm } from "."
import addLessons from './add-lessons'

let titleElement = document.getElementById("creator-chapter-title")
let descriptionElement = document.getElementById("creator-chapter-description")
let priceElement = document.getElementById("creator-chapter-price")
let levelElement = document.getElementById("creator-level-selector")
let themeElement = document.getElementById("creator-theme-selector")
let liveElement = document.getElementById("creator-chapter-live-boolean")
let instructionsElement = document.getElementById("creator-chapter-instructions")
let tagsElement = document.getElementById("creator-chapter-tags")

export default () => {

    let chapter = Creator.Chapter.chapter.getAll()
    console.log(chapter)

    titleElement.value = chapter.title
    descriptionElement.value = chapter.description
    priceElement.value = chapter.price
    levelElement.value = chapter.level
    themeElement.value = chapter.theme
    liveElement.checked = chapter.live
    instructionsElement = chapter.instructions
    
    let tags = ""
    if (chapter.tags[0]) tags = chapter.tags[0]
    for (let i=1; i<chapter.tags.length; i++){
        tags += `, ${chapter.tags[i]}`
    }
    tagsElement.value = tags

    addLessons(chapter.lessons)
    showForm("modify")
}