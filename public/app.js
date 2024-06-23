"use strict";
function createMainTweet() {
    const id = crypto.randomUUID();
    const tweet = createTweet();
    return {
        id,
        tweets: [tweet],
    };
}
function createTweet() {
    const id = crypto.randomUUID();
    const message = '';
    return {
        id,
        message
    };
}
// Función para renderizar la vista de tweets en el DOM
function renderView(tweetView) {
    var _a;
    let view = document.querySelector("#container-" + tweetView.id);
    if (view) {
        view.innerHTML = ""; // Limpia el contenido existente si la vista ya existe
    }
    else {
        view = document.createElement("div");
        view.id = "container-" + tweetView.id;
        view.classList.add("mainContainer");
        (_a = document.querySelector("#tweets")) === null || _a === void 0 ? void 0 : _a.append(view); // Añade la vista al contenedor de tweets en el DOM
    }
    // Renderiza cada tweet dentro del TweetView   
    for (let i = 0; i < tweetView.tweets.length; i++) {
        renderTweet(tweetView, view, tweetView.tweets[i], i == tweetView.tweets.length - 1 // Indica si es el último tweet para mostrar el botón "Add another tweet"
        );
    }
}
// Función para renderizar un tweet individual dentro de la vista de tweets
function renderTweet(tweetView, view, tweet, last) {
    const tweetContainer = document.createElement("div");
    tweetContainer.id = "container-" + tweet.id;
    tweetContainer.classList.add("tweetContainer");
    const form = document.createElement('form');
    form.id = 'form-' + tweet.id;
    tweetContainer.appendChild(form);
    const countContainer = document.createElement("div");
    countContainer.classList.add("countContainer");
    const textarea = document.createElement('textarea');
    textarea.id = 'textarea' + tweet.id;
    textarea.value = tweet.message;
    textarea.maxLength = 250;
    countContainer.textContent = textarea.value.length.toString() + "/250";
    const buttonAddMore = document.createElement("button");
    buttonAddMore.classList.add("button", "buttonNew");
    buttonAddMore.value = "Add another tweet";
    buttonAddMore.append(document.createTextNode("Add another tweet"));
    // Listener para añadir otro tweet cuando se hace clic en el botón
    buttonAddMore.addEventListener('click', e => {
        e.preventDefault();
        const anotherTweet = createTweet(); // Crea un nuevo tweet
        tweetView.tweets.push(anotherTweet); // Añade el nuevo tweet al array de tweets en TweetView
        renderView(tweetView); // Vuelve a renderizar la vista para mostrar el nuevo tweet
    });
    // Listener para actualizar el contenido del tweet cuando se escribe en el textarea
    textarea.addEventListener('input', e => {
        const value = e.target.value;
        countContainer.textContent = value.length.toString() + "/250"; // Actualiza el contador de caracteres
        updateTweet(tweetView, tweet, value); // Actualiza el mensaje del tweet en el objeto Tweet correspondiente
    });
    form.append(textarea, countContainer);
    if (last) {
        form.appendChild(buttonAddMore); // Añade el botón "Add another tweet" al último tweet renderizado
    }
    view.appendChild(tweetContainer); // Añade el contenedor del tweet al DOM dentro de la vista
}
// Función para actualizar el mensaje de un tweet específico en el TweetView
function updateTweet(tweetView, tweet, value) {
    let ref = null;
    for (let i = 0; i < tweetView.tweets.length; i++) {
        const t = tweetView.tweets[i];
        if (t.id == tweet.id) {
            ref = t; // Encuentra el tweet dentro del array de tweets en TweetView
        }
    }
    if (ref) {
        ref.message = value; // Actualiza el mensaje del tweet con el nuevo valor
    }
}
// Evento al hacer clic en el botón para crear un nuevo TweetView y renderizarlo
const bNewTweet = document.querySelector("#bNewTweet");
const tweetsContainer = document.querySelector('#tweets');
const tweetsData = [];
bNewTweet.addEventListener('click', e => {
    e.preventDefault();
    const newTweetView = createMainTweet(); // Crea un nuevo TweetView inicial
    renderView(newTweetView); // Renderiza la vista del nuevo TweetView en el DOM
});
