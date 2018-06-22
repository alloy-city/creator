export default (lessonId) => {
    if (Creator.Chapter.chapter.lessons.indexOf(lessonId) < 0)
        Creator.Chapter.chapter.lessons.push(lessonId)
}