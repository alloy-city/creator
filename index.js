import addTabs from './tabs/add'
import * as Resource from './resource'
import * as Lesson from './lesson'
import * as Chapter from './chapter'

addTabs()

window.Creator = {
    Resource,
    Lesson,
    Chapter
}

Creator.Chapter.getAll()