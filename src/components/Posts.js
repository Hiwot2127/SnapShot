import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
            query
          )}&client_id=RgsEnbmChRmMH3_IwZdQrTKtaoJsUjkP9PYP0CzB-ss&per_page=100`
        );
        setImages(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (query) {
      setLoading(true);
      fetchImages();
    }
  }, [query]);

  return (
    <div className="posts-container">
      {query ? (
        <div>
          <h2 className="results-title">{query} Pictures</h2>
          <div className="images-grid">
            {loading
              ? Array(10)
                  .fill()
                  .map((_, index) => (
                    <div key={index} className="skeleton-post"></div>
                  ))
              : images.map((image) => (
                  <img
                    key={image.id}
                    src={image.urls.small}
                    alt={image.alt_description}
                    className="post-image"
                  />
                ))}
          </div>
        </div>
      ) : (
        <h2 className="no-query">No query found</h2>
      )}
    </div>
  );
};

export default Posts;
