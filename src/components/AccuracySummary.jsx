export default function AccuracySummary({ newsList }) {
  const total = newsList.length
  const correct = newsList.filter(
    (n) => n.auctual_category === n.predicted_category
  ).length
  const pct = total > 0 ? ((correct / total) * 100).toFixed(1) : '0.0'

  return (
    <div className="accuracy-card">
      <span className="accuracy-label">Accuracy</span>
      <span className="accuracy-value">
        {correct} / {total} correct ({pct}%)
      </span>
    </div>
  )
}
