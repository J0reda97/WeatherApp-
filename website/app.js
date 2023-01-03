/* Global Variables */
const apiKey = "9e4228af546b4a3fe6ea6483686d366f&units=metric";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

let generate = document.getElementById("generate");

generate.addEventListener("click", async () => {
  try {
    let zipCode = document.getElementById("zip").value;
    let feelings = document.getElementById("feelings").value;
    // get temp
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
    const response = await fetch(url).then((res) => res.json());
    const temp = await response.main.temp;
    // console.log(temp);
    // post temp
    await fetch("/addWeather", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        newDate,
        temp,
        feelings,
      }),
    });

    const result = await fetch("/getWeather").then((res) => res.json());
    document.getElementById("date").innerHTML += result.date;
    document.getElementById("temp").innerHTML += result.temp + "&#8451;";
    document.getElementById("content").innerHTML += result.feelings;
  } catch (err) {
    console.error("Error found", err);
  }
});
