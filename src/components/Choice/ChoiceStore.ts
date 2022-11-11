import { makeAutoObservable } from "mobx"

class ChoiceStore {
    tool = '';

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
    }

    setTool(value: string) {
        this.tool = value
    }

}

export default new ChoiceStore();
