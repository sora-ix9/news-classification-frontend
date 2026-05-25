import { useState } from 'react'
import NewsForm from './components/NewsForm'
import NewsTable from './components/NewsTable'
import AccuracySummary from './components/AccuracySummary'
import './App.css'

export default function App() {
  const [newsNum, setNewsNum] = useState('5')
  const [newsList, setNewsList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setNewsList([])
    try {
      const res = await fetch('/api/classify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ news_num: parseInt(newsNum, 10) }),
      })
      if (!res.ok) throw new Error(`Server error: ${res.status}`)
      const data = await res.json()
      setNewsList(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app">
      <h1 className="headline">News Classification</h1>
      <p className="subheadline">
        Enter how many news articles to fetch and classify.
      </p>
      <NewsForm
        newsNum={newsNum}
        onChange={setNewsNum}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
      {error && <p className="error">{error}</p>}
      {newsList.length > 0 && (
        <>
          <AccuracySummary newsList={newsList} />
          <NewsTable newsList={newsList} />
        </>
      )}
    </div>
  )
}
