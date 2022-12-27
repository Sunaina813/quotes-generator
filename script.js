const button = document.querySelector("button");
const paraTag = document.querySelector(".quote");
const author = document.querySelector(".name");
let count = 0;

async function fetchUrl() {
  count = count + 1;
  console.log(count);

  const apiUrl = "https://type.fit/api/quotes";
  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data[count].text);

  paraTag.innerText = data[count].text;
  author.innerHTML = data[count].author;
}
fetchUrl();
button.addEventListener("click", fetchUrl);
