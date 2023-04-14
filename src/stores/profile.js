// Friend Model

import { Model } from "pinia-orm";

export default class Profile extends Model {
  // entity is a required property for all models.
  static entity = "profiles";

  static fields() {
    return {
      id: this.uid(),
      userID: this.attr(""),
      bio: this.attr(""),
      job: this.string(""),
    };
  }
}
