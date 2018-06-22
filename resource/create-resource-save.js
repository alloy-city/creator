export default function() {
    Auth.database("POST", Creator.Resource.formatPassiveResource(), "resource/", doc => {
        // doc._id = _id;
        Creator.Resource.resources.resources[doc._id] = doc;
        Creator.Resource.addResourceToDOM(doc, true);
        Creator.Resource.selectResource(doc._id);
    })
}