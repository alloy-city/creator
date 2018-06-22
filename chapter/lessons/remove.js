export default (listId) => {
    let index = Creator.Chapter.chapter.lessons.indexOf(listId)
    
    for (let i = 0; i < Creator.Chapter.chapter.lessons.length; i++){
        if (Creator.Chapter.chapter.lessons[i]._id == listId)
            index = i
            break
    }

    if (index > -1)
        Creator.Chapter.chapter.lessons.splice(index, 1);
}