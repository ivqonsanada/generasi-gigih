const datamentah = document.querySelectorAll('td')

let ages = []

datamentah.forEach((element, index) => {
  if (index % 2 !== 0) ages.push(Number(element.innerHTML))
});

const avgButton = document.querySelector('button')
avgButton.addEventListener('click', () => {
  const averageAge = (ages) => {
    const totalAge = ages.reduce((accu, age) => {
      return accu + age
    })
    return totalAge / ages.length
  }

  const result = document.querySelector('#result')
  result.innerHTML = averageAge(ages)
  console.log(averageAge(ages))
})
