/**
 * 
 */
Click_count=0;

function to_proposal(){
    var name = document.getElementById('login_name').value;
    if (name != ""){
        document.getElementById('Love_name').innerText = name
        document.getElementById('Name').style.display = "none";
        document.getElementById('Love').style.display = "flex";
    }
    else{
        document.getElementById('login_name').style.border = "1px solid red";
        document.getElementById('login_name').setAttribute("placeholder", "Enter a name pookie");
    }
}

function No_move(ee){
    if (Click_count+1 > 4){
        ee.setAttribute('class', "no_funny");
        document.getElementById('funny_msg').innerText = "";
        document.getElementById('no').innerText = "No :("
    }
    else{
        click_options = ["click_one","click_two","click_three","click_four"]
        funny_msg = ["See, there's another option!!", "Don't follow me!!", "You don't wanna be princess :(", "Ok, I am yours!"]
        ee.setAttribute('class', click_options[Click_count]);
        document.getElementById('funny_msg').innerText = funny_msg[Click_count];
        Click_count += 1
    }
}

function open_yes_result(){
    document.getElementById('Love').style.display = "none";
    document.getElementById('Yes_Result').style.display = "flex";
}

function open_no_result(){
    document.getElementById('Love').style.display = "none";
    document.getElementById('No_Result').style.display = "flex";
}

function back_home(){
    document.getElementById('No_Result').style.display = "none";
    document.getElementById('Yes_Result').style.display = "none";
    document.getElementById('Name').style.display = "flex";
}
