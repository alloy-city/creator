import extractFromForm from './ui/extract-from-form'

export default () => {
    let done = extractFromForm()
    if (done){
        Creator.Chapter.save()
    }
}