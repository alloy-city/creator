import { get } from '../http'

export default () => {
    Creator.Lesson.clearEclassDisplay();
    var search = $("#didactician-eclass-search").val();

    if (search.length > 0) {
        get(`eclass/search/${search}`, array => {
            if (array && array.length > 0) {
                Creator.Lesson.markUpEclassList(array);
            } else {
                /// #if DEBUG
                console.log(array)
                /// #endif
            }
        })
    } else Creator.Lesson.getLatestEclasses();
}