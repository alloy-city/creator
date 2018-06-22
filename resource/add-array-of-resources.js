export default function(array) {
    for (var i = 0; i < array.length; i++) {
        Creator.Resource.resources.resources[array[i]._id] = array[i];
    }
}