var btn = document.getElementById("btn");
btn.addEventListener("click", fizBuzz);

console.log(document.getElementById("phn").value);

function fizBuzz() {
  let phn = document.getElementById("phn").value;
  console.log(phn);
  let sum = 0;
  let str = "";
  phn.split("").forEach((el) => {
    sum += parseInt(el);
  });

  for (let i = 1; i <= sum; i++) {
    if (i % 4 === 0) {
      str += " Fizz ";
    } else if (i % 5 === 0) {
      str += " Buzz ";
    } else {
      str += ` ${i} `;
    }
  }

  console.log(phn, str, sum);

  let output = document.getElementById("output");
  output.value = str;
}
