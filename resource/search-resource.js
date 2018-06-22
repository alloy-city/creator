import { get } from '../http'

export default function() {
    Creator.Resource.clearResources();
    let search = $("#didactician-resource-search").val()

    if (search && search.length > 0){
        get(`resource/search/${search}`, response => {
            if (response == 204) {
                notify("Aucune ressource trouvée.", "warning", false)
            } else if (response.length > 0) {
                Creator.Resource.addArrayOfResources(response);
                Creator.Resource.addArrayOfResourcesToDOM(response);
            }
        })
    }
}