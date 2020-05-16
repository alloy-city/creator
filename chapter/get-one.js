import { get } from "../http";

export default (chapterId) => {
    /// #if DEBUG
    // console.log(`Get chapter ${chapterId}.`)
    /// #endif
    
    get(`chapter/${chapterId}`, ch => {
        /// #if DEBUG
        console.log(ch)
        /// #endif

        Creator.Chapter.chapter.setAll(
            ch._id,
            ch.author,
            ch.title,
            ch.description,
            ch.price,
            ch.level,
            ch.theme,
            ch.live,
            ch.instructions,
            ch.tags,
            ch.lessons
        )
        Creator.Chapter.Ui.addChapter(ch)
    })
}
