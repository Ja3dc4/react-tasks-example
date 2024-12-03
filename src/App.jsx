
import {useEffect, useState} from 'react'

import TaskList from './components/TaskList'   // imp + TAB
import TaskForm from './components/TaskForm'

// ****** Instalando y Configurando TailWind CSS (framework de CSS) ******

// npm install -D tailwindcss postcss autoprefixer    -> Instalar TailWind CSS.
// npx tailwindcss init -p                            -> Inicializar TailWind CSS. Esto crea dos archivos: 
//                                                    "talwind.config.cjs" y "postcssconfig.cjs".

// En "talwind.config.cjs", reemplazar content por:
// content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"]

// Ahora en index.css, agregar esto:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// ** Debemos asegurarnos de que en main.jsx, debe estar importado el index.css.
// ** Podemos instalar una extension de VS Code para autocompletar codigo de TailWind, para ello 
// buscamos tailwindcss intellisense y lo instalamos.

// npm run dev  -> Listo, corremos y tendremos TailWind CSS configurado.


// ****** Desplegar Aplicacion React en GitHub ******

// npm run build  -> Primero compilamos nuestro proyecto.

// Entramos a GitHub y creamos un repositorio, le otorgamos algun nombre: "react-tasks-example". 

// cd proyecto-react
// git init       -> Inicializamos un repositorio de Git en nuestro proyecto de react.
// git add .
// git commit -m "first commit"
// git remote add origin https://github.com/Ja3dc4/react-tasks-example.git
// git push origin master   -> Ejecutamos esto y listo, nuestro proyecto react estara subido al repo de GitHub que hemos creado.

// gh-pages npm
// npm install gh-pages --save-dev    -> Instalamos gh-pages y una vez instalado, entramos a package.json y en la seccion de 
//                                    "scripts", añadimos los sgte:
// "deploy": "gh-pages -d dist"       -> Guardamos y ahora vamos a "vite.config.js" y añadimos la seccion "base" con lo sgte:
// base: '/react-tasks-example/'      -> Le indicamos el nombre de nuestro repositorio de GitHub. Ahora creamos el archivo 
//                                    "deploy.sh" y le agregamos todo el sgte codigo:

// npm run build
// npm run deploy   -> Publicar proyecto.

function App(){
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  )
}

export default App
