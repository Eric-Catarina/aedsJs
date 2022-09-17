ToString = (item) => {
    if (item === null){
        return ''
    }
    else if (item === undefined){
        return 'UNDEFINED'
    }
    else if (typeof item === 'string' || item instanceof String){
        return '$item'
    }
    return item.toString();
}

class ValuePair {
    constructor (key, value){
        this.key = key
        this.value = value
    }
}
class HashTable {
    constructor(){
        this.table = {}
    }
    loseloseHash = (key) =>{
        if(typeof key === 'number'){
            return key
        }
        const tableKey = ToString(key)
        let hash = 0
        for (let i =0; i < tableKey.length; i++){
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
    }
    hashCode= (key) => {
        return this.loseloseHash(key)
    }

    put = (key,value) => {
        if (key != null & value != null){
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key, value)
        }
    }

    get = (key) => {
        const valuePair = this.table[this.hashCode(key)]
        return valuePair == null ? undefined : valuePair.value
    }

    remove = (key) => {
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]
        if (valuePair != null){
            delete this.table[hash]
        }
    }


}

myHash = new HashTable
myHash.put("nome", "eric")

myHash.remove("nome")

console.log(myHash.get("eric"))

