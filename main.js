fetch("http://openAPI.seoul.go.kr:8088/54794f504174616e37315445456869/json/RealtimeCityAir/1/25")
  .then((response) => response.json())
  .then((data) => {
    for (i = 0; i <= 25; i++) {
      const section = document.querySelector("section");
      const city = document.createElement("h3");
      const time = document.createElement("h5");
      const pm10 = document.createElement("p");
      const state = document.createElement("span");
      const pm25 = document.createElement("p");
      const nano_state = document.createElement("span");
      const line = document.createElement("div");
      dust = data.RealtimeCityAir.row[i];

      section.appendChild(city);
      section.appendChild(time);
      section.appendChild(pm10);
      section.appendChild(state);
      section.appendChild(pm25);
      section.appendChild(nano_state);
      section.appendChild(line);

      city.innerText = `권역명 : ${dust.MSRSTE_NM}`;
      time.innerText = `측정일시 : ${dust.MSRDT}`;
      pm10.innerText = `미세먼지 : ${dust.PM10} ㎍/㎥`;
      pm25.innerText = `초미세먼지 : ${dust.PM25} ㎍/㎥`;

      if (0 <= dust.PM10 <= 50) {
        state.innerText = "좋음";
      } else if (51 <= dust.PM10 <= 100) {
        state.innerText = "보통";
      } else if (101 <= dust.PM10 <= 250) {
        state.innerText = "나쁨";
      } else if (251 <= dust.PM10 <= 550) {
        state.innerText = "매우 나쁨";
      } else {
        state.innerText = "점검중";
      }

      if (0 <= dust.PM25 <= 50) {
        nano_state.innerText = "좋음";
      } else if (51 <= dust.PM25 <= 100) {
        nano_state.innerText = "보통";
      } else if (101 <= dust.PM25 <= 250) {
        nano_state.innerText = "나쁨";
      } else if (251 <= dust.PM25 <= 550) {
        nano_state.innerText = "매우 나쁨";
      } else {
        nano_state.innerText = "점검중";
      }
    }
  });
