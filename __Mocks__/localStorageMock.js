const db = {};

const mockLocalStorage = {
  saveMockLocal: (data, key) => {
    db[key] = data;
  },
  getMockLocal: (key) => (db[key] ? db[key] : []),
};

export default mockLocalStorage;