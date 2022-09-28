import React, { useEffect, useState } from 'react'
import { json } from 'stream/consumers';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: "Mensagem de teste", messageBody: "HEHE XD" }) }).then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    );
  }, [])

  const data = backendData;

  return (
    <div>
      //@TODO: conseguir mostrar o backendData no HTML, não sei HTML. see ya soon folks!
    </div>
  )
}

export default App