export default () => {
    Auth.database("GET", null, "chapter/all/", response => {
        // console.log(response)
        Creator.Chapter.Ui.addList(response)
    })
}
