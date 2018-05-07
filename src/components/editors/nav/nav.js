import {
  LOCAL_STORAGE_KEY,
  GITHUB
} from "../../../consts";

import GithubApi from '../../../services/github';

export default {
  props: ['sourceType'],

  data() {
    return {
      clientId: GITHUB.clientId
    }
  },

  mounted() {
    let githubAuthCode = window.location.search.split("=")[1];

    if (githubAuthCode) {
      localStorage.setItem(LOCAL_STORAGE_KEY.AUTH_CODE, githubAuthCode);

      GithubApi.login(githubAuthCode).then(res => {
        console.log(res);
      });
    }
  }
};
