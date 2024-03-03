import React, { useState } from "react";
import useFetch from "./useFetch";
import "./News.scss";
import { NavLink } from "react-router-dom";

const News = () => {
  const [category, setCategory] = useState("all");
  const Base_Url = `https://inshorts.deta.dev/news?category=${category}`;
  const { loading, data, error } = useFetch(Base_Url);

  const cat = [
    "all",
    "national", //Indian News only
    "business",
    "sports",
    "world",
    "politics",
    "technology",
    "startup",
    "entertainment",
    "miscellaneous",
    "hatke",
    "science",
    "automobile",
  ];

  return (
    <div className="news-wrapper">
      <div className="header-cat">
        <h2>Category:{category}</h2>
        
      {cat.map((c) => {
        return (
          <button
            
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        );
      })}
      </div>
      <br />
      {loading && <h2 style={{"textAlign":"center"}}>...loading</h2>}

{/* used bootstrap for it,added bootstrap stylesheet link in index.html */}



     {data && data.length>0 &&
      <table className="table" style={{"marginTop":"20px"}}>
      <thead className="table-dark">
          <tr>
              <th>Author</th>
              <th>Content</th>
              <th>Date</th>
              <th>Image</th>
              <th>Title</th>
              <th>URL</th>

          </tr>

      </thead>
      <tbody>
          {data.map((item)=>{
              return(
                  <tr>
              <td>{item.author}</td>
              <td>{item.content}</td>
              <td>{item.date},{item.time}</td>
              <td><img src={item.imageUrl} width="100" height="100"/></td>
              <td>{item.title}</td>
              <td><a href={item.url} target="_blank">{item.url}</a></td>

          </tr>
              )
          })}
      </tbody>
    
         

       
    </table>
    }

{data.length > 0 && JSON.stringify(data, undefined, 2)}


      {error}
    </div>
  );
};

export default News;
