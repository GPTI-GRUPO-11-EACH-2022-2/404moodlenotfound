import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState<String>();

  useEffect(() => {
    fetch("/api/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: "Mensagem de teste", messageBody: "HEHE XD" }) })
    .then(
      response => response.text()
    ).then(
      data => setBackendData(data)
    );
  }, [])


  return (
    <div>
        {backendData}
    </div>
  );
}

export default App