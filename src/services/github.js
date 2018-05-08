import {
  GITHUB
} from '../consts';

class Github {
  constructor() {
    this.URL_ACCESS_TOKEN = 'https://github.com/login/oauth/access_token';
  }

  login(sessionCode) {
    return fetch(this.URL_ACCESS_TOKEN, {
      method: 'POST',
      body: JSON.stringify({
        "client_id": GITHUB.clientId,
        "client_secret": GITHUB.clientSecret,
        "code": sessionCode
      }),
      mode: 'no-cors',
      headers: new Headers({
        'X-Platform-Version': 1,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    });
  }
}


export default new Github();
