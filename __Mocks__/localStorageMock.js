const db = {}

const mockLocalStorage = {
    saveMockLocal: (data,key)=> {
        db[key] = data;},
    getMockLocal: (key) => {
        return db[key] ? JSON.parse(db[key]) : []
    }
}

export default mockLocalStorage;