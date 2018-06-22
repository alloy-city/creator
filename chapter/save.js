export default () => {

    let chapter = Creator.Chapter.chapter.getAll()
    console.log(chapter)

    Auth.database("POST", chapter, "chapter/", response => {
        console.log(response)
        notify("Chapitre dûment enregistré.", "success", false)
    })
}