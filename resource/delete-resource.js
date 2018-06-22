import { remove } from '../http'

export default function() {
    /// #if DEBUG
    console.log("DANGER: delete resource")
    /// #endif
    
    let ok = confirm("Êtes-vous sûr ? Cette action ne pourra pas être annulée.")
    
    if (ok) {
        remove(`resource/${Creator.Resource.resources.selected}`, response => {

            /// #if DEBUG
            console.log(response)
            /// #endif

            if (response == 403) {
                notify("Vous ne pouvez que modifier des ressources créées par vous même. Pensez à en faire une copie.", "warning", true)
            } else if (response == "Resource decomissioned") {
                $(`#${Creator.Resource.resources.selected}`).remove()
                Creator.Resource.resources.selected = ''
                Creator.Resource.clearResourceForm()
                notify("Ressource effacée.", "warning", false)
            }
        })
    }

}