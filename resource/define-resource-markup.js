function defineResourceMarkUp(resource) {
    if (resource) {

        let tags = ''
        if (resource.tags) {
            for (let tag of resource.tags) {
                tags += `<span class="label label-default">${tag}</span>`
            }
        }

        let markUp = `
            <div id="${resource._id}" class="resource">
                <span class="glyphicon glyphicon-triangle-left" aria-hidden="true" onclick="Creator.Lesson.addOneResourceToEclass('${resource._id}')"></span>`

        let items = ''

        if (resource.type == "html") {
            markUp += `<span class="label label-info">${resource.type}</span>${tags}${resource.resource}`
        } else if (resource.type == "text") {
            markUp += `<span class="label label-info">${resource.type}</span>${tags}<p>${resource.resource}</p>`
        } else if (resource.type == "image") {
            markUp += `<span class="label label-info">${resource.type}</span>${tags}<img class="img-responsive" src="images/slides/${resource.resource}" />`
        } else if (resource.type == "audio") {
            markUp += `
                <span class="label label-info">${resource.type}</span>
                ${tags}
                <p>${resource.resource}</p>
                <audio style="width: 100%;" controls>
                    <source src="media/${resource.resource}" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>`

        } else if (resource.type == "video") {
            markUp += `
                <span class="label label-info">${resource.type}</span>
                ${tags}
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe src="https://www.youtube.com/embed/${resource.resource}"></iframe>
                </div>`

        } else if (resource.type == "open") {
            markUp += `
                <span class="label label-danger">${resource.type}</span>
                ${tags}
                <p>${resource.resource.question}</p>`

        } else if (resource.type == "choice") {
            for (let item of resource.resource.items) {
                items += `<li>${item}</li>`
            }
            markUp += `
                <span class="label label-primary">${resource.type}</span>
                ${tags}
                <p>${resource.resource.question}</p>
                <ol>${items}</ol>`

        } else if (resource.type == "order") {
            for (let item of resource.resource.items) {
                items += `<li>${item}</li>`
            }
            markUp += `
                <span class="label label-success">${resource.type}</span>
                ${tags}
                <p>${resource.resource.question}</p>
                <ol>${items}</ol>`

        } else if (resource.type == "gaps") {
            items += '<p>'
            for (let i = 0; i < resource.resource.items.length; i++) {
                if (isEven(i)) items += `${resource.resource.items[i]} `
                else items += `<mark><b class="text-danger">${resource.resource.items[i]}</b></mark> `
            }
            items += '</p>'
            markUp += `<span class="label label-warning">${resource.type}</span>${tags}<p>${resource.resource.question}</p>${items}`
        }

        markUp += `
            <div class="facilitatorsOnly well">
                <span class="label label-default pull-right">pour le facilitateur</span>
                ${Teacher.Lesson.markUpFacilitatorParagraphs(resource.facilitatorOnly)}
            </div></div>`
        
        return markUp
    } else console.log("Define markup called with *undefined*. Try with a full Resource object.");
}

export { defineResourceMarkUp }