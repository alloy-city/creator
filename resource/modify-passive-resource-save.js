export default function() {
    var doc = Creator.Resource.formatPassiveResource();
    Creator.Resource.updateOneResource(doc, Creator.Resource.resources.selected);
}