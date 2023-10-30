// Don't even bother trying to figure this out - SHIT IS UNREADABLE ¯\_(ツ)_/¯
const curtain = document.getElementById("curtain");
const moveCurtain = document.getElementsByClassName("curtain-move");
const curtainTextLogin = document.getElementById("curtain-text-login");
const curtainTextRegister = document.getElementById("curtain-text-register");
const singnin = document.getElementById("signin");
const singnup = document.getElementById("signup");

[...moveCurtain].forEach((element) => {
  element.addEventListener("click", () => {
    if (curtain.classList.contains("right")) {
      setTimeout(() => {
        singnin.style.display = "none";
        singnup.style.display = "block";
      }, 250);
      singnin.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(220px)" }],
        {
          duration: 250,
          iterations: 1,
          fill: "forwards",
        }
      );
      singnup.animate(
        [
          { transform: "translateX(0px)" },
          { transform: "translateX(0px)" },
          { transform: "translateX(220px)" },
        ],
        {
          duration: 500,
          iterations: 1,
          fill: "forwards",
        }
      );
      curtainTextLogin.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(960px)" }],
        {
          duration: 500,
          iterations: 1,
          fill: "forwards",
        }
      );
      curtainTextRegister.animate(
        [{ transform: "translateX(0)" }, { transform: "translateX(960px)" }],
        {
          duration: 500,
          iterations: 1,
          fill: "forwards",
        }
      );
      curtain.animate(
        [
          { transform: "translateX(0)", borderRadius: "30% 30px 30px 30%" },
          { transform: "translateX(-100%)", borderRadius: "30px 30% 30% 30px" },
        ],
        {
          duration: 500,
          iterations: 1,
          fill: "forwards",
        }
      );
      curtain.classList.remove("right");
      curtain.classList.add("left");
    } else {
      setTimeout(() => {
        singnin.style.display = "block";
        singnup.style.display = "none";
      }, 250);
      singnin.animate(
        [
          { transform: "translateX(220px)" },
          { transform: "translateX(220px)" },
          { transform: "translateX(0px)" },
        ],
        {
          duration: 500,
          iterations: 1,
          fill: "forwards",
        }
      );
      singnup.animate(
        [{ transform: "translateX(220px)" }, { transform: "translateX(0px)" }],
        {
          duration: 250,
          iterations: 1,
          fill: "forwards",
        }
      );
      curtainTextLogin.animate(
        [{ transform: "translateX(960px)" }, { transform: "translateX(0)" }],
        {
          duration: 500,
          iterations: 1,
          fill: "forwards",
        }
      );
      curtainTextRegister.animate(
        [{ transform: "translateX(960px)" }, { transform: "translateX(0)" }],
        {
          duration: 500,
          iterations: 1,
          fill: "forwards",
        }
      );
      curtain.animate(
        [
          { transform: "translateX(-100%)", borderRadius: "30px 30% 30% 30px" },
          { transform: "translateX(0)", borderRadius: "30% 30px 30px 30%" },
        ],
        {
          duration: 500,
          iterations: 1,
          fill: "forwards",
        }
      );
      curtain.classList.remove("left");
      curtain.classList.add("right");
    }
  });
});
