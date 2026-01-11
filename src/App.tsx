import style from './App.module.css'
import Form from './components/Form/Form'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hooks/useWeather'

function App() {
  const { weather, fetchWeather } = useWeather()

  return (
    <>
      <h1 className={style.title}>Buscar Clima</h1>

      <div className={style.container}>
        <Form 
          fetchWeather={fetchWeather}
        />
        
        <WeatherDetail />
      </div>
    </>
  )
}

export default App
