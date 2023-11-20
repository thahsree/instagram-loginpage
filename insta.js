
function email_fun() {
    let email = document.getElementById('email');
    let tick = document.getElementById('tick');
    let wrong = document.getElementById('wrong');
    regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(email.value.trim()==''){
        wrong.style.display="inline"
        tick.style.display="none"
        return false;
    }else if(!email.value.match(regExp)){
        wrong.style.display="inline"
        tick.style.display="none"
        return false;
    }else{
        wrong.style.display="none"
        tick.style.display="inline"
        return true;
    }
    
}

function name_fun(){
    let name = document.getElementById('full_name');
    let tick = document.getElementById('name_tick')
    let wrong = document.getElementById('name_wrong')

    if(name.value.trim()==''){
        wrong.style.display = "inline"
        tick.style.display ="none"
        return false;
    }else if(name.value.length <7){
        wrong.style.display = "inline"
        tick.style.display ="none"
        return false;
    }else{
        tick.style.display ="inline"
        wrong.style.display = "none"
        return true
    }


}

function user_fun(){
    let username = document.getElementById('user_name').value;
    let tick = document.getElementById('user_tick');
    let wrong = document.getElementById('user_wrong');
    let fullname = document.getElementById('full_name').value;
    let name = fullname.toUpperCase()
    let user = username.toUpperCase()
    if(user.length <=4 || user == name){
        wrong.style.display = 'inline'
        tick.style.display = 'none'
        return false;
    }else{
        tick.style.display = 'inline'
        wrong.style.display = 'none'
        return true;
    }
}

function pass_fun(){

    let password = document.getElementById('password').value;
    let username = document.getElementById('full_name').value;
    let userId = document.getElementById('user_name').value
    let pass = password.toUpperCase();
    let name = username.toUpperCase(); 
    let user = userId.toUpperCase();
    let tick = document.getElementById('pass_tick');
    let wrong = document.getElementById('pass_wrong');

    if(password.length<8 || password.length>15){
        wrong.style.display = 'inline';
        tick.style.display = 'none'
        return false;
    }else if(pass == name || pass == user){
        wrong.style.display = 'inline';
        tick.style.display = 'none'
        return false;
    }else{
        wrong.style.display = 'none';
        tick.style.display = 'inline'
        return true;
    }

}

function confirm_pass(){

    let confirm = document.getElementById('confirm_password').value;
    let password = document.getElementById('password').value;
    let tick = document.getElementById('confirm_tick');
    let wrong = document.getElementById('confirm_wrong');

    if(confirm !== password || confirm.length<8 || confirm.length>15){
        tick.style.display = 'none';
        wrong.style.display = 'inline';
        return false;
    }else{
        tick.style.display = 'inline';
        wrong.style.display = 'none';
        return true;
    }
}

function validate_form(){
    
    if(!user_fun() && !email_fun() && !name_fun() && !pass_fun() && !confirm_pass()){
        return false;
        
    }else{
        return true;
    }
}