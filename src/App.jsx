import { mockNews } from './constans/mockNews'
import NewsList from './components/NewsList/NewsList'

function App() {

  return (
    <main className='container'>
      <NewsList newsArray={mockNews} />
    </main>
  )
}

export default App
