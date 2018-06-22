export default (chapterId) => {
    console.log(`Get chapter ${chapterId}.`)

    Auth.database("GET", null, `chapter/${chapterId}`, ch => {
        console.log(ch)
        Creator.Chapter.chapter.setAll(
            ch._id,
            ch.author,
            ch.title,
            ch.description,
            ch.price,
            ch.level,
            ch.theme,
            ch.instructions,
            ch.tags,
            ch.lessons
        )
        Creator.Chapter.Ui.addChapter(ch)
    })
}