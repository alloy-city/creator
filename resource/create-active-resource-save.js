export default function () {
    Auth.database("POST", Creator.Resource.formatActiveResource(), "resource/", doc => {
        /// #if DEBUG
        console.log(doc)
        /// #endif

        Creator.Resource.resources.resources[doc._id] = doc;
        Creator.Resource.addResourceToDOM(doc, true);
        Creator.Resource.selectResource(doc._id);
    })
}