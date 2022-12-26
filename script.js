const newQuoteBtn = document.getElementById("newQuoteBtn");
const paraTag = document.querySelector("p");
const authorname = document.getElementById("authorName");
let count = 0;

newQuoteBtn.addEventListener("click", fetchUrl);



async function fetchUrl() {
  count = count +1;
  console.log(count);
 
  const apiUrl = "https://type.fit/api/quotes";
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data[count].text);

  paraTag.innerText = data[count].text;
  authorname.innerHTML = data[count].author;

  
}
fetchUrl();