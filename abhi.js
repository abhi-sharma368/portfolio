const theme = () => {
  let btn = document.querySelector("#theme-btn");
  let bdy = document.querySelector("body");
  let icon = document.querySelector("#icon");
  let logo = document.querySelector("#logo");
  btn.addEventListener("click", () => {
    bdy.classList.toggle("light-theme");
    if (bdy.classList.contains("light-theme")) {
      icon.src = "images/night.png";
    } else {
      icon.src = "images/sun.png";
    }
  });
};
theme();

const threeDotMenu = () => {
  let menuBtn = document.querySelector("#menu-icon");
  let menu = document.querySelector("#menu");
  let mIcon = document.querySelector("#m-icon");
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hide-menu");
    if (menu.classList.contains("hide-menu")) {
      mIcon.src = "images/menuBar.png";
    } else {
      mIcon.src = "images/close.png";
    }
  });
};
threeDotMenu();

const aboutfunc = () => {
  let mySelf = document.querySelector("#myself");
  let education = document.querySelector("#education");
  let address = document.querySelector("#address");
  let myselfBtn = document.querySelector("#myself-btn");
  let educationBtn = document.querySelector("#education-btn");
  let addressBtn = document.querySelector("#address-btn");

  myselfBtn.addEventListener("click", () => {
    mySelf.classList.remove("hide");
    education.classList.add("hide");
    address.classList.add("hide");
    myselfBtn.style.borderColor = "var(--highlight)";
    educationBtn.style.borderColor = "var(--bg-txt)";
    addressBtn.style.borderColor = "var(--bg-txt)";
  });
  educationBtn.addEventListener("click", () => {
    education.classList.remove("hide");
    address.classList.add("hide");
    mySelf.classList.add("hide");
    myselfBtn.style.borderColor = "var(--bg-txt)";
    educationBtn.style.borderColor = "var(--highlight)";
    addressBtn.style.borderColor = "var(--bg-txt)";
  });
  addressBtn.addEventListener("click", () => {
    address.classList.remove("hide");
    education.classList.add("hide");
    mySelf.classList.add("hide");
    myselfBtn.style.borderColor = "var(--bg-txt)";
    educationBtn.style.borderColor = "var(--bg-txt)";
    addressBtn.style.borderColor = "var(--highlight)";
  });
};
aboutfunc();

function displayProject() {
  let projectContainer = document.querySelector("#project-container");
  if (!projectContainer) {
    return;
  }
  let innerHTML = "";
  projects.forEach((project) => {
    innerHTML += `<div class="project-card">
            <img src="images/${project.img}" alt="" />
            <div class="project-card-detail">
              <h2>${project.title}</h2>
              <p>${project.description}</p>
              <a href="${project.path}" target="_blank">${project.btnVal}</a>
            </div>
          </div>`;
  });

  projectContainer.innerHTML = innerHTML;
}
displayProject();
