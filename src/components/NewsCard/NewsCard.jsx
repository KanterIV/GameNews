const NewsCard = ({ title, image, date, description }) => {

  const formattedDate = date
    ? new Date(date).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <article className="news-card">
      {image && <img src={image} alt={title} className="news-card__image" />}
      <div className="news-card__content">
        <h2 className="news-card__title">{title}</h2>
        {description && <p className="news-card__desc">{description}</p>}
        {formattedDate && (
          <time className="news-card__date" dateTime={date}>
            {formattedDate}
          </time>
        )}
      </div>
    </article>
  );
}

export default NewsCard