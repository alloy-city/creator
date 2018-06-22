import createPassiveResource from './create-passive-resource'
import createActiveResource from './create-active-resource'
import addOneListItem from './add-one-list-item'
import deleteOneListItem from './delete-one-list-item'
import clearResourceForm from './clear-resource-form'
import formatPassiveResource from './format-passive-resource'
import formatActiveResource from './format-active-resource'
import createActiveResourceSave from './create-active-resource-save'
import createResourceSave from './create-resource-save'
import modifyActiveResourceSave from './modify-active-resource-save'
import modifyPassiveResourceSave from './modify-passive-resource-save'
import saveOnMongo from './save-on-mongo'
import addArrayOfResources from './add-array-of-resources'
import getLatestResources from './get-latest-resources'
import updateOneResource from './update-one-resource'
import deleteResource from './delete-resource'
import searchResource from './search-resource'
import selectResource from './select-resource'
import selectOneResource from './select-one-resource'
import editResource from './edit-resource'
import addArrayOfResourcesToDOM from './add-array-of-resources-to-DOM'
import addResourceToDOM from './add-resource-to-DOM'
import { defineResourceMarkUp } from './define-resource-markup'
import listenToClickOnResource from './listen-to-click-on-resource'

let resources = {
    resources: [],
    selected: '',
    multipleSelection: []
}

function clearResources(){
    resources.resources = []
    resources.selected = ''
    resources.multipleSelection = []

    document.getElementById("didactician-display-resources").innerHTML = ''
}

export {
    resources,
    clearResources,
    createPassiveResource,
    createActiveResource,
    addOneListItem,
    deleteOneListItem,
    clearResourceForm,
    formatPassiveResource,
    formatActiveResource,
    createActiveResourceSave,
    createResourceSave,
    modifyActiveResourceSave,
    modifyPassiveResourceSave,
    saveOnMongo,
    addArrayOfResources,
    getLatestResources,
    updateOneResource,
    deleteResource,
    searchResource,
    selectResource,
    selectOneResource,
    editResource,
    addArrayOfResourcesToDOM,
    addResourceToDOM,
    defineResourceMarkUp,
    listenToClickOnResource
}