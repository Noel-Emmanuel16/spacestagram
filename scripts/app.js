let output = document.querySelector(".container");

const api_key = "yN0g8ea18vf1HPiUlwOrGB1dgpoyYnJzpIjxXEjm";

const displayLoading = () => {
    output.innerHTML = `<div class="loading-container"><div class="loader"></div></div>`
}

const sendRequest = async () => {
    displayLoading();
    const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=100`
    );

    if (!response) throw Error("Error getting Images");

    const data = await response.json();
    console.log(data);
    let outputData = ``;

    data.map((data) =>
        data.url && data.url.includes(".jpg")
            ? (outputData += `

         <div class="card">
          <div class="card-header">
            <img
            src=${data.url} 
              alt=${data.title}
              class="avatar"
            />
            <span>
              <span>${data.title}</span>
              <span>${data.date}</span>
            </span>
          </div>
          <img
            src=${data.url}
            alt="card-image"
            class="card-image"
          />
          <div class="card-icons">
            <p>${data.explanation}</p>
          </div>
        </div>
         
  `)
            : null
    );

    output.innerHTML = outputData;
};

sendRequest();

