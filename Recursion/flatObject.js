function flattenObject(obj, parentKey = '', res = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], newKey, res);
    } else {
      res[newKey] = obj[key];
    }
  }
  return res;
}

const obj = {
  name: "Stewin",
  address: {
    city: "Thrissur",
    country: {
      code: "IN",
      name: "India",
      state:{
          place:"Kochi"
      }
    }
  }
};

console.log(flattenObject(obj));
