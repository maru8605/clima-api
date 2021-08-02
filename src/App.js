import Header from "./component/Header";
import Form from "./component/Form";
function App() {
  return (
    <>
      <Header
        titulo='Clima React App'
      />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form/>
            </div>
            <div className='col m6 s12'>
              2
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
