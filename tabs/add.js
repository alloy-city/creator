export default function () {
    let tabsMenuMarkup = `
        <li role="presentation" class="">
            <a href="#chapters" aria-controls="didactician" role="tab" data-toggle="tab">Chapitres</a>
        </li>
        <li role="presentation" class="">
            <a href="#lessons-and-resources" aria-controls="didactician" role="tab" data-toggle="tab">Leçons/Ressources</a>
        </li>`

    $(".nav-tabs").append(tabsMenuMarkup)
}