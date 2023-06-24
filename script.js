function calc(){
    let billAmount = parseInt(document.getElementById('billAmount').value);
    let tipPer = parseInt(document.getElementById('tipPer').value);

    let tipAmount = (billAmount*tipPer)/100;
    document.getElementById('tipAmount').innerHTML = `Tip Amount : Rs.${tipAmount}`;

    // Total Amount
    totalAmount.innerHTML = `Total Amount : Rs. ${tipAmount + billAmount}`;
}

function res(){
    document.getElementById('tipAmount').value = `Tip Amount : `;
    document.getElementById('totalAmount').value = `Total Amount : `;
    document.getElementById('billAmount').value = '';
    document.getElementById('tipPer').value = '';
   
}