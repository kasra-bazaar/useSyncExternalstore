import SyncExternal from "./hooks/SyncExternalExample"


function App() {
  const getSnapShot = () => {
    return  navigator.onLine
    
}

  return (
    <>
      <SyncExternal getSnapShot={getSnapShot} />
    </>
  )
}

export default App
