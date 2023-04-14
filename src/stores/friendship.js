// friendship.js
// Friend Model

import { Model } from "pinia-orm";

export default class Friend extends Model {
  // entity is a required property for all models.
  static entity = "friends";

  static fields() {
    return {
      id: this.uid(),
      Username: this.string(""),
      Fullname: this.string(""),
      Age: this.string(""),
      Email: this.string(""),
    };
  }
}
