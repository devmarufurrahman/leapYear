let form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let year = document.querySelector("#year").value;
  let output = document.getElementById('output')

  if (year % 4 == 0) {
    output.innerHTML = `${year} is Leap Year ☺😊`
    console.log('leap year');
  } else {

    output.innerHTML = `${year} is not Leap Year 😣😌`
    console.log('is not leap year');
  }
});
