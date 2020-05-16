import { post } from "../http";

export default () => {
    let chapter = Creator.Chapter.chapter.getAll()

    post(chapter, "chapter/", response => {
        console.log(response)
        notify("Chapitre dûment enregistré.", "success", false)
    })
}
