"use client"
import axios from "axios";
import { useEffect, useState } from "react";

function page() {
const [data, setData] = useState(null);
var currentDate = new Date();
var previousDate = new Date(currentDate);
previousDate.setDate(previousDate.getDate() - 20);
var prevYear = previousDate.getFullYear();
var prevMonth = String(previousDate.getMonth() + 1).padStart(2, '0');
var prevDay = String(previousDate.getDate()).padStart(2, '0');
var formattedPrevDate = `${prevYear}-${prevMonth}-${prevDay}`;
var date = formattedPrevDate;
var url ='https://newsapi.org/v2/everything?q=climate%20change%20OR%20natural%20disasters%20OR%20renewable%20energy&from={date}&sortBy=publishedAt&apiKey=58dbbe2b20b34fcdbf5c8bfe16d8cd50';

  const GrabNews =() =>{
    axios.get(url)
    .then((response) => {
      console.clear();
      setData(response.data);
      console.log(response.data);
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(()=>{
    GrabNews();
  }, []);

  const [displayCount, setDisplayCount] = useState(18);
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setDisplayCount(displayCount + 6); //See this will increase news by 6 when clicked
  };

  return (
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
    {data &&
      data.articles
        .filter(article => article.urlToImage) // Filter out articles without images
        .reduce((uniqueArticles, article) => {
          const isDuplicate = uniqueArticles.some(
            existingArticle =>
              existingArticle.title === article.title && existingArticle.source.name === article.source.name
          );
          if (!isDuplicate) {
            uniqueArticles.push(article);
          }
          return uniqueArticles;
        }, [])
        .slice(0, displayCount)
        .map((d, index) => (
          <a
            key={index}
            href={d.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 group border border-gray-200 bg-white"
          >
            <div className="relative">
              <img
                src={d.urlToImage}
                alt="Article"
                className="w-full h-64 object-cover transition duration-300 ease-in-out rounded-t-lg hover:opacity-90"
              />
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-0"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="text-white text-lg font-semibold">Read more</span>
              </div>
            </div>
            <div className="px-6 py-4 bg-white rounded-b-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-500 transition duration-300 ease-in-out">
                {d.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {d.content && d.content.length >= 200 ? `${d.content.slice(0, 200)}...` : 'Content not available.'}
              </p>
              <div className="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0a6 6 0 11-12 0 6 6 0 0112 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>{d.source.name}</p>
              </div>
            </div>
          </a>
        ))}
  </div>
  {data && data.articles.length > displayCount && (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleShowMore}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Show more
      </button>
    </div>
  )}
</div>
);}
export default page
  