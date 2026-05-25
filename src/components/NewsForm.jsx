export default function NewsForm({ newsNum, onChange, onSubmit, isLoading }) {
  return (
    <form onSubmit={onSubmit} className="news-form">
      <label htmlFor="news-num">Number of news articles to classify</label>
      <input
        id="news-num"
        type="number"
        min="1"
        value={newsNum}
        onChange={(e) => onChange(e.target.value)}
        disabled={isLoading}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Classifying…' : 'Classify'}
      </button>
    </form>
  )
}
