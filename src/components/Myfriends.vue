<script>
import { useRepo } from "pinia-orm";
import { createPinia } from "pinia";
import { createORM } from "pinia-orm";
import Friend from "../stores/friendship";
const pinia = createPinia().use(createORM());

const useRepo1 = useRepo(Friend, pinia);

export default {
  computed: {
    friend_list: () => useRepo1.all(),
  },
  data() {
    return {
      form: {
        username: "",
        fullname: "",
        age: "",
        email: "",
      },
    };
  },

  methods: {
    addfriend() {
      useRepo1.save({
        Username: this.form.username,
        Fullname: this.form.fullname,
        Age: this.form.age,
        Email: this.form.email,
      });
      console.log(useRepo1.all());
    },
  },
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
        style="
          width: 100%;
          height: 60px;
          margin-bottom: 20px;
          margin-top: 100px;
        "
      >
        <div>
          <label for="">Username</label>
          <input v-model="form.username" />
          <label for="">Fullname</label>
          <input v-model="form.fullname" /> <br />
          <br />
          <label for="">Age</label>
          <input v-model="form.age" />
          <label for="">Email</label>
          <input v-model="form.email" />
          <br /><br />
          <button @click="addfriend" class="btn-link">Add Friend</button>
        </div>
        <br /><br /><br />
        <div class="container">
          <h2>My Friend List</h2>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Username</th>
                <th>Fullname</th>
                <th>Age</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="friend in friend_list">
                <td>{{ friend.Username }}</td>
                <td>{{ friend.Fullname }}</td>
                <td>{{ friend.Age }}</td>
                <td>{{ friend.Email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </center>
  </div>
</template>
