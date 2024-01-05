function joined(){
    let title  = document.getElementById('title');
    let btn = document.getElementById('btn');
    title.innerText = 'Thanks for joining the session live!';
    btn.style.display = 'none'
}
function welcome(){
    let name = document.getElementById('name');
    console.log(name.value)
    let welcomeName = document.getElementById('welcomeName');
    welcomeName.innerText = name.value;
    name.value = '';
}


function split(){
    let amount = document.getElementById('amount');
    let persons = document.getElementById('persons');
    if(persons.value == 0){
        bill = 'Add atleast two users to split the  bill!';
        let result = document.getElementById('result');
        result.innerText = bill
    }
    else{
        let bill = (amount.value / persons.value).toFixed(2);
        let result = document.getElementById('result');
        result.innerText = bill
    }
    
    
}
function bmi(){
    let height=document.getElementById('height');
    let weght=document.getElementById('weight');
    let result=document.getElementById('result');
    var h= parseFloat(height.value);
    var w=parseFloat(weght.value);
    if ((isNaN(h)) || (isNaN(w))) {
        alert('Enter proper values!');
    }
    else{
        var bmi=(w/((h*h)/10000));
        result.innerHTML=bmi.toFixed(2);
    }

}

let demo = document.getElementById('demo');
demo.innerHTML = '<h1>This is the intro to DOM!</h1>'