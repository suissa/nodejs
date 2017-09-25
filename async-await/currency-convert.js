const axios = require('axios')

const getExchangeRate = (from, to) => {
  return axios.get(`http://api.fixer.io/latest?base=${from}`).then((res)=> {
    return res.data.rates[to] 
  })
}

const getCountries = (currencyCode) => {
  return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((res)=> {
    return res.data.map((country)=> country.name)
  })
}

const convertCurrency = (from, to, amount) => {
  let countries
  return getCountries(to).then((tempCountries) => {
    countries = tempCountries
    return getExchangeRate(from, to)
  }).then((rate) => {
    const exchangedAmount = amount * rate
    return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`
  })
}


convertCurrency('CAD', 'USD', 100).then((status) => {
  console.log(status)
})

// getExchangeRate('USD', 'EUR').then((rate)=> {
  //   console.log(rate)
  // })
  
// getCountries('USD').then((countries)=> {
  //   console.log(countries)
// })


const getExchangeRateAlt = async (from, to) => {
  const response = await axios.get(`http://api.fixer.io/latest?base=${from}`)
  return response.data.rates[to] 
}


const getCountriesAlt = async (currencyCode) => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
  return response.data.map((country)=> country.name)
}

const convertCurrencyAlt = async (from, to, amount) => {
  const countries = await getCountriesAlt(to)
  const rate = await getExchangeRateAlt(from, to)
  const exchangedAmount = amount * rate
  console.log('------------------- ASYNC AWAIT  -------------------')
  return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`
}

convertCurrencyAlt('CAD', 'USD', 100).then((status) => {
  console.log(status)
})