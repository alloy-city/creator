import extractFromFrom from './ui/extract-from-form'

export default () => {
    let done = extractFromFrom()
    
    if (done){

        let chapter = Creator.Chapter.chapter.getAll()
        console.log(chapter)

        Auth.database("POST", chapter, "chapter/modify", response => {
            console.log(response)
            Creator.Chapter.getOne(Creator.Chapter.chapter._id)
            notify("Chapitre dûment modifié.", "success", false)
        })

    } else {
        notify("ERROR", "danger", true)
    }
}