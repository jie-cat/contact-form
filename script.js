let form = document.querySelector("form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let msgInput = document.querySelector("#message");
let errorNodes = document.querySelectorAll(".error");
let success = document.querySelector("#success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  clearMessage();

  validateForm();
});

let validateForm = () => {
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "名字不能空白";
    nameInput.classList.add("error-border");
    errorFlag = !errorFlag;
  }
  if (!validateEmail(emailInput.value)) {
    errorNodes[1].innerText = "信箱格式錯誤,認證失敗";
    emailInput.classList.add("error-border");
    errorFlag = !errorFlag;
  }
  if (msgInput.value.length < 1) {
    errorNodes[2].innerText = "意見必須填寫";
    msgInput.classList.add("error-border");
    errorFlag = !errorFlag;
  }

  if (!errorFlag) {
    success.innerText = "成功送出!!!";
  }
};

let validateEmail = (email) => {
  let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return pattern.test(email); //boolean
};

let clearMessage = () => {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove();
  emailInput.classList.remove();
  msgInput.classList.remove();
};
