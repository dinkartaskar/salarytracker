let total = 0;

function addExpense(){

  const name = document.getElementById("name").value;
  const amount = Number(document.getElementById("amount").value);

  if(name==="" || amount<=0){
    alert("Enter valid data");
    return;
  }

  total += amount;

  const li = document.createElement("li");

  li.innerHTML = `${name} - ₹${amount}`;

  document.getElementById("list").appendChild(li);

  document.getElementById("total").innerHTML =
    `Total: ₹${total}`;

  document.getElementById("name").value="";
  document.getElementById("amount").value="";
}
