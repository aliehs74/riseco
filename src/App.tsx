import CustomButton from './customButton'

function App() {

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-y-5">
      <CustomButton label="first" size="sm" variant="primary" />
      <CustomButton label="second " size="md" variant="secondary" />
      <CustomButton label="third" size="lg" variant="outline" onClick={() => alert("clicked on outline")} />
    </main>
  )
}

export default App
