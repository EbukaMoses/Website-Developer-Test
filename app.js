const data = [
  {
    image: "./icon.png",
    name: "John Doe",
    email: "",
    age: "28 years old",
    info: "A passionate wildlife enthusiast and photographer, often found exploring nature.",
  },
  {
    image: "./icon.png",
    name: "Jane Smith",
    email: "janesmith@example.com",
    age: "",
    info: "An avid reader and aspiring n overlist, Jane loves spending her weekends at local cafes.",
  },
  {
    image: "",
    name: "",
    email: "mikebrown@example.com",
    age: "45 years old",
    info: "Tech-savvy and innovative, Sarah is known for her cutting-edge software solutions.",
  },
  {
    image: "./icon.png",
    name: "Sarah Johnson",
    email: "sarahjohnson@example.com",
    age: "30 years old",
    info: "A fitness enthusiast, Alex enjoys hiking and participating in marathons around the country.",
  },
  {
    image: "",
    name: "Alex martinez",
    email: "",
    age: "27 years old",
    info: "",
  },
];

// Function to render the template
function renderUserTemplate(data) {
  // Select the template and the container
  const template = document.getElementById("user-template");
  const container = document.querySelector(".users-container");
  
  

  // Clone the template content
  const userElement = template.content.cloneNode(true);
  //   const userElement = document.importNode(template.content, true);

  // Update the content with user data
  container.innerHTML += data?.map(
    (item, index) => `<div class="user-container" key='${index}' >
        <img src='${item.image}' alt="User Image" class="user-image" />
        <div class="user-details">
            <h2 class="user-name">${item.name}</h2>
            <p class="user-email">${item.email}</p>
            <p class="user-age">${item.age}</p>
            <p class="user-info">${item.info}</p>
        </div>

        <a class="btn-close">X</a>
    </div>`
  );
  
  


  // Append the cloned content to the container
  container.appendChild(userElement);
  console.log(userElement.innerHTML);
}

// Render the user template with the provided data
renderUserTemplate(data);



const closeBtn = document.querySelectorAll(".btn-close");


closeBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
       e.target.parentElement.classList.add("hide") 
    })
})