const employee = {
  name: "Rahul",
  address: {
    city: "Hyderabad",
    state: "Telangana"
  }
};

const {
  address: { city, state }
} = employee;

console.log(city);
console.log(state);