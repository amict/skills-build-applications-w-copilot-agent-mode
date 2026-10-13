import logo from '../../../docs/octofitapp-small.png'

function App() {
  return (
    <main className="container py-4">
      <header className="d-flex align-items-center gap-3">
        <img
          src={logo}
          alt="OctoFit Tracker mascot"
          width="72"
          height="72"
          className="rounded"
        />
        <h1 className="h3 mb-0">OctoFit Tracker</h1>
      </header>
    </main>
  )
}

export default App
