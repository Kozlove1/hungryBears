
import './App.css'
import { useHungryBearsStore } from './store/useHungryBearsStore'

function App() {

  const {hungryBears, feed, dontFeed} = useHungryBearsStore((state) => state)

  return (
    <>
      <h1>Feed The Bear</h1>
      <div className="card">
        <button onClick={() => feed(1)}>
        Don`t feed
        </button>
        <h2>
        {hungryBears === 0 ? 'You Are Awesome' : `Hungry Bears count is ${hungryBears}`}
        </h2>
        <button onClick={() => hungryBears === 0 ? null : dontFeed(1)}>
        {hungryBears === 0 ? 'Out Of Service' :'Feed'}
        </button>
      </div>
    </>
  )
}

export default App
