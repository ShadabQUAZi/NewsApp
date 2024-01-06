import React from "react";

const NewsItem = (props) => {
    let { title, description, imgUrl, newsUrl, date } = props;

    // Explanation: Above, We have used a destructuring method of Javascript. It allows us to extract values from arrays and objects and lets us assign them to other variables. In our case, this.props is an object, and we are extracting the title and description from that object.

    return (
      <div className="card">
        <img
          src={
            !imgUrl
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_wdtTvl7Ws18YV6FzBx-_aqkytKTV5AIIw&usqp=CAU"
              : imgUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-danger"> {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm  btn-dark">Read more
          </a>
        </div>
      </div>
    );
}

export default NewsItem;
