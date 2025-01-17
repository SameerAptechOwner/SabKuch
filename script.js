let productform = document.getElementById("productform") 
let productTable = document.getElementById("productTable") 




productform.addEventListener("submit", function () {
    event.preventDefault()


    let productName = document.getElementById("productSelect").value;
    let productQuantity = parseFloat(document.getElementById("productQuantity").value);
    let productPrice = parseFloat(document.getElementById("productPrice").value);
    let discount = parseFloat(document.getElementById("discount").value);
    let tax = parseFloat(document.getElementById("tax").value);


    const totalCost = productQuantity * productPrice;
    const discountAmount = (totalCost * discount) / 100;
    const taxAmount = ((totalCost - discountAmount) * tax)/ 100
    const finalCost = totalCost - discountAmount + taxAmount;


    let row = document.createElement("tr")


    row.innerHTML =`
    <td>${productName}</td>
    <td>${productQuantity}</td>
    <td>${productPrice.toFixed(2)}</td>
    <td>${discount}%</td>
    <td>${tax}%</td>
    <td>${totalCost.toFixed(2)}</td>
    <td>${finalCost.toFixed(2)}</td>
    `


    productTable.appendChild(row);


    
});