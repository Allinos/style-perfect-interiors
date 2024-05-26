const getFun = new DataCall()

async function AddPaymentsTODeal(data, e) {
    e.preventDefault();
    const target = data.dataset
    console.log(target, data, e);
    const advanceData = new FormData(document.getElementById('advanced-form'));
    advanceData.append('ndeal_id', Number(target.dealid));
    await getFun.GET_POST('admin/finance/add-payments', 'POST', advanceData, 'form')
    document.querySelector(`.main-dropdown`).style.display = `none`;
}

async function openDick(data) {
    document.getElementsByClassName('main')[0].classList.add('flow')
    const dealid = data.dealid;
    const maindropDown = document.querySelector(`.main-dropdown`);
    maindropDown.style.display = `block`;
    maindropDown.innerHTML = ""
    maindropDown.innerHTML = `<div class="finance-dropdown common_dropdown">
    <form id="advanced-form">
        <div class="flex">
            <p class="uppercase phead">Advance</p>
            <input type="text" name="amount_got" id="">
        </div>
        <div class="flex">
            <p class="uppercase phead">payment mode</p>
            <select name="modeofpay" id="">
                <option value="cash">Cash</option>
                <option value="online">Online</option>
            </select>
        </div>
        <div class="flex">
            <p class="uppercase phead">Date of payment</p>
            <input type="text" name="dateofpay" id="" placeholder="dd/mm/yyyy">
        </div>
        <div class = "drop-btn flex">
        <button type="button" class="uppercase" data-dealid=${dealid} onclick="AddPaymentsTODeal(this, event)">update</button>
        <button type = "reset" class = "uppercase" onclick="CloseModel('.main-dropdown')" >Cancel</button>
        </div></form></div>`}


async function openEdit(e, o) {
    document.getElementsByClassName('main')[0].classList.add('flow')
    let mainCtn = e.parentElement.parentElement;
    let amount = mainCtn.querySelector('.amount');
    let date = mainCtn.querySelector('.date');
    let mode = mainCtn.querySelector('.mode');
    const maindropDown = document.querySelector(`.main-dropdown`);
    maindropDown.style.display = `block`;
    maindropDown.innerHTML = ""
    maindropDown.innerHTML = `<div class="advance_dropdown common_dropdown">
    <div class="field">
        <p class="uppercase">f/p/id:</p>
        <p class="uppercase">${o}</p>
    </div>
    <div class="flex">
        <div class="field">
        <label for="" class="uppercase">Amount</label>
            <input type="text" name="amount" id="amount" value='${amount.innerText}'>
        </div>
        <div class="field">
        <label for="" class="uppercase">Date</label>
            <input type="text" name="date" id="date" value='${date.innerText}'>
        </div>
        <div class="field">
        <label for="" class="uppercase">Mode of Payment</label>
        <select name="mode" id="mode">
        <option value="cash">Cash</option>
        <option value="online">Online</option>
        </select>   
        </div>
    </div>
    <div class = "drop-btn flex">
        <button type="button" class="uppercase" onclick="UpdatePayments(this,${o})">update</button>
        <button type = "reset" class = "uppercase" onclick="CloseModel('.main-dropdown')" >Cancel</button>
        </div>
</div>`;
}

(function GetIncExp() {
    let Ctn = document.getElementsByClassName('total_user_data')
    ReqHandler.GET(location.origin + '/admin/finance/get-income-expense').then((res) => {
        if (res.status) {
            Ctn[0].children[0].children[0].innerText = res.data[1][0].total_sum
            Ctn[1].children[0].children[0].innerText = res.data[0][0].cash_sum
            Ctn[2].children[0].children[0].innerText = res.data[0][0].online_sum
        }
    }).catch(err => { console.log('Error(fn-ExpsUpdate):', err); })
})()

function CloseModel(e) {
    document.querySelector(e).style.display = 'none'
}

async function UpdatePayments(e, o) {
    let mainCtn = e.parentElement.parentElement;
    let amount = mainCtn.querySelector('#amount').value;
    let date = mainCtn.querySelector('#date').value;
    let mode = mainCtn.querySelector('#mode').value;
    let dataBody = { amount_got: amount, dateofpay: date, modeofpay: mode, fid: o }
    await getFun.GET_POST('admin/finance/update-payments', 'PUT', dataBody, 'form')
}
async function deletePayments(e, o) {
    let mainCtn = e.parentElement.parentElement;
    if (mainCtn.parentElement.children.length >1) {
        let res = await getFun.DEL_UPD(`admin/finance/delete-payments?fid=${o}`, 'DELETE')
        if(res.ok){ mainCtn.remove()}
    }else{
        getFun.GET_Notify('You Cann\'t Delete All Payments', 'Cann\'t Delete all payments . you can edit the last one', 'warning')
    }
}

function search() {
    var inpValue = document.getElementById('searchQuery').value.toLowerCase();
    var elmCtn = document.querySelectorAll('.accordion-content');
    elmCtn.forEach(function (e) {
        var contentText = e.textContent.toLowerCase();
        if (contentText.includes(inpValue)) {
            e.style.display = 'block';
        } else { e.style.display = 'none'; }
    });
}