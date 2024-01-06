import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalresults, settotalresults] = useState(0);

  // function to capitalize the first letter
  const capitalizefirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=5d0256b391864729b53a645ab5817942&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    settotalresults(parsedData.totalResults);
    setloading(false);
  };
  useEffect(() => {
    document.title = `Authentic News - ${capitalizefirstletter(
      props.category
    )}`;
    updateNews();
    // eslint-disable-next-line
  }, []); // empty dependency array indicates that the effect runs only once, after the initial render

  const handlePre = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=5d0256b391864729b53a645ab5817942&page=${
      page - 1
    }&pageSize=${props.pageSize}`;
    setloading(true);

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    settotalresults(parsedData.totalResults);
    setloading(false);
    setpage(page - 1);
  };

  const handleNext = async (e) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=5d0256b391864729b53a645ab5817942&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setloading(true);

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(parsedData.articles);
    settotalresults(parsedData.totalResults);
    setloading(false);
    setpage(page + 1);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: "70px 0 40px 0" }}>
        {" "}
        Top {capitalizefirstletter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <div className="row">
        {articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                newsUrl={element.url}
                date={element.publishedAt}
                imgUrl={element.urlToImage}
              />
            </div>
          );
        })}

        {!loading && (
          <div className="container d-flex justify-content-evenly my-3">
            <button
              disabled={page <= 1}
              type="button"
              className="btn btn-secondary"
              onClick={handlePre}
            >
              ← Previous
            </button>
            {/* <span>{Math.ceil(totalresults / 21)}</span> */}
            <button
              disabled={page + 1 > Math.ceil(totalresults / 18)}
              type="button"
              className="btn btn-secondary"
              onClick={handleNext}
            >
              Next →{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 15,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

// // instead of using if else in your handelNextClick you could use disable={ this.state.page + 1 > Math.ceil(this.state.totalReslts/20)} in you
// // ur next button
