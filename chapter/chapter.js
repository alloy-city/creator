class Chapter {
    constructor (){
        this._id
        this.language
        this.title
        this.description
        this.price
        this.level
        this.theme
        this.instructions
        this.tags = []
        this.lessons = []
    }

    // getters
    getAll (){
        return {
            _id: this.__id,
            language: this._language,
            title: this._title,
            description: this._description,
            price: this._price,
            level: this._level,
            theme: this._theme,
            instructions: this._instructions,
            tags: this._tags,
            lessons: this._lessons
        }
    }

    get _id(){
        return this.__id
    }
    
    get language(){
        return this._language
    }

    get title(){
        return this._title
    }

    get description(){
        return this._description
    }

    get price(){
        return this._price
    }

    get level(){
        return this._level
    }

    get theme(){
        return this._theme
    }

    get instructions(){
        return this._instructions
    }

    get tags(){
        return this._tags
    }

    get lessons(){
        return this._lessons
    }

    // setters
    setAll(_id, language, title, description, price, level, theme, instructions, tags, lessons){
        this.__id = _id
        this._language = language
        this._title = title
        this._description = description
        this._price = price
        this._level = level
        this._theme = theme
        this._instructions = instructions
        this._tags = tags
        this._lessons = lessons
    }

    set _id(_id) {
        this.__id = _id
    }

    set language(language) {
        this._language = language
    }

    set title(title) {
        this._title = title
    }

    set description(description) {
        this._description = description
    }

    set price(price) {
        this._price = price
    }

    set level(level) {
        this._level = level
    }

    set theme(theme) {
        this._theme = theme
    }

    set instructions(instructions) {
        this._instructions = instructions
    }

    set tags(tags) {
        this._tags = tags
    }

    set lessons(lessons) {
        this._lessons = lessons
    }

}

export default Chapter