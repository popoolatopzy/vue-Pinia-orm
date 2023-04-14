<script>
// import Friend from "@/stores/friendship";
import { useRepo } from "pinia-orm";
import { createPinia, getActivePinia } from "pinia";
import { createORM } from "pinia-orm";
import Friend from "../stores/friendship";
const pinia = createPinia().use(createORM());

const useRepo1 = useRepo(Friend, pinia);
useRepo1.save({
  Username: "1this",
  Fullname: "2this",
  Age: "3ddd",
  Email: "4dddd",
});
console.log(getActivePinia().state.value);

export default {
  methods: {},
};
</script>
<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <center>
      <div
        style="width: 70%; height: 60px  margin-bottom: 20px;  margin-top: 100px;"
      >
        lll
      </div>
    </center>
  </div>
</template>
