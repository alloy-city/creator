export default (id) => {
    var url = `${apiDomain}/api/eclass/${id}`;
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "data": {},
        "headers": {
            "Authorization": `Bearer ${localStorage.token}`
        }
    }

    $.ajax(settings).done((lesson) => {
        return lesson
    })
}