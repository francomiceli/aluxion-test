import axios from "axios";

const aluxionerApiClient = axios.create({
  baseURL: "https://prueba-aluxion-default-rtdb.firebaseio.com/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAluxioners() {
    return aluxionerApiClient.get("aluxioners.json");
  },
  getAluxioner(id: any) {
    return aluxionerApiClient.get('aluxioners.json/' + id)
  }
};