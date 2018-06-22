let chapterLessonsContainer = document.getElementById("creator-chapter-lessons")

export default (lessons) => {
    chapterLessonsContainer.innerHTML = ""
    
    console.log(lessons)

    for (let i=0; i< lessons.length; i++){
        let markup = `<tr class="info" onclick="Creator.Chapter.Lessons.Ui.remove(this)" data-lesson-id="${lessons[i]._id}" role="button">
            <td>${lessons[i].title}</td>
            <td>${lessons[i].description || lessons[i].subtitle}</td>
        </tr>`
        chapterLessonsContainer.appendChild(htmlToElement(markup))
    }

}