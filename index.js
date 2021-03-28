
const randQButton = document.querySelector("#random-q-button");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer")


randQButton.addEventListener("click", async (e) => {
    try {
        const res = await axios.get("https://opentdb.com/api.php?amount=1");
        res.data.results.forEach((triviaQ) => {
            question.innerHTML = triviaQ.question;
            answer.innerHTML = `Answer: ${triviaQ.correct_answer}`;
    });
    } catch (err) {
      console.log(err);
    }
  });


