import NewsCard from "../NewsCard/NewsCard"


const NewsList = ({newsArray}) => {
  return (
    <section aria-labelledby="news-heading" className="news-section">
      <h1 id="news-heading" className="page-title">Новости игр</h1>

      <ul className="news-list" role="list">
        {newsArray.map(item => (
          <li key={item.id} className="news-list__item">
            <NewsCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NewsList