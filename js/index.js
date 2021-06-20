//Container for HTML
const rootContainer = document.querySelector(".root");

//Conatiner to Split left and right
const leftContainer = document.createElement("div");
const rightContainer = document.createElement("div");

//classList for container
leftContainer.classList.add("leftContainer");
rightContainer.classList.add("rightContainer");

//imageContainer
const bgImgContainer = document.createElement("div");
bgImgContainer.classList.add("bgImgContainer");
bgImgContainer.id = "bgImgContainer";

const womanOnlineDesktop = document.createElement("div");
womanOnlineDesktop.classList.add("bgWomanDesktop");

const boxDesktop = document.createElement("div");
boxDesktop.classList.add("boxDesktop");

//Title Container for Right Side
const rightTitleContainer = document.createElement("div");
rightTitleContainer.classList.add("faqTitle");
rightTitleContainer.innerHTML = "FAQ";

//Array of sentence
const listSentences = [
  "How many team members can I invite?",
  "What is the maximum file upload size?",
  "All files in your accounts must fit your allotted storeage space.",
  "How do I reset my password?",
  "Can I cancel my subscription?",
  "Do you provide addition support?",
];

//Appends child to parents Containers
rootContainer.appendChild(leftContainer);
leftContainer.appendChild(bgImgContainer);
leftContainer.appendChild(womanOnlineDesktop);
leftContainer.appendChild(boxDesktop);
rootContainer.appendChild(rightContainer);
rightContainer.appendChild(rightTitleContainer);

//Appends setences along with creating Elements for the setence
for (let i = 0; i < listSentences.length; i++) {
  //Create Main Container for infoText
  const infoTextContainer = document.createElement("div");
  infoTextContainer.classList.add("infoTextContainer");

  //Container for text
  const infoText = document.createElement("div");
  infoText.innerText = listSentences[i];
  infoText.id = `item-${i}`;
  infoText.classList.add("infoText");

  //Container for arrowDown
  const arrowDown = document.createElement("div");
  arrowDown.classList.add("arrowDown");
  arrowDown.setAttribute("style", "transform:scaleY(1)");

  //onClickEvent to show p Container
  const infoInner = document.createElement("p");
  infoInner.innerText =
    "Eiusmod veniam officia reprehenderit minim amet officia.";
  infoInner.classList.add("infoInner");

  //Append Child
  rightContainer.appendChild(infoTextContainer);
  infoTextContainer.appendChild(infoText);
  infoTextContainer.appendChild(infoInner);
  infoText.appendChild(arrowDown);

  //ArrowDown EventListener
  arrowDown.addEventListener("click", (e) => {
    //Standard Target
    const target = e.target;
    //Reverse the arrowDown to arrowUp thru css.
    if (target.style.transform === "scaleY(1)") {
      target.style.transform = `scaleY(-1)`;
    } else {
      target.style.transform = `scaleY(1)`;
    }
    /* arrowUp.style.transform = `Scale(-1)`; */
    //ArrowDown Targets the next childComponent Thru a parentNode.
    let toggleOn = target.parentNode.nextSibling;
    toggleOn.classList.toggle("infoInner");
  });
}
