let tableContainer = document.getElementById("creator-chapter-list")
let chapterContainer = document.getElementById("creator-chapter-full")
let newChapterButton = document.getElementById("new-chapter-button")
let listElement = document.getElementById("creator-chapter-list")
let creationForm = document.getElementById("creator-chapter-create")

export default (chapters) => {
    // console.log(chapters)

    chapterContainer.innerHTML = ""
    tableContainer.innerHTML = ""
    newChapterButton.classList = "btn btn-default"
    listElement.classList = ""
    creationForm.classList = "hidden"
    
    let list = `
    <table class="table table-hover table-condensed">
        <thead>
            <tr>
                <th>titre</th>
                <th>description</th>
                <th>prix</th>
                <th>theme</th>
                <th>niveau</th>
            </tr>
        </thead>
        <tbody>`

    for (let i=0; i<chapters.length; i++){
        let tags = "&nbsp;&nbsp;&nbsp;"
        for (let ii=0; ii<chapters[i].tags.length; ii++){
            tags += `<span class="label label-default">${chapters[i].tags[ii]}</span>&nbsp;`
        }

        list += `
            <tr onclick="Creator.Chapter.getOne('${chapters[i]._id}')" role="button">
                <td>${chapters[i].title} ${tags}</td>
                <td>${chapters[i].description}</td>
                <td>${ numberToBRL(chapters[i].price) }</td>
                <td>${string.material.themes[chapters[i].theme].title}</td>
                <td>${string.material.levels[chapters[i].level]}</td>
            </tr>`
    }

    list += "</tbody></table>"

    tableContainer.appendChild(htmlToElement(list))
}