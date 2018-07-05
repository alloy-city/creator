import { updateOrder } from './updateOrder'

export default function (oneClass) {
    Creator.Lesson.clearEclassDisplay();

    let markup = `
        <div class="">
            <h2>${oneClass.title} <small>${oneClass.subtitle}</small></h2>
            <p>${oneClass.description}</p>
            <div class="well eclass-facilitatorsOnly facilitatorsOnly">
                <span class="facilitator-label label label-default pull-right">pour le facilitateur</span>
                ${Teacher.Lesson.markUpFacilitatorParagraphs(oneClass.facilitatorOnly)}
            </div>
        </div>`

    markup += `<div id="${oneClass._id}" class="eclass">`

    if (oneClass.owns.length == 0) {
        markup += `<p id="didactician-eclass-empty">Sequence vide.</p></div>`
        $('#lessons-resources-lessons-results').append(markup);
    } else {
        Auth.database("POST", { 'arrayOfResourcesIDs': oneClass.owns }, `resource/s/`, resources => {

            for (let i = 0; i < resources.length; i++) {
                markup += Creator.Lesson.markUpResourceInClass(resources[i])
                Creator.Resource.resources.resources[resources[i]._id] = resources[i]
                Creator.Lesson.lesson.resources[i] = resources[i]._id
                Creator.Lesson.lesson.resourceObject[resources[i]._id] = resources[i]
            }
            
            markup += '</div>'
            $('#lessons-resources-lessons-results').append(markup)

            let list = document.getElementById(oneClass._id)
            let sortable = new Sortable(list, {
                onEnd: updateOrder
            })

        })
    }
}