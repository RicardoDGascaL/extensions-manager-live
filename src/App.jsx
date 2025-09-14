import { Header } from "./components/Header"
import { Filters } from "./components/Filters"

function App() {

  return (
    <main className="light-gradient dark:dark-gradient min-h-screen flex flex-col items-center ">
      <section className="w-[343px] my-6">
          <Header/>
          <Filters />
      </section>
    </main>
  )
}

export default App
