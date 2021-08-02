import { useState, useEffect } from "react";
import Header from "./component/Header";
import Form from "./component/Form";
import Weather from "./component/Weather";


function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad:'',
    pais:''
  })

  const [consulta, setConsulta] = useState(false)

  const [result, setResult] = useState({})

  const {ciudad, pais} = busqueda

  useEffect(() => {
    const consultarApi = async() =>{

      if(consulta){
        const appId = '286c68fd3268237c804b4570bb43bc24';

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResult(resultado)
        setConsulta(false)
      }
    }
    consultarApi()
  },[consulta])

  return (
    <>
      <Header
        titulo='Clima React App'
      />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                setConsulta={setConsulta}
              />
            </div>
            <div className='col m6 s12'>
              <Weather
                result={result}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
