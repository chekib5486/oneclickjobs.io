document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    var username=document.querySelector('#username').value;
    var password=document.querySelector('#password').value;

    if(username.length<5){
        alert('username should be longer than 5 characters');
        return false;
    }
    if(password.length<6){
        alert('the passwors should be longer than 6 characters');
        return false;
    }
    return true
});

