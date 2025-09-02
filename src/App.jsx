import { useEffect } from 'react';
import { mockNews } from './constans/mockNews'
import NewsList from './components/NewsList/NewsList'

function App() {

  useEffect(() => {
    if (window.App?.postMessage) {
      window.App.postMessage("news");
    }
  }, []);
  
  return (
    <main className='container'>
      <NewsList newsArray={mockNews} />
    </main>
  )
}

export default App
