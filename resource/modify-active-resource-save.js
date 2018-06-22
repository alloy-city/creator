export default function() {
    var doc = Creator.Resource.formatActiveResource();
    Creator.Resource.updateOneResource(doc, Creator.Resource.resources.selected);
}