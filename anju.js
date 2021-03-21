// qotd_date: "2021-03-20T00:00:00.000+00:00"
// quote:
// author: "Deepak Chopra"
// author_permalink: "deepak-chopra"
// body: "The intention to live as long as possible isn't one of the mind's best intentions, because quantity isn't the same as quality."

const quoteOfTheDay = document.querySelector("#quote-of-the-day");

// const getQuotes = () => {
  fetch("https://favqs.com/api/qotd")
    .then((res) => {
      // debugger
      if (!res.ok) {
        throw Error("Something ain't right!");
      }
      return res.json();
    })
    .then((res) => {
      const today = new Date();
      // debugger;
      const quoteDate = res.qotd_date
      const quoteBody = res.quote.body
      const quoteAuthor = res.quote.author
      // for (const key in res) {
        // debugger;
        // if (today) {
        const li = document.createElement("li");
        li.classList.add("quote-li")
        li.textContent = `${quoteBody} -${quoteAuthor}`;
        // debugger;
        quoteOfTheDay.appendChild(li);
      // }
    })
    .catch((err) => {
      console.log(err);
    });
// };

const toDoSum = document.querySelector(".to-do-sum")

// toDoSum.addEventListener("mouseover", (e) => {
//   // debugger
//   if (toDoSum.style.display === "none") {
//     toDoSum.style.display = "block";
//   } else {
//     toDoSum.style.display = "none";
//   }
// })

// li.addEventListener("click", () => {
//   if (list.style.display === "block") {
//     list.style.display = "none";
//   } else {
//     list.style.display = "block";
//     try {
//         const dailyQuotes = await axios.get("https://favqs.com/api/qotd");
//         debugger
//         const quote = dailyQuotes.quote;
//         const li = document.createElement("li");
//         li.textContent = `${quote.body} ${quote.author}`;
//         debugger
//         quoteOfTheDay.appendChild(li);
//     } catch (error) {
//         console.log(error);
//     }
// }
