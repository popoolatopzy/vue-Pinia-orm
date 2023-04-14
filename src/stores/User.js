// Friend Model

import { Model } from "pinia-orm";
import Profile from "../stores/Profile";
export default class User extends Model {
  // entity is a required property for all models.
  static entity = "users";

  static fields() {
    return {
      id: this.uid(1),
      name: this.attr(""),
      email: this.string(""),
      profile: this.hasMany(Profile, "userID"),
    };
  }
}
