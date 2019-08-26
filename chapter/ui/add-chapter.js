let chaptersList = document.getElementById("creator-chapter-list")
let chapterContainer = document.getElementById("creator-chapter-full")
let newChapterButton = document.getElementById("new-chapter-button")
let createChapterForm = document.getElementById("creator-chapter-create")

export default (chapter) => {
    console.log(chapter)

    chapterContainer.innerHTML = ""
    chapterContainer.classList = ""
    createChapterForm.classList = "hidden"
    chaptersList.innerHTML = ""
    newChapterButton.classList = "hidden"

    let modifyButton = ""
    let deleteButton = ""
    if (chapter.author._id == Auth.userData._id){
        modifyButton = `
            <button class="btn btn-default" onclick="Creator.Chapter.Ui.modify()">
                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>&nbsp;Modifier
            </button>`
        deleteButton = `
            <button class="btn btn-danger" onclick="Creator.Chapter.deleteChapter()">
                <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>&nbsp;Supprimer
            </button>`
    }

    let lessonsList = `
    <table class="table table-condensed">
        <thead>
            <tr>
                <th>titre</th>
                <th>sous-titre</th>
            </tr>
        </thead>
        <tbody>`

    for (let i = 0; i < chapter.lessons.length; i++){
        let tags = "&nbsp;&nbsp;&nbsp;"
        if (chapter.lessons[i].tags) {
            for (let ii = 0; ii < chapter.lessons[i].tags.length; ii++) {
                tags += `<span class="label label-default">${chapter.lessons[i].tags[ii]}</span>&nbsp;`
            }
        }

        lessonsList += `
        <tr>
            <td>${chapter.lessons[i].title} ${tags}</td>
            <td>${chapter.lessons[i].subtitle}</td>
        </tr>`
    }

    lessonsList += "</tbody></table>"

    let author = ""
    if (chapter.author.nickname && chapter.author.nickname.length > 0) author = chapter.author.nickname
    else if (chapter.author.name && chapter.author.name.length > 0) author = chapter.author.name
    else author = chapter.author.mainEmail

    let tags = ""
    for (let i = 0; i<chapter.tags.length; i++){
        tags += `<span class="label label-default">${chapter.tags[i]}</span>&nbsp;`
    }

    let chapterFormated = `
        <div class="row row-eq-height">
            <div class="col-xs-6">
                <div class="row">
                    <div class="col-xs-2 verticleAlignOneLineNextToPanel">
                        <p class="text-right"><b>Titre</b></p>
                    </div>
                    <div class="col-xs-10">
                        <div class="well well-sm">
                            <p>${chapter.title}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-2 verticleAlignOneLineNextToPanel">
                        <p class="text-right"><b>Description</b></p>
                    </div>
                    <div class="col-xs-10">
                        <div class="well well-sm">
                            <p>${chapter.description}&nbsp;</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-2 verticleAlignOneLineNextToPanel">
                        <p class="text-right"><b>Auteur</b></p>
                    </div>
                    <div class="col-xs-10">
                        <div class="well well-sm">
                            <p>${author}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-2 verticleAlignOneLineNextToPanel">
                        <p class="text-right"><b>Prix</b></p>
                    </div>
                    <div class="col-xs-10">
                        <div class="well well-sm">
                            <p>${numberToBRL(chapter.price)}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-2 verticleAlignOneLineNextToPanel">
                        <p class="text-right"><b>Thème</b></p>
                    </div>
                    <div class="col-xs-10">
                        <div class="well well-sm">
                            <p>${string.material.themes[chapter.theme].title}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-2 verticleAlignOneLineNextToPanel">
                        <p class="text-right"><b>Niveau</b></p>
                    </div>
                    <div class="col-xs-10">
                        <div class="well well-sm">
                            <p>${string.material.levels[chapter.level]}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-2 verticleAlignOneLineNextToPanel">
                        <p class="text-right"><b>Date de création</b></p>
                    </div>
                    <div class="col-xs-10">
                        <div class="well well-sm">
                            <p>${chapter.date}</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-2">
                        <p class="text-right"><b>Tags</b></p>
                    </div>
                    <div class="col-xs-10">
                        ${tags}
                    </div>
                </div>
            </div>
            <div class="col-xs-6">
                <button class="btn btn-default pull-right clear" onclick="Creator.Chapter.Ui.closeChapter()">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;Fermer
                </button>
                <div class="lesson-list clear">
                    <h3>Leçons</h3>
                    <br>
                    ${lessonsList}
                </div>
                <div class="bottom-left">
                    ${modifyButton}
                    <button id="new-chapter-button" class="btn btn-default" onclick="Creator.Chapter.Ui.duplicate()">
                        <span class="glyphicon glyphicon-duplicate" aria-hidden="true"></span>&nbsp;Dupliquer
                    </button>
                </div>
                <div class="bottom-right">
                    ${deleteButton}
                </div>
            </div>
        </div>
    `

    chapterContainer.appendChild(htmlToElement(chapterFormated))
}