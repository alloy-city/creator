import Chapter from './chapter'
import * as Ui from './ui'
import * as Lessons from './lessons'
import create from './create'
import search from './search'
import save from './save'
import getOne from './get-one'
import getAll from './get-all'
import modify from './modify'
import deleteChapter from './delete'

// console.log("Chapters!")

let chapter = new Chapter

export {
    chapter,
    Ui,
    Lessons,
    search,
    create,
    save,
    getOne,
    getAll,
    modify,
    deleteChapter
}