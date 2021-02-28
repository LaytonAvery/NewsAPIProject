let displayNews = document.getElementById("displayNews");
let newsPage = document.getElementById("newsPage");
let articles = news.articles;

displayNews.addEventListener("click", function () {
  let newsItem = articles.map(function (sources) {
    return ` <div>
              <p>Author: ${sources.author}</p>
      
              <p>Title: ${sources.title}</p>
              <p>Description: ${sources.description}</p>
              <p> <link src="${sources.url}" width="200" height="200" class="newsImage"></link> </p>
              <p>Image: ${sources.urlToImage}</p>
              <p>Time: ${sources.publishedAt}</p>
          </div> 
      `;
  });
  newsPage.innerHTML += newsItem.join("");
});
