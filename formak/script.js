// Belső állapot
let state = {
  kör: 0,
  négyzet: 0,
  téglalap: 0,
};


// 1. Selecteld ki id alapján a form elementet és submit eseményre 
// köss be funkcionalitást
document.getElementById("shapes").addEventListener("submit", (event) => {
  event.preventDefault();

// 2. Az esemény bekövetkezésekor olvasd ki az input mezőkben lévő adatokat
  let shapeName = event.target.selectedShape.value;
  let action = event.target.action.value;
  console.log(action, shapeName);

// 3. Az adatok alapján módosítsd az alkalmazás belső állapotát
  if (action === "növelés") {
    state[shapeName]++
  }
  else if (action === "csökkentés") {
    state[shapeName]--
  }

  render()

})


// 4. A belső állapot alapján rajzold újra a formákat
function render() {
  document.getElementById("sh-circle").innerHTML = state.kör
  document.getElementById("sh-square").innerHTML = state.négyzet
  document.getElementById("sh-rectangle").innerHTML = state.téglalap
}