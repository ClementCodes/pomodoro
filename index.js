/** @format */

const affichageTravail = document.querySelector(".affichageT");
const affichagePause = document.querySelector(".affichageP");
const btnGo = document.querySelector(".b1");
const btnPause = document.querySelector(".b2");
const btnReset = document.querySelector(".b3");
const cycles = document.querySelector("h2");

let checkInterval = false;
let tempsInitial = 2700;

let tempsDeRepos = 300;
let pause = false;

let nbreDeCycles = 0;

cycles.innerText = `Nombre de cycle ${nbreDeCycles}`;

affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}: ${
  tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
}`;
affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)}: ${
  tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
}`;

btnGo.addEventListener("click", () => {
  if (checkInterval === false) {
    checkInterval = true;

    tempsInitial--;

    affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}: ${
      tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
    }`;

    let timer = setInterval(() => {
      if (pause === false && tempsInitial > 0) {
        tempsInitial--;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}: ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
      } else if (pause === false && tempsDeRepos === 0 && tempsInitial === 0) {
        tempsInitial = 2700;
        tempsDeRepos = 300;
        nbreDeCycles++;
        cycles.innerText = `Nombre de cycle ${nbreDeCycles}`;

        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}: ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;

        affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)}: ${
          tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
        }`;
      } else if (pause === false && tempsInitial === 0) {
        tempsDeRepos--;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)}: ${
          tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
        }`;
      }

      //reset
      btnReset.addEventListener("click", () => {
        clearInterval(timer);
        checkInterval = false;
        tempsInitial = 2700;
        tempsDeRepos = 300;
        affichagePause.innerText = `${Math.trunc(tempsDeRepos / 60)}: ${
          tempsDeRepos % 60 < 10 ? `0${tempsDeRepos % 60}` : tempsDeRepos % 60
        }`;
        affichageTravail.innerText = `${Math.trunc(tempsInitial / 60)}: ${
          tempsInitial % 60 < 10 ? `0${tempsInitial % 60}` : tempsInitial % 60
        }`;
      });
    }, 1000);
  } else {
    return;
  }
});

btnPause.addEventListener("click", () => {
  if (pause === false) {
    btnPause.innerText = "Play";
  } else if (pause === true) {
    btnPause.innerText = "Pause";
  }
  //ici en gros le pause signifie de faire l'inverse  un peu comme un toggle en fait si c'est pause =  true il passe en false et vive et versa
  pause = !pause;
});
