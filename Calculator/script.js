function val(result) {
  form.display.value = form.display.value + result;
}

function calculator() {
  if (form.display.value == '') {
    alert('Please enter numbers');
  } else {
    form.display.value = eval(form.display.value);
  }
}
