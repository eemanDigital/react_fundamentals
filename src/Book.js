const Book = (props) => {
    const { image, title, author, number } = props;
  
    return (
      <article className="article">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{author}</p>
        <span>{number + 1}</span>

      </article>
    );
  };
  
export default Book;