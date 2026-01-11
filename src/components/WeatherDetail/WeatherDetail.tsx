import type { Weather } from "../../hooks/useWeather"

type WeatherDetailProps = {
  weather: Weather
}

function WeatherDetail({weather} : WeatherDetailProps) {
  return (
    <div>WeatherDetail</div>
  )
}

export default WeatherDetail