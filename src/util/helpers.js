import axios from 'axios'

export async function fetchCryptocurrencyData(dataUrl) {
  return await axios.get(dataUrl)
}

export function numberParts(fullNumber) {
  const int = Math.floor(fullNumber).toString()
  const dec = fullNumber - Math.floor(fullNumber)
  return [int, dec.toFixed(2).substring(dec.toString().indexOf('.'))]
}

export function secondsToMilliseconds(timestamp) {
  return new Date(timestamp * 1000)
}

export function timestampToISO(timestamp) {
  return secondsToMilliseconds(timestamp).toISOString()
}

export function formatTime(d, addMins) {
  if (addMins) {
    d = new Date(d.getTime() + addMins * 60000)
  }
  const hours = d.getHours()
  const minutes = '0' + d.getMinutes()
  const seconds = '0' + d.getSeconds()

  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
}

export function formatNumber(num) {
  return `${parseInt(num, 10)
    .toFixed(0)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
}
