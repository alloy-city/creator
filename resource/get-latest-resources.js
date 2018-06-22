export default function() {
    Creator.Resource.clearResources()

    Auth.database("GET", null, "/resource/", resources => {
        /// #if DEBUG
        console.log(resources)
        /// #endif

        Creator.Resource.addArrayOfResources(resources)
        Creator.Resource.addArrayOfResourcesToDOM(resources)
    })
}