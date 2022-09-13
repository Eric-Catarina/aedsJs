class Queue {
    constructor() {
        this.items = [];
    }
    PushStart = (...numbers) => {
        this.items.unshift(...numbers)
    }
    PopStart = () => {
        let poppedItem = this.items[0]
        this.items.shift()
        return poppedItem
    }

    Peek = () => {
        return this.items[0]
    }

}




class Deque extends Queue {
    constructor(items) {
        super(items, items)
    }
    PushEnd = (...numbers) => {
        this.items.push(...numbers)
    }

    PopEnd = () => {
        let poppedItem = this.items[this.items.length - 1]
        this.items.pop()
        return poppedItem
    }

    Seek = () => {
        return this.items[this.items.length - 1]
    }

    Size = () => {
        return this.items.length
    }

}

const names = ['Eric', 'Nicolas', 'Michelle', 'Heloisa', 'Carlos']

HotPotato = (people, potatoTimer) => {
    const myDeque = new Deque
    const eliminatedPeopleList = [];

    for (let i = 0; i < people.length; i++){
        myDeque.PushStart(people[i])
    }

    while(myDeque.items.length > 1){
        for (let i = 0; i < potatoTimer; i++){
            myDeque.PushStart(myDeque.PopStart())
        }
        eliminatedPeopleList.push(myDeque.PopStart())
    }

    return {
        eliminated : eliminatedPeopleList,
        winner : myDeque.PopStart()
    }

}

console.log(HotPotato(names,6))

