let APIURL = '';

switch(window.location.hostname){
    case 'localhost' || '127.0.0.1':
        APIURL= 'https://hidden-basin-37125.herokuapp.com/https://testtheirmightserver.herokuapp.com';
        break;
    case 'testtheirmightclient.herokuapp.com':
        APIURL = 'https://hidden-basin-37125.herokuapp.com/https://testtheirmightserver.herokuapp.com'
}

export default APIURL;