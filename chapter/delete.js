export default () => {
    console.log("DANGER: delete chapter")

    let ok = confirm("Êtes-vous sûr ? Cette action ne pourra pas être annulée.")

    if (ok) {
        Auth.database("POST", { _id: Creator.Chapter.chapter._id }, "chapter/delete", response => {
            console.log(response)
            Creator.Chapter.getAll()
            notify("Chapitre supprimé.", "success", false)
        })
    }
}