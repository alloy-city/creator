import { lesson } from './index'
import modifyClass from './modify-class'

function updateOrder(event){
    lesson.resources = []

    for (let child of event.to.children){
        lesson.resources.push(child.getAttribute("name"))
    }

    modifyClass()
}

export { updateOrder }