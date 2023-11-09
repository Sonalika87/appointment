var a = document.getElementById("btn");
a.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  console.log(name);
  var phone = document.getElementById("phone").value;
  console.log(phone);
  var email = document.getElementById("email").value;
  console.log(email);
  let myobj = {
    name: name,
    phone: phone,
    email: email,
  };
  let appoint = JSON.stringify(myobj);
  localStorage.setItem(email, appoint);
  displayUser(myobj);
});
function displayUser(obj) {
  const parentElem = document.querySelector(".item");
  const childElem = document.createElement("li");
  childElem.textContent = obj.name + "-" + obj.phone + "-" + obj.email + " ";
  parentElem.appendChild(childElem);
  const deletebtn = document.createElement("input");
  deletebtn.type = "button";
  deletebtn.value = "delete";
  childElem.appendChild(deletebtn);
  const editbtn=document.createElement("input");
  editbtn.type="button";
  editbtn.value="edit"
  childElem.appendChild(editbtn)
  deletebtn.onclick = () => {
    localStorage.removeItem(obj.email);
    parentElem.removeChild(childElem);
  }
  editbtn.onclick = () => {
    document.getElementById("name").value=obj.name
    document.getElementById("phone").value=obj.phone;
    document.getElementById("email").value=obj.email;
    localStorage.removeItem(obj.email);
    parentElem.removeChild(childElem)
  }
}

      
