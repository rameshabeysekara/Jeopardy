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
    divThirdSec.innerHTML = "Please enter how many categories"

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

    

    let divBaseBoard = document.createElement ( "div" )
    divBaseBoard.id = "divBBoard"
    divBaseBoard.classList.add( "divBBoard" )
    document.body.appendChild(divBaseBoard);

    

    const JEOPARDY_API = "https://jservice.io/api/random";

    var HTTP = new XMLHttpRequest()

    btnSubmit.addEventListener("click", categories);

    function categories() {
        
        let userInput = inputCateg.value;
        // console.log(userInput);
        // divGameBoard.innerHTML = userInput
        URL = `${JEOPARDY_API}?count=${userInput}`

        HTTP.open("GET",URL,true)

        HTTP.onload=()=>
        {
            let response = JSON.parse( HTTP.responseText )
            console.log(response)

            for ( question  of response )   {
                Create_Div( id )
            }
        }
        HTTP.send()

    }
    function Create_Div( Data ) {

        let divGameBoard = document.createElement("div");
        divGameBoard.id = "divGBoard";
        divGameBoard.classList.add("divGBoard");
        divBaseBoard.appendChild(divGameBoard);
        // divGameBoard.innerHTML = "THIS IS IT!"

        let que = document.createElement( "div" )
        que.id = "idQuestion"
        que.innerHTML = Data.question
        divGameBoard.append(que)

    }

    



























































































});
