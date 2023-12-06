const input = document.getElementById('input');
const buyBtn = document.getElementById('buyBtn');
const showHistoryBtn = document.getElementById('showHistoryBtn');
const tbody = document.getElementById('tbody');
const cashback = document.getElementById('cashback');
const cashBack = {
    history: [],
    calc: function(amount){
        if(!amount || amount==0){
            input.value = '';
            input.placeholder = 'filling is required!';
        }
        else{
            let cashBack =  (amount/100*3).toFixed(4);
            cashBack = parseFloat(cashBack);
            cashback.innerHTML = `+${cashBack} Cashback`;
            cashback.style.padding = '10px';
            setTimeout(function() {
                cashback.innerHTML = '';
                cashback.style.padding = '0px';
            }, 4000);
            input.placeholder = '';
            input.value = '';
            let cashbackInfo = {
                cashback: cashBack,
                amount: amount,
                date: new Date(),
            }
            this.history.push(cashbackInfo);
        }
    },
    showHistory: function(){
        table.style.display = 'block';
        let content = this.history;
        let newContent = content.map((item, index)=>{
        return `
        <tr>
        <td>${index+1}</td>
        <td>${item.cashback}</td>
        <td>${item.amount}</td>
        <td>${item.date.getDate()}.${item.date.getMonth()}.${item.date.getFullYear()} | ${item.date.getHours()}:${item.date.getMinutes()}</td>
        </tr>
        `}).join('');
        tbody.innerHTML = newContent;
    }
}

buyBtn.addEventListener('click', function(){
    cashBack.calc(input.value);
});

showHistoryBtn.addEventListener('click', function(){
    cashBack.showHistory();
})