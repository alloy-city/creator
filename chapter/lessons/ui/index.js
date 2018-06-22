let lessonSearchResults = document.getElementById("creator-search-lessons-results")
let chapterLessonsElement = document.getElementById("creator-chapter-lessons")
let searchContainer = document.getElementById("creator-lesson-search-container")

function clearResults() {
    lessonSearchResults.innerHTML = ""
}

function addList(arr) {
    let markUp = '<table class="table table-condensed table-hover"><tr><th>titre</th><th>sous-titre</th></tr>'
    for (let i = 0; i < arr.length; i++) {
        
        let tags = ''
        if (arr[i].tags) {
            for (let ii = 0; ii < arr[i].tags.length; ii++) {
                tags = tags + '<span class="label label-default pull-right">' + arr[i].tags[ii] + '</span>';
            }
        }

        markUp += `
        <tr class="info" onclick="Creator.Chapter.Lessons.Ui.add(this)" data-lesson-id="${arr[i]._id}" role="button">
            <td>${arr[i].title}${tags}</td>
            <td>${arr[i].subtitle}</td>
        </tr>`
    }
    markUp += '</table>';

    $('#creator-search-lessons-results').append(markUp);
    searchContainer.scrollIntoView(true, { behavior: "smooth" })
}

function add(listItem) {
    let itemId = listItem.getAttribute("data-lesson-id")
    if (Creator.Chapter.chapter.lessons.indexOf(itemId) < 0){
        Creator.Chapter.Lessons.add(itemId)
    
        chapterLessonsElement.appendChild(listItem)
        listItem.setAttribute("onclick", "Creator.Chapter.Lessons.Ui.remove(this)")
        Sortable.create(chapterLessonsElement)
    } else {
        notify("Ce chapitre contient déjà cette leçon.", "warning", false)
    }
}

function remove(listItem) {
    let listId = listItem.getAttribute("data-lesson-id")
    Creator.Chapter.Lessons.remove(listId)
    listItem.remove()
    Sortable.create(chapterLessonsElement)
}

export {
    clearResults,
    addList,
    add,
    remove
}