/**
*   STUDENT NAME :  Bandara, Ramesh
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
    divJeoPart.classList.add("divJeopardhyPart")
    divFirstSec.appendChild(divJeoPart);

    let svgLogo = document.createElement("img");
    svgLogo.src = "./assets/Jeopardy!_logo.svg";
    svgLogo.setAttribute("height", "200")
    divJeoPart.appendChild(svgLogo)


    //= = = = = MIDDLE PART SECTION!!
    //= = = = = MIDDLE PART SECTION!!


    let divSecondSec = document.createElement("div");
    divSecondSec.id = "divSecondSection";
    divSecondSec.classList.add("divSecondSection");
    document.body.appendChild(divSecondSec);

    let divSecondSecLeft = document.createElement("div");
    divSecondSecLeft.id = "divSecondSectionLeft";
    divSecondSecLeft.classList.add("divSecondSectionLeft");
    divSecondSec.appendChild(divSecondSecLeft)

    let h3StudName = document.createElement("h3")
    h3StudName.id = "h3StudName"
    h3StudName.classList.add("h3StudName")
    divSecondSecLeft.appendChild(h3StudName)
    h3StudName.innerHTML = "Student Name :"

    let ulElement1 = document.createElement("ul");
    ulElement1.classList.add("ulMenu");
    divSecondSecLeft.appendChild(ulElement1)

    let homeLiRam = document.createElement("li");
    homeLiRam.innerHTML = "Bandara, Ramesh";
    divSecondSecLeft.appendChild(homeLiRam);

    let homeLiRon = document.createElement("li");
    homeLiRon.innerHTML = "Bagaporo Jr., Ronald";
    divSecondSecLeft.appendChild(homeLiRon);

    let divSecondSecMid = document.createElement("div");
    divSecondSecMid.id = "divSecondSectionMid";
    divSecondSecMid.classList.add("divSecondSectionMid");
    divSecondSec.appendChild(divSecondSecMid);

    let h3Subject = document.createElement("h3")
    h3Subject.id = "h3Subject"
    h3Subject.classList.add("h3Subject")
    divSecondSecMid.appendChild(h3Subject)
    h3Subject.innerHTML = "Subject :"

    let ulElement2 = document.createElement("ul");
    ulElement2.classList.add("ulMenu");
    divSecondSecMid.appendChild(ulElement2)

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

    let h3GrProj = document.createElement("h3")
    h3GrProj.id = "h3GrProj"
    h3GrProj.classList.add("h3GrProj")
    divSecondSecRight.appendChild(h3GrProj)
    h3GrProj.innerHTML = "Group Project ( 25% )"


    //= = = = = BOTTOM PART SECTION!!
    //= = = = = BOTTOM PART SECTION!!




    let divThirdSec = document.createElement("div");
    divThirdSec.id = "divThirdSection";
    divThirdSec.classList.add("divThirdSection");
    document.body.appendChild(divThirdSec);
    divThirdSec.innerHTML = "Please enter how many questions"

    let inputCateg = document.createElement("input")
    inputCateg.id = "inputCategory"
    inputCateg.classList.add("inputCategory")
    divThirdSec.appendChild(inputCateg)
    inputCateg.placeholder = "3"

    let btnSubmit = document.createElement("button")
    btnSubmit.id = "buttonSubmit"
    btnSubmit.classList.add("buttonSubmit")
    btnSubmit.textContent = "GAME!";
    divThirdSec.appendChild(btnSubmit)


    //= = = = = THIS IS THE PART!!
    //= = = = = THIS IS THE PART!!



    let divBaseBoard = document.createElement("div")
    divBaseBoard.id = "divBBoard"
    divBaseBoard.classList.add("divBBoard")
    document.body.appendChild(divBaseBoard);

    let divGameBoard = document.createElement("div");
    divGameBoard.id = "divGBoard";
    divGameBoard.classList.add("divGBoard");
    divBaseBoard.appendChild(divGameBoard);
    // divGameBoard.innerHTML = "THIS IS IT!"



    const JEOPARDY_API = "https://jservice.io/api/category";

    // https://jservice.io/api/category?id=1500
    const JEOPARDY_API_CATEG = "https://jservice.io/api/category"

    var HTTP = new XMLHttpRequest()

    btnSubmit.addEventListener("click", categQuestions);

    function categQuestions() {

        function categories() {

            // THIS IS FOR THE RANDOM CATEGORY
            // count = 6, minValue = 1, maxValue = 500
            const randomValues = getRandomCategory(6, 1, 1000);

            function getRandomCategory( count, minValue, maxValue ) {
                const randomValues = [];

                for ( let i = 0; i < count; i++ ) {
                    const randomValue = Math.floor( Math.random() * (maxValue - minValue + 1 ) ) + minValue;
                    randomValues.push(randomValue);
                }

                return randomValues;
            }
            // console.log(randomValues);

            for (let value of randomValues) {

                // console.log("Category ID:" + value); // You can perform any action with each value here

                const URL = `${JEOPARDY_API_CATEG}?id=${value}`;

                const HTTP = new XMLHttpRequest();
                HTTP.open("GET", URL, true);

                HTTP.onload = () => {
                    let response = JSON.parse(HTTP.responseText);
                    // console.log(response.title);
                    console.log(response.clues);

                    if (response.clues && Array.isArray(response.clues)) {
                        Create_Div(response); // Pass the title to the Create_Div function
                    } else {
                        console.log("Invalid response or missing clues property.");
                    }
                }
                HTTP.send();


                // HTTP.onload = () => {

                //     let response = JSON.parse(HTTP.responseText);
                //     console.log( response )
                //     // console.log(response.title);

                //         Create_Div( response );

                // };
                // HTTP.send();
            }
        }

        categories();

        function Create_Div(Data) {

            let divNum = document.createElement("div");
            divNum.id = "divNumber";
            divNum.classList.add("divNumber");
            divNum.innerHTML = Data.title + " Category"
            divGameBoard.appendChild(divNum);

            Get_Question()

        }

        function Get_Question() {

            // = = = = = = = = = THIS IS FOR THE RANDOM QUESTION EACH CATEGORY
        // count = howManyQ, minValue = 3, maxValue = 6
        // inputCateg.id = "inputCategory"
        let howManyQ = document.getElementById ( "inputCategory" )

        // const randomQ = getRandomQuestions( 6, 3, 5 );

        // function getRandomQuestions( count, minValue, maxValue ) {
        //     const randomQ = [];

            for (let i = 0; i < howManyQ; i++) {

                let btnQuestion = document.createElement("button")
                btnQuestion.id = "button-question"
                btnQuestion.classList.add("button-question")
                // btnQuestion.innerHTML = "100"
                btnQuestion.innerHTML = Data.value
                divNum.appendChild(btnQuestion);

            }

        //         const randomQValue = Math.floor( Math.random() * (maxValue - minValue + 1 ) ) + minValue;
        //         randomQ.push(randomQValue);

        //     }

        //     return randomQ;
        // }
        // console.log("Question : " + randomQ);

            // let btnQuestion = document.createElement("button")
            // btnQuestion.id = "button-question"
            // btnQuestion.classList.add("button-question")
            // // btnQuestion.innerHTML = "100"
            // btnQuestion.innerHTML = Data.value
            // divNum.appendChild(btnQuestion);

        }

        // function Get_Question() {

        //     let btnQuestion = document.createElement ( "button" )
        //     btnQuestion.id = "button-question"
        //     btnQuestion.classList.add( "button-question" )
        //     // btnQuestion.innerHTML = "100"
        //     btnQuestion.innerHTML = Data.value
        //     divNum.appendChild( btnQuestion );

        // }







        // function categories() {

        //     function getRandomCategory(count, minValue, maxValue) {
        //         const randomValues = [];

        //         for (let i = 0; i < count; i++) {
        //             const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        //             randomValues.push(randomValue);
        //         }

        //         return randomValues;
        //     }

        //     // count = 6, minValue = 1, maxValue = 500
        //     const randomValues = getRandomCategory(6, 1, 500);
        //     console.log(randomValues);

        //     URL = `${JEOPARDY_API_CATEG}?id=${randomValues}`

        //     HTTP.open("GET",URL,true)

        //     HTTP.onload=()=>
        //     {
        //         let response = JSON.parse( HTTP.responseText )
        //         console.log(response)

        //         for ( category_id  of response )   {
        //             Create_Div( category_id )
        //         }
        //     }
        //     HTTP.send()

        // }

        // categories();

        //     let userInput = inputCateg.value;
        //     // console.log(userInput);
        //     // divGameBoard.innerHTML = userInput
        //     URL = `${JEOPARDY_API}?count=${userInput}`

        //     HTTP.open("GET", URL, true)

        //     HTTP.onload = () => {
        //         let response = JSON.parse(HTTP.responseText)
        //         console.log(response)

        //         for (question of response) {
        //             Create_Div(question)
        //         }
        //     }
        //     HTTP.send()

        // }



        // // FOR 6 - CATEGORIES SECTION
        // let divQty = new Array(6);

        // for (let i = 0; i < divQty.length; i++) {

        // }





        // function Create_Div(Data) {



        //     let que = document.createElement("div")
        //     que.id = "idQuestion"
        //     que.innerHTML = Data.question
        //     divGameBoard.append(que)

    }





























































































});
