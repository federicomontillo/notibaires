import React, { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import { Header } from './components/Header';
import { ListadoNoticias } from './components/ListadoNoticias';


function App() {

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);
  const [climaactual, guardarClimaActual] = useState({});

  useEffect(() => {
    const consultarAPI = async () => {

      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=f9a641647ee04d5abd8aa7eaf6c3ac95`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      const climaKey = 'b22fbf60cddd63082a14818bdae27e7b';
      const urlClima = `http://api.openweathermap.org/data/2.5/weather?q=CABA,argentina&appid=${climaKey}`;

      const respuestaClima = await fetch(urlClima);
      const clima = await respuestaClima.json();

      guardarNoticias(noticias.articles);
      guardarClimaActual(clima);

    }
    consultarAPI();
  }, [categoria])

  return (
    <>
    <Header 
    titulo='NotiBaires'
    climaactual={climaactual}
    />

    <div className="container">
        <Formulario 
        guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
        noticias={noticias}
        />
    </div>
    </>
  );
}

export default App;
