import createEmptyClass from './create-empty-class'
import formatClassFromForm from './format-class-from-form'
import saveNewClass from './save-new-class'
import addClassToDOM from './add-class-to-DOM'
import markUpResourceInClass from './markup-resource-in-class'
import selectOneResourceInClass from './select-one-resource-in-class'
import markUpEclassList from './markup-eclass-list'
import selectEclass from './select-eclass'
import addOneResourceToEclass from './add-one-resource-to-eclass'
import editClass from './edit-eclass'
import clearEclassForm from './clear-eclass-form'
import clearEclassDisplay from './clear-eclass-display'
import searchEclass from './search-eclass'
import getLatestEclasses from './get-lateste-classes'
import deleteLesson from './delete'
import modifyClass from './modify-class'
import moveResourceUpOnClass from './move-resource-up-on-lesson'
import deleteOneResourceFromEclass from './delete-one-resource-from-lesson'
import moveResourceDownOnClass from './move-resource-down-on-lesson'
import getLesson from './get-lesson'

let lesson = {
    resources: [], // ids
    resourceObject: {}, // each member is a complete resource object
    classObject: {},
    selected: ''
}

function clearLesson(){
    lesson.resources = []
    lesson.resourceObject = {}
    lesson.classObject = {}
    lesson.selected = ''
}

export {
    lesson,
    clearLesson,
    createEmptyClass,
    formatClassFromForm,
    saveNewClass,
    addClassToDOM,
    markUpResourceInClass,
    selectOneResourceInClass,
    markUpEclassList,
    selectEclass,
    addOneResourceToEclass,
    editClass,
    clearEclassForm,
    clearEclassDisplay,
    searchEclass,
    getLatestEclasses,
    deleteLesson,
    modifyClass,
    moveResourceUpOnClass,
    deleteOneResourceFromEclass,
    moveResourceDownOnClass,
    getLesson
}