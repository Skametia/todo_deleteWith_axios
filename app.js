  document.getElementById("registrationForm")
  document.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const newUser = {
      name,
      email,
      password,
    };

    axios
      .post(
        "https://crudcrud.com/api/cf4a63de971049bc81cf39c7730ccc6e/user",
        newUser
      )
      .then(() => document.getElementById("registrationForm").reset())
      .catch((err) => console.log(err));
  });

function getUser() {
  axios
    .get("https://crudcrud.com/api/cf4a63de971049bc81cf39c7730ccc6e/user")
    .then((res) => {
      // const user = document.createElement("li")
      const userArr = res.data;
      userArr.map((user) => {
        const li = document.createElement("li");
        li.innerHTML = `${user.name} <button onclick="deleteUser('${user._id}')">Delete</button>`;
        li.id = user._id;
        document.getElementById("user").appendChild(li);
      });
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteUser(userId) {
  axios
    .delete(
      `https://crudcrud.com/api/cf4a63de971049bc81cf39c7730ccc6e/user/${userId}`
    )
    .then(() => {
      const userElement = document.getElementById(userId);
      if (userElement) {
        userElement.remove();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
