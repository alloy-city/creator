export default (arr) => {

    var markUp = '<table class="table table-striped"><tr><th>titre</th><th>sous-titre</th></tr>'

    for (var i = 0; i < arr.length; i++) {
        
        var tags = ''
        
        if (arr[i].tags) {
            for (var ii = 0; ii < arr[i].tags.length; ii++) {
                tags += `<span class="label label-default pull-right">${arr[i].tags[ii]}</span>`
            }
        }

        markUp += `
            <tr class="info" onclick="Creator.Lesson.selectEclass('${arr[i]._id}')" role="button">
                <td>${arr[i].title}${tags}</td>
                <td>${arr[i].subtitle}</td>
            </tr>`
    }

    markUp += '</table>'
    $('#lessons-resources-lessons-results').append(markUp)

}