let form= document.querySelector('#gform');
form.addEventListener("submit",information);
let data=JSON.parse(localStorage.getItem("user"))||[]

function information(event){
    event.preventDefault()
    document.querySelector('#result').innerHTML="";
    let firstname=form.fname.value
    let lastname=form.Lname.value;
    let email=form.email.value;
    let password=form.password.value;
    let obj={
        firstname,
        lastname,
        email,
        password,
    }
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let p3=document.createElement("p")
    let divs=document.querySelector('#result');
    divs.style.fontFamily="sans-serif"
    divs.style.color="#7A7A7A"
    divs.style.marginTop="10px"
    divs.style.fontSize="14px"
    divs.style.lineHeight="20px"


    if((email=="" && password=="" && firstname=="")||(email=="" || password=="" || firstname=="")){
        p1.innerText="Sorry, looks like something went wrong. Please correct the following and submit again:"
        p2.innerText="*  The password field can't be blank"
        p3.innerText="*  The email field can't be blank"
        divs.append(p1,p2,p3)
        form.reset()

    }

    else{
        let check=data.filter(function(elem){
            return email==elem.email
        })
        if(check.length==0&& email!=""&& password!=""){
            data.push(obj)
            localStorage.setItem("user",JSON.stringify(data))
            form.reset()
        }
        else{
            p1.style.marginBottom= "10px"
            p1.innerText="Sorry, looks like something went wrong. Please correct the following and submit again:"
            p2.innerText="* This email address is already associated with an account. If this account is yours, you can reset your password"
            divs.append(p1,p2)
            form.reset()
        }
    }


    
}