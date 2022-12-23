let parent = document.querySelector(".grid");

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((json) => render(json));

function render(post) {
  post.forEach((element) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.style.width = "370px";
    div.style.padding = "1rem";
    let h2 = document.createElement("h2");
    h2.textContent = element.postId;
    let pa = document.createElement("p");
    pa.textContent = element.body;
    pa.style.marginTop = "1rem";
    let a = document.createElement("a");
    a.classList.add("a");
    a.href = element.email;
    a.textContent = "EMAIL";

    let button = document.createElement("button");
    button.classList.add("button");
    button.textContent = element.id;

    let modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.width = "330px";
    modal.style.height = "150px";

    modal.textContent = element.name;
    button.addEventListener("click", function () {
      modal.style.display = "block";
    });

    let button2 = document.createElement("button");
    button2.classList.add("cansel");
    button2.textContent = "Cansel";

    modal.textContent = element.name;
    button2.addEventListener("click", function () {
      modal.style.display = "none";
    });

    modal.append(button2);

    div.append(h2, pa, a, button, modal);
    parent.appendChild(div);
  });
}
