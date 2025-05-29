function validateForm() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  if (!name || age <= 0) {
    alert('Please enter valid details');
    return false;
  }
  alert('Form submitted!');
  return true;
}