import style from './App.module.css'
import Alert from './components/Alert/Alert'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hooks/useWeather'

function App() {
  const { weather, loading, notFount, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={style.title}>Buscar Clima</h1>

      <div className={style.container}>
        <Form 
          fetchWeather={fetchWeather}
        />
        
        {loading && <Spinner />}
        {hasWeatherData &&
          <WeatherDetail 
            weather={weather}
          />
        }
        {notFount && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  )
}

export default App
