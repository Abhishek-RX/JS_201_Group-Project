
let form=document.querySelector('#gform')
form.addEventListener("submit",login);
function login(event) {
  event.preventDefault()
  let data = localStorage.getItem('user');
  data = JSON.parse(data)||[]
  let inputdata = document.getElementById("gform");
  let email = inputdata.email.value;
  let password = inputdata.password.value;
  let body=document.querySelector('#mess')
  body.innerHTML="";
  let h=document.createElement("h3");
  let p1=document.createElement("p");
  let p2=document.createElement("p")
  let serch=data.filter(function(elem){
    return email==elem.email
  })
  if(serch.length==0 && email!=''&&password!=""){
    p1.innerText="Sorry, looks like something went wrong. Please correct the following and submit again:"
    h.innerText="Sorry, You Don't have an account "
    h.style.marginTop="15px"
    h.style.color="red"
    p1.style.fontFamily="poppins Sans,sans serif"
    h.style.fontFamily="poppins Sans,sans serif"
    body.append(p1,h)
    form.reset()
  }
  else if((email==""&& password=="" )){
  h.innerText="Please Enter All Credentials"
  h.style.color="red"
  h.style.fontFamily="poppins Sans,sans serif"
  body.append(h)
  form.reset()
}
if(serch.length>0){
let flag=false;
for (let i = 0; i < data.length; i++) {
  if (email === data[i].email && password === data[i].password) {
    flag=true;
    break;
  }
  else{
  flag=false;
  }  
}
if(flag==true){
window.location.href = "navbar.html"
}
else{
  
  p1.innerText="Sorry, looks like something went wrong. Please correct the following and submit again:"
  p2.innerText=". Incorrect email or password."
  p2.style.marginTop="20px"
  p2.style.fontFamily="poppins Sans,sans serif"
  p1.style.fontFamily="poppins Sans,sans serif"
  let r= document.querySelector('#kapil>#mess');
  r.append(p1,p2)
  form.reset()
  }
}
}

