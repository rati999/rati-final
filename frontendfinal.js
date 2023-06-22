document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const topProfilesContainer = document.querySelector(".top-profiles");
        const bottomProfilesContainer =

          document.querySelector(".bottom-profiles");

        data.slice(0, 6).forEach((client, index) => {

          const profile = document.createElement("p");
          profile.className = "profile";
          profile.id = index < 3 ? "top" : "bottom";

          const name = document.createElement("p");
          name.className = "name";
          name.textContent = client.name;

          const profileInfo = document.createElement("div");
          profileInfo.className = "profile-info";

          const id = document.createElement("h5");
          id.textContent = `ID: ${client.id}`;

          const email = document.createElement("h5");
          email.textContent = `Email: ${client.email}`;

          const phone = document.createElement("h5");
          phone.textContent = `Phone: ${client.phone}`;

          profileInfo.appendChild(id);
          profileInfo.appendChild(email);
          profileInfo.appendChild(phone);

          const select = document.createElement("div");
          select.className = "select";

          const button = document.createElement("button");
          button.textContent = "Select User";

          select.appendChild(button);

          profile.appendChild(name);
          profile.appendChild(profileInfo);
          profile.appendChild(select);

          if (index < 3) {
            topProfilesContainer.appendChild(profile);
          } else {
            bottomProfilesContainer.appendChild(profile);
          }
        });

        const selectUserButtons = document.querySelectorAll(".select button");
        selectUserButtons.forEach((button, index) => {
          button.addEventListener("click", () => {
            const userIdInput = document.querySelector(".new_post input#id");
            const userId = data[index].id;
            userIdInput.value = userId;
            userIdInput.disabled = true;

          });
        });
     })
      .catch((error) => {
        console.log("Error:", error);
      });

    const sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", () => {
      const id = document.getElementById("id").value;
      const title = document.getElementById("teqsti").value;
      const body = document.getElementById("body").value;

      if (id && title && body) {
        const postData = {
          userId: id,
          title: title,
          body: body,
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Post created:", data);
          })
          .catch((error) => {
            console.log("Error:", error);
          });
      } else {
        console.log("Please fill in all fields");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        const photos = data.slice(0, 6);

        const kubikebi = document.getElementById("kubikebi");
        photos.forEach((photo) => {
          const img = document.createElement("img");
          img.src = photo.url;
          img.alt = photo.title;
          kubikebi.appendChild(img);
        });
      })
      
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  });