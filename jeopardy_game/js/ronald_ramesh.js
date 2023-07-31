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
  btnSubmit.textContent = "START GAME !";
  divThirdSec.appendChild(btnSubmit);

  //= = = = = THIS IS THE PART!!
  //= = = = = THIS IS THE PART!!

  let divBaseBoard = document.createElement("div");
  divBaseBoard.id = "divBBoard";
  divBaseBoard.classList.add("divBBoard");
  divBaseBoard.style.display = "none";
  document.body.appendChild(divBaseBoard);

  let divGameBoard = document.createElement("div");
  divGameBoard.id = "divGBoard";
  divGameBoard.classList.add("divGBoard");
  divBaseBoard.appendChild(divGameBoard);
  // divGameBoard.innerHTML = "THIS IS IT!"

  let btnReset = document.createElement("button");
  btnReset.id = "buttonReset";
  btnReset.classList.add("buttonReset");
  btnReset.textContent = "Reset Game";
  divBaseBoard.appendChild(btnReset);

  btnReset.addEventListener("click", function () {
    divSecondSec.style.display = "";
    divThirdSec.style.display = "";
    divBaseBoard.style.display = "none";

    location.reload();
  });

  // const JEOPARDY_API = "https://jservice.io/api/category"

  // https://jservice.io/api/category?id=1500
  const JEOPARDY_API_CATEGORIES = "https://jservice.io/api/categories";

  var HTTP = new XMLHttpRequest();

  btnSubmit.addEventListener("click", categQuestions);

  function categQuestions() {
    divBaseBoard.style.display = "";
    divSecondSec.style.display = "none";
    divThirdSec.style.display = "none";

    function categories() {
      // // THIS IS FOR THE RANDOM CATEGORY
      // // count = 6, minValue = 1, maxValue = 500
      // const randomValues = getRandomCategory(6, 1, 1000)

      // function getRandomCategory(count, minValue, maxValue) {
      //     const randomValues = [];

      //     for (let i = 0; i < count; i++) {
      //         const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      //         randomValues.push(randomValue)
      //     }

      //     return randomValues;
      // }
      // // console.log(randomValues);

      // for (let value of randomValues) {

      //     // console.log("Category ID:" + value)

      //     const URL = `${JEOPARDY_API_CATEG}?id=${value}`;

      //     const HTTP = new XMLHttpRequest();
      //     HTTP.open("GET", URL, true);

      //     HTTP.onload = () => {
      //         let response = JSON.parse(HTTP.responseText);
      //         // console.log(response.title);
      //         console.log(response.clues);

      //         if (response.clues && Array.isArray(response.clues)) {
      //             Create_Div(response); // Pass the title to the Create_Div function
      //         } else {
      //             console.log("Invalid response or missing clues property.")
      //         }
      //     }
      //     HTTP.send();
      // }
      const URL = `${JEOPARDY_API_CATEGORIES}?count=5`;
      const HTTP = new XMLHttpRequest();
      HTTP.open("GET", URL, true);

      HTTP.onload = () => {
        let response = JSON.parse(HTTP.responseText);
        if (Array.isArray(response)) {
          if (response.length > 0) {
            response.forEach((element) => {
              Create_Div(element);
            });
          }
        } else {
          console.log("Invalid response or missing clues property.");
        }
      };
      HTTP.send();
    }

    categories();

    function Create_Div(Data) {
      let divAll = document.createElement("div");
      divAll.id = "divAll";
      divAll.classList.add("divAll");
      divGameBoard.appendChild(divAll);

      let divNum = document.createElement("div");
      divNum.id = "divNumber";
      divNum.classList.add("divNumber");
      divNum.innerHTML = Data.title + "<br>Category";
      divAll.appendChild(divNum);

      let divButtonQ = document.createElement("div");
      divButtonQ.id = "divButtonQuestion";
      divButtonQ.classList.add("divButtonQuestion");
      divAll.appendChild(divButtonQ);

      // Loop to create buttons
      for (let i = 0; i < 5; i++) {
        let btnQuestion = document.createElement("button");
        btnQuestion.id = "button-question";
        btnQuestion.classList.add("button-question");
        btnQuestion.innerHTML = "100";
        divButtonQ.appendChild(btnQuestion);

        // Add event listener to show modal when button is clicked
        btnQuestion.addEventListener("click", function () {
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
          modalH2.innerHTML = "Category :\t" + Data.title;

          let divModOfBandA = document.createElement("div");
          divModOfBandA.classList.add("modal-BandA");
          // divModOfQandA.innerHTML = "Here is the Question!";

          let divModalBody = document.createElement("div");
          divModalBody.classList.add("modal-body");
          divModalBody.innerHTML = "Here is the Question!";

          let divModalAns = document.createElement("div");
          divModalAns.classList.add("modal-answer");
          divModalAns.innerHTML = "Here is the ANSWER!";
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

              let btnP2 = document.createElement("button");
              btnP2.id = "button-p2";
              btnP2.classList.add("button-player-two");
              btnP2.innerHTML = "PLAYER 2";
              // whoGetAns.appendChild(btnP2)

              divModalFooter.appendChild(whoGetAns);
              whoGetAns.appendChild(divPlayer);
              divPlayer.appendChild(btnP1);
              divPlayer.appendChild(btnP2);
              btnP2.addEventListener("click", sharedFunction);

              function sharedFunction() {
                // Do something when the button is clicked
                // console.log("Button clicked!");
                modal.style.display = "none";
              }
            }
          }
          const intervalId = setInterval(updateCountdown, 1000);

          document.body.appendChild(modal);
          modal.appendChild(modalContent);
          divModalHeader.appendChild(modalH2);
          modalContent.appendChild(divModalHeader);
          modalContent.appendChild(divModOfBandA);
          divModOfBandA.appendChild(divModalBody);
          divModOfBandA.appendChild(divModalAns);
          modalContent.appendChild(divModalFooter);

          modal.style.display = "block";
        });
      }
    }
  }
});
