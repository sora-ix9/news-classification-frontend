export default function NewsTable({ newsList }) {
  return (
    <table className="news-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Actual Category</th>
          <th>News (Title + Short Description)</th>
          <th>Predicted Category</th>
        </tr>
      </thead>
      <tbody>
        {newsList.map((item, idx) => {
          const correct = item.auctual_category === item.predicted_category
          return (
            <tr key={idx} className={correct ? 'row-correct' : 'row-wrong'}>
              <td>{idx + 1}</td>
              <td>{item.auctual_category}</td>
              <td>{item.news}</td>
              <td>{item.predicted_category}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
