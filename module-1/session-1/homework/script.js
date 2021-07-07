const submitButton = document.querySelector('button')

const formSubmitted = () => {
  const form = document.querySelector('form')
  form.submit()
  alert('helllooo')
}

submitButton.addEventListener('click', formSubmitted)