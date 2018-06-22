let searchField = document.getElementById("creator-chapter-search")
searchField.addEventListener("keyup", (event) => {
    event.preventDefault()
    if (event.keyCode == 13)
        search()
})

export default function search() {
    if (searchField.value.length > 0){
        console.log(searchField.value)

        Auth.database("GET", null, `chapter/search/${searchField.value}`, response => {
            console.log(response)
            Creator.Chapter.Ui.addList(response)
        })
    } else {
        Creator.Chapter.getAll()
    }
}