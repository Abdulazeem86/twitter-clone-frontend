import axios from "axios"

const BASE_URL = "http://localhost:3001"

export const api = axios.create({
    baseURL:BASE_URL
})

export const validate = async (data) => {

    var Data = await api.post(`/signin`, data)
      .then(
        (res) => {
          if (res.data.status == "success") {

            let token = res.data.token;
            let userId = res.data.data._id;
            let username = res.data.data.username;
            let name = res.data.data.name;


            sessionStorage.setItem("token", token);
            sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("name", name);

          }
          else {
            alert("invalid credentials")
          }
        }
      )
      .catch((err) => {
        console.log(err)
      })
  }
