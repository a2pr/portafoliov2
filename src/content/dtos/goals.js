export default class Goals {
    constructor(name, hasChild, completed, items) {
        this._name = name;
        this._hasChild = hasChild;
        this._completed = completed;
        this._items = items;
    }
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get hasChild() {
        return this._hasChild;
    }

    set hasChild(value) {
        this._hasChild = value;
    }

    get completed() {
        return this._completed;
    }

    set completed(value) {
        this._completed = value;
    }

    get items() {
        return this._items;
    }

    set items(value) {
        this._items = value;
    }
}
