const quoteOfTheDay = document.querySelector("#quote-of-the-day");
  fetch("https://favqs.com/api/qotd")
    .then((res) => {
      if (!res.ok) {
        throw Error("Something ain't right!");
      }
      return res.json();
    })
    .then((res) => {
      const quoteBody = res.quote.body
      const quoteAuthor = res.quote.author
        const li = document.createElement("li");
        li.classList.add("quote-li")
        li.textContent = `"${quoteBody}" -${quoteAuthor}`;
        quoteOfTheDay.appendChild(li);
    })
    .catch((err) => {
      console.log(err);
    });


