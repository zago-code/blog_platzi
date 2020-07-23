import React from 'react'

const App = () => {
  return(
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Correo
            </th>
            <th>
              Enlace
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Gabriel
            </td>
            <td>
              gabriel@zarate.com
            </td>
            <td>
              Gabriel.com
            </td>
          </tr>
          <tr>
            <td>
              Platzi
            </td>
            <td>
              platzi@platzi.com
            </td>
            <td>
              Gabriel.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;