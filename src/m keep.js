import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");

//
//
//
//
//
//

// import { createApp } from "vue";
// import { createPinia, getActivePinia } from "pinia";
// import Friend from "@/stores/friendship";
// import App from "./App.vue";
// import { useRepo } from "pinia-orm";

// import "./assets/main.css";
// // const userRepo = useRepo(Friend, this.$pinia);
// const app = createApp(App);

// app.use(createPinia());

// app.mount("#app");
// const userRepo = useRepo(Friend, this.pinia);

// userRepo.save({
//   Username: "this",
//   Fullname: "this",
//   Age: "ddd",
//   Email: "dddd",
// });
// console.log(getActivePinia().state.value);
// console.log(useRepo(Friend));

// import { createApp } from "vue";
// import { createPinia } from "pinia";
// import "./assets/main.css";
// import Friend from "@/models/Friend";
// import App from "./App.vue";

// const app = createApp(App);
// // ✅ works because the pinia instance is passed to defineStore

// app.use(createPinia());
// const userRepo = useRepo(Friend, this.$pinia);
// app.mount("#app");
