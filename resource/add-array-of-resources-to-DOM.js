export default function(arr) {
    /// #if DEBUG
    console.log(arr)
    /// #endif

    for (var i = 0; i < arr.length; i++) {
        /// #if DEBUG
        console.log(arr[i])
        /// #endif

        Creator.Resource.addResourceToDOM(arr[i], false);
    };
    Creator.Resource.selectResource(arr[0]._id);
}