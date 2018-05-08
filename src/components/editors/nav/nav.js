import {
  GITHUB
} from "../../../consts";

export default {
  props: ['sourceType'],

  data() {
    return {
      clientId: GITHUB.clientId
    }
  }

};
