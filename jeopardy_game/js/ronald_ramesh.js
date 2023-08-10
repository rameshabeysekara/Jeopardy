/**
 *   STUDENT NAME :  Abeysekara, Ramesh
 *                    Bagaporo Jr., Ronald
 *   SUBJECT :       INFO-6122-01    |   Programming Javascript
 *   Project :       Jeopardy's
 *
 */

document.addEventListener("DOMContentLoaded", () => {
  let divFirstSec = document.createElement("div");
  divFirstSec.id = "divFirstSection";
  divFirstSec.classList.add("divFirstSection");
  document.body.appendChild(divFirstSec);

  let divJeoPart = document.createElement("div");
  divJeoPart.id = "divJeopardhyPart";
  divJeoPart.classList.add("divJeopardhyPart");
  divFirstSec.appendChild(divJeoPart);

  let svgLogo = document.createElement("img");
  svgLogo.src = "./assets/Jeopardy!_logo.svg";
  svgLogo.setAttribute("height", "200");
  divJeoPart.appendChild(svgLogo);

  //= = = = = MIDDLE PART SECTION!!
  //= = = = = MIDDLE PART SECTION!!

  let divSecondSec = document.createElement("div");
  divSecondSec.id = "divSecondSection";
  divSecondSec.classList.add("divSecondSection");
  document.body.appendChild(divSecondSec);

  let divSecondSecLeft = document.createElement("div");
  divSecondSecLeft.id = "divSecondSectionLeft";
  divSecondSecLeft.classList.add("divSecondSectionLeft");
  divSecondSec.appendChild(divSecondSecLeft);

  let h3StudName = document.createElement("h3");
  h3StudName.id = "h3StudName";
  h3StudName.classList.add("h3StudName");
  divSecondSecLeft.appendChild(h3StudName);
  h3StudName.innerHTML = "Student Name :";

  let ulElement1 = document.createElement("ul");
  ulElement1.classList.add("ulMenu");
  divSecondSecLeft.appendChild(ulElement1);

  let homeLiRam = document.createElement("li");
  homeLiRam.innerHTML = "Abeysekara, Ramesh";
  divSecondSecLeft.appendChild(homeLiRam);

  let homeLiRon = document.createElement("li");
  homeLiRon.innerHTML = "Bagaporo Jr., Ronald";
  divSecondSecLeft.appendChild(homeLiRon);

  let divSecondSecMid = document.createElement("div");
  divSecondSecMid.id = "divSecondSectionMid";
  divSecondSecMid.classList.add("divSecondSectionMid");
  divSecondSec.appendChild(divSecondSecMid);

  let h3Subject = document.createElement("h3");
  h3Subject.id = "h3Subject";
  h3Subject.classList.add("h3Subject");
  divSecondSecMid.appendChild(h3Subject);
  h3Subject.innerHTML = "Subject :";

  let ulElement2 = document.createElement("ul");
  ulElement2.classList.add("ulMenu");
  divSecondSecMid.appendChild(ulElement2);

  let homeLiINFO = document.createElement("li");
  homeLiINFO.innerHTML = "INFO-6122-01";
  divSecondSecMid.appendChild(homeLiINFO);

  let homeLiProgJavaS = document.createElement("li");
  homeLiProgJavaS.innerHTML = "Programming JavaScript";
  divSecondSecMid.appendChild(homeLiProgJavaS);

  let divSecondSecRight = document.createElement("div");
  divSecondSecRight.id = "divSecondSectionRight";
  divSecondSecRight.classList.add("divSecondSectionRight");
  divSecondSec.appendChild(divSecondSecRight);

  let h3GrProj = document.createElement("h3");
  h3GrProj.id = "h3GrProj";
  h3GrProj.classList.add("h3GrProj");
  divSecondSecRight.appendChild(h3GrProj);
  h3GrProj.innerHTML = "Group Project ( 25% )";

  //= = = = = BOTTOM PART SECTION!!
  //= = = = = BOTTOM PART SECTION!!

  let divThirdSec = document.createElement("div");
  divThirdSec.id = "divThirdSection";
  divThirdSec.classList.add("divThirdSection");
  document.body.appendChild(divThirdSec);
  // divThirdSec.innerHTML = "Please enter how many questions"

  let btnSubmit = document.createElement("button");
  btnSubmit.id = "buttonSubmit";
  btnSubmit.classList.add("buttonSubmit");
  btnSubmit.textContent = "START GAME!";
  divThirdSec.appendChild(btnSubmit);

  //= = = = = THIS IS THE PART!!
  //= = = = = THIS IS THE PART!!

  let divBaseBoard = document.createElement("div");
  divBaseBoard.id = "divBBoard";
  divBaseBoard.classList.add("divBBoard");
  divBaseBoard.style.display = "none";
  document.body.appendChild(divBaseBoard);

  let divBaseBoardUpper = document.createElement("div");
  divBaseBoardUpper.id = "divUpper";
  divBaseBoardUpper.classList.add("divUpper");
  divBaseBoard.appendChild(divBaseBoardUpper);

  let divPlayerOneLeft = document.createElement("div");
  divPlayerOneLeft.id + "divPlayerLeft";
  divPlayerOneLeft.classList.add("divPlayer");
  divPlayerOneLeft.innerHTML = "PLAYER 1";
  divBaseBoardUpper.appendChild(divPlayerOneLeft);

  let labelPlayerOneScore = document.createElement("labe");
  labelPlayerOneScore.id = "lblPlayer1Score";
  labelPlayerOneScore.classList.add("playerScore");
  labelPlayerOneScore.innerHTML = "00";
  divPlayerOneLeft.appendChild(labelPlayerOneScore);

  let divGameBoard = document.createElement("div");
  divGameBoard.id = "divGBoard";
  divGameBoard.classList.add("divGBoard");
  divBaseBoardUpper.appendChild(divGameBoard);
  // divGameBoard.innerHTML = "THIS IS IT!"

  let divPlayerTwoRight = document.createElement("div");
  divPlayerTwoRight.id + "divPlayerRight";
  divPlayerTwoRight.classList.add("divPlayer");
  divPlayerTwoRight.innerHTML = "PLAYER 2";
  divBaseBoardUpper.appendChild(divPlayerTwoRight);

  let labelPlayerTwoScore = document.createElement("labe");
  labelPlayerTwoScore.id = "lblPlayer1Score";
  labelPlayerTwoScore.classList.add("playerScore");
  labelPlayerTwoScore.innerHTML = "00";
  divPlayerTwoRight.appendChild(labelPlayerTwoScore);

  let divBaseBoardBottom = document.createElement("div");
  divBaseBoardBottom.id = "divBottom";
  divBaseBoard.appendChild(divBaseBoardBottom);

  let btnReset = document.createElement("button");
  btnReset.id = "buttonReset";
  btnReset.classList.add("buttonReset");
  btnReset.textContent = "Reset Game";
  divBaseBoardBottom.appendChild(btnReset);

  btnReset.addEventListener("click", function () {
    divSecondSec.style.display = "";
    divThirdSec.style.display = "";
    divBaseBoard.style.display = "none";

    location.reload();
  });

  // const JEOPARDY_API_CATEGORIES = 'http://localhost:3000/api/categories';
  const JEOPARDY_API_CATEGORIES = "https://jservice.io/api/categories";
  const JEOPARDY_API_CLUES = "https://jservice.io/api/clues";

  btnSubmit.addEventListener("click", categQuestions);

  function categQuestions() {
    divBaseBoard.style.display = "";
    divSecondSec.style.display = "none";
    divThirdSec.style.display = "none";

    function createCategoriesTabs(categories) {
      if (Array.isArray(categories)) {
        if (categories.length > 0) {
          categories.forEach((category) => {
            createCategoryDivs(category);
            getQuestions(category);
          });
        }
      }
    }

    class Category {
      constructor(id, title, clues_count) {
        this.id = id;
        this.title = title;
        this.clues_count = clues_count;
      }
    }
    async function loadData() {
      const URLcount = `${JEOPARDY_API_CATEGORIES}?count=5`;
      const categories = [];
      try {
        const response = await fetch(URLcount);
        const data = await response.json();
        for (const category of data) {
          const categoryObj = new Category(
            category.id,
            category.title,
            category.clues_count
          );
          categories.push(categoryObj);
        }
        if (categories.length > 0) {
          createCategoriesTabs(categories);
        }
      } catch (error) {
        console.error("Error in getting data:", error);
      }
    }

    class Question {
      constructor(id, question, answer, value, category) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.value = value;
        this.category = new Category(
          category?.id,
          category?.title,
          category?.clues_count
        );
      }
    }
    async function getQuestions(category) {
      const URL = `${JEOPARDY_API_CLUES}?category=${category?.id}`;
      const questions = [];
      try {
        const response = await fetch(URL);
        const data = await response.json();
        for (const question of data) {
          const questionObj = new Question(
            question.id,
            question.question,
            question.answer,
            question.value,
            question.category
          );
          questions.push(questionObj);
        }
        if (questions.length > 0) {
          createQuestionDivs(category?.id, questions);
        }
      } catch (error) {
        console.error("Error in getting data:", error);
      }
    }

    loadData();

    function createCategoryDivs(category) {
      let divAll = document.createElement("div");
      divAll.id = "divAll";
      divAll.classList.add("divAll");
      divGameBoard.appendChild(divAll);

      let divCategory = document.createElement("div");
      divCategory.id = category.title;
      divCategory.classList.add("divNumber");
      divCategory.innerHTML = category.title + "<br>Category";
      divAll.appendChild(divCategory);

      let divButtonQ = document.createElement("div");
      divButtonQ.id = category.id;
      divButtonQ.classList.add("divButtonQuestion");
      divAll.appendChild(divButtonQ);
    }

    let playerOneScore = 0;
    let playerTwoScore = 0;

    function createQuestionDivs(id, questions) {
      if (questions.length >= 5) {
        questions.slice(0, 5).forEach((question) => {
          console.log(question.value);

          let btnQuestion = document.createElement("button");
          btnQuestion.id = "button-question";
          btnQuestion.classList.add("button-question");
          btnQuestion.innerHTML = question.value ? question.value : 100;
          const elem = document.getElementById(id);
          elem.appendChild(btnQuestion);

          let isButtonClicked = false;

          // Add event listener to show modal when button is clicked
          btnQuestion.addEventListener("click", function () {
            if (!isButtonClicked) {
              // Check if the button has not been clicked before
              isButtonClicked = true; // Set the flag to true
              btnQuestion.style.backgroundColor = "#777B7E";

              // Create the modal and its content
              let modal = document.createElement("div");
              modal.classList.add("modal");
              modal.style.display = "block";

              let modalContent = document.createElement("div");
              modalContent.classList.add("modal-content");
              // modalContent.innerHTML = "This is the modal content for button " + (i + 1);

              let divModalHeader = document.createElement("div");
              divModalHeader.classList.add("modal-header");

              let modalH2 = document.createElement("h2");
              modalH2.innerHTML = "Category :\t" + question.category.title;

              let modalH2Points = document.createElement("h2");
              modalH2Points.innerHTML = "For " + question.value + " points!";

              let divModOfBandA = document.createElement("div");
              divModOfBandA.classList.add("modal-BandA");
              // divModOfQandA.innerHTML = "Here is the Question!";

              let divModalBody = document.createElement("div");
              divModalBody.classList.add("modal-body");
              divModalBody.innerHTML = question.question;

              let divModalAns = document.createElement("div");
              divModalAns.classList.add("modal-answer");
              divModalAns.innerHTML = question.answer;
              divModalAns.style.display = "none";

              let divModalFooter = document.createElement("div");
              divModalFooter.id = "modal-foot";
              divModalFooter.classList.add("modal-footer");
              // divModalFooter.innerHTML = "Here is the Footer of Modal";

              let countdownValue = 3;

              function updateCountdown() {
                divModalFooter.textContent = countdownValue;

                countdownValue--;

                if (countdownValue < 0) {
                  clearInterval(intervalId);
                  divModalFooter.textContent = "";

                  let btnAns = document.createElement("button");
                  btnAns.id = "button-answer";
                  btnAns.classList.add("button-ans");
                  divModalFooter.appendChild(btnAns);
                  btnAns.innerHTML = "REVEAL THE ANSWER!";

                  btnAns.addEventListener("click", function () {
                    divModalAns.style.display = "";
                    whoGetAns.style.display = "";
                    btnAns.style.display = "none";
                  });

                  let whoGetAns = document.createElement("div");
                  whoGetAns.id = "div-get-ans";
                  whoGetAns.classList.add("div-get-answer");
                  whoGetAns.style.display = "none";
                  whoGetAns.innerHTML = "Who get the correct answer?";

                  let divPlayer = document.createElement("div");
                  divPlayer.classList.add("div-Player");

                  let btnP1 = document.createElement("button");
                  btnP1.id = "button-p1";
                  btnP1.classList.add("button-player-one");
                  btnP1.innerHTML = "PLAYER 1";
                  // whoGetAns.appendChild(btnP1)
                  btnP1.addEventListener("click", sharedFunction);

                  function sharedFunction() {
                    // Increment player one score based on question value
                    playerOneScore += question.value ? question.value : 100;
                    // Update the player one score label
                    labelPlayerOneScore.innerHTML = playerOneScore;
                    btnQuestion.innerHTML = "PLAYER 1";
                    modal.style.display = "none";
                  }

                  let btnP2 = document.createElement("button");
                  btnP2.id = "button-p2";
                  btnP2.classList.add("button-player-two");
                  btnP2.innerHTML = "PLAYER 2";
                  // whoGetAns.appendChild(btnP2)
                  btnP2.addEventListener("click", playerTwoPoints);

                  function playerTwoPoints() {
                    // Increment player two score based on question value
                    playerTwoScore += question.value ? question.value : 100;
                    // Update the player two score label
                    labelPlayerTwoScore.innerHTML = playerTwoScore;
                    btnQuestion.innerHTML = "PLAYER 2";
                    modal.style.display = "none";
                  }

                  divModalFooter.appendChild(whoGetAns);
                  whoGetAns.appendChild(divPlayer);
                  divPlayer.appendChild(btnP1);
                  divPlayer.appendChild(btnP2);
                  // btnP2.addEventListener("click", sharedFunction)fe;
                }
              }
              const intervalId = setInterval(updateCountdown, 1000);

              document.body.appendChild(modal);
              modal.appendChild(modalContent);
              divModalHeader.appendChild(modalH2);
              divModalHeader.appendChild(modalH2Points);
              modalContent.appendChild(divModalHeader);
              modalContent.appendChild(divModOfBandA);
              divModOfBandA.appendChild(divModalBody);
              divModOfBandA.appendChild(divModalAns);
              modalContent.appendChild(divModalFooter);

              modal.style.display = "block";
            }
          });
        });
      }
    }
  }
});
