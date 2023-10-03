import Lottie from 'lottie-react'
import diaChuva from '../assets/icones/chuvaDia.json'
import noiteChuva from '../assets/icones/chuvaNoite.json'
import noiteNum from '../assets/icones/noiteNum.json'
import noiteBoa from '../assets/icones/noiteBoa.json'
import diaNum from '../assets/icones/diaNum.json'
import diaBom from '../assets/icones/diaBom.json'

function IconeTemp(props) {
  const { precipitationSumDay, sunset, sunrise, cloudcover } = props
  const hoje = new Date()
  const hours = hoje.getHours().toString().padStart(2, '0')
  const horaSunrise = sunrise.split(':')[0]
  const horaSunset = sunset.split(':')[0]
  const cloudcoverHour = cloudcover[hours]

  let animationData = null

  if (cloudcoverHour> 40 && precipitationSumDay >= 5 && hours >= horaSunset && hours > horaSunrise) {
    animationData = noiteChuva
  } else if (cloudcoverHour> 40 && precipitationSumDay < 5 && hours >= horaSunset && hours > horaSunrise) {
    animationData = noiteNum
  } else if (cloudcoverHour< 40 && precipitationSumDay <= 3 && hours >= horaSunset && hours > horaSunrise) {
    animationData = noiteBoa
  } else if (cloudcoverHour> 40 && precipitationSumDay >= 5 && hours < horaSunset && hours >= horaSunrise) {
    animationData = diaChuva
  } else if (cloudcoverHour> 40 && precipitationSumDay < 5 && hours < horaSunset && hours >= horaSunrise) {
    animationData = diaNum
  } else {
    animationData = diaBom
  }

  return <Lottie className='divIconeTemp' animationData={animationData} />
}

export default IconeTemp