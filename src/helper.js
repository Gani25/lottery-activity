// In js as they are normal javascript function which don't have any concept of component,state
function generateTicket(n) {
  let arr = new Array(n);

  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }

  return arr;
}

function sumTicket(arr) {
  return arr.reduce((accumulator, curElement) => accumulator + curElement, 0);
}

export { generateTicket, sumTicket };
