let APIURL = '';

switch(window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL= 'https://testtheirmightserver.herokuapp.com';
        break;
    case 'testtheirmightclient.herokuapp.com':
        APIURL = 'https://testtheirmightserver.herokuapp.com'
}

export default APIURL;