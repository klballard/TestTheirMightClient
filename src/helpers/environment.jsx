let APIURL = '';

switch(window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL= 'http://testtheirmightserver.herokuapp.com';
        break;
    case 'testtheirmightclient.herokuapp.com':
        APIURL = 'http://testtheirmightserver.herokuapp.com'
}

export default APIURL;