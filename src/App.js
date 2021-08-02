import { useState, useEffect } from "react";
import Header from "./component/Header";
import Form from "./component/Form";
import Weather from "./component/Weather";
import Error from "./component/Error";


function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad:'',
    pais:''
  })

  const [consulta, setConsulta] = useState(false)

  const [result, setResult] = useState({})

  const [error, setError] = useState(false)

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

      // detecta resultados correctos en la consulta
        if(result.cod === '404'){
          setError(true)
        }else{
          setError(false)
        }

      }
    }
    consultarApi()
  // eslint-disable-next-line
  },[consulta])


  let component;
  if(error){
    component = <Error mensaje='No hay resultados'/>
  }else{
    component = <Weather result={result}/>
  }

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
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
