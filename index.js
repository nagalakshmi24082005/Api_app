const button1 = document.getElementById('btn1');
const jokecontent = document.getElementById('jokecontent');
const joke = document.getElementById('joke');
const button2 = document.getElementById('btn2');
const advicecontent = document.getElementById('advicecontent');
const button3 = document.getElementById('btn3'); // Random cat image button
const imagecontent = document.getElementById('imagecontent');

button1.onclick = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
        .then(function (response) {
            button1.textContent = "Next";
            jokecontent.textContent = response.data.setup;
            joke.textContent = "";
            setTimeout(function () {
                joke.textContent = response.data.punchline;
            }, 5000);
        })
        .catch(function (error) {
            console.log(error);
        });
};

button2.onclick = () => {
    axios.get('https://api.adviceslip.com/advice')
        .then(function (response) {
            button2.textContent = "Next";
            const adviceText = response.data.slip.advice;
            advicecontent.textContent = adviceText;
        })
        .catch(function (error) {
            console.log(error);
        });
};

button3.onclick = () => {
    axios.get('https://api.thecatapi.com/v1/images/search')
        .then((response) => {
            button3.textContent = "Next Cat";
            const imageUrl = response.data[0].url;
            imagecontent.innerHTML = `<img src="${imageUrl}" alt="Random Cat" style="max-width: 100%; border-radius: 10px;">`;
        })
        .catch((error) => {
            console.error("Error fetching image:", error);
        });
};
