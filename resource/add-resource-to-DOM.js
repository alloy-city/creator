export default function (oneResource, onTop) {
    /// #if DEBUG
    // console.log(Creator.Resource.defineResourceMarkUp(oneResource));
    /// #endif

    if (onTop) $('#didactician-display-resources').prepend(Creator.Resource.defineResourceMarkUp(oneResource));
    else $('#didactician-display-resources').append(Creator.Resource.defineResourceMarkUp(oneResource));
    Creator.Resource.listenToClickOnResource(oneResource._id);
}