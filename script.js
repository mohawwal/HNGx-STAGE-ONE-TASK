const slackUserName = document.querySelector('[data-testId="slackUserName"]')
const currentDayOfTheWeek = document.querySelector('[data-testId="currentDayOfTheWeek"]')
const myTrack = document.querySelector('[data-testId="myTrack"]')
const utcTime = document.querySelector('[data-testId="currentUTCTime"]')

const daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


slackUserName.innerText = "Awwal"
myTrack.innerText = "Front-End"

const currentDay = new Date()
const currentDayOfWeek = currentDay.getDay()
const utcTrack = currentDay.getTime()
const currentDays= daysOfWeek[currentDayOfWeek]
console.log(utcTrack)

currentDayOfTheWeek.innerHTML = currentDays
utcTime.innerHTML = utcTrack
