const getFun = new DataCall()
async function updataAdvancePay(data, e) {
    e.preventDefault();
    const target = data.dataset
    const advanceData = new FormData(document.getElementById('advanced-form'));
    advanceData.append('ndeal_id', Number(target.dealid));
    await getFun.GET_POST('admin/finance/update-advancepay', 'PUT', advanceData, 'form')
    document.querySelector(`.main-dropdown`).style.display = `none`;;
}

async function openDick(data) {
    document.getElementsByClassName('main')[0].classList.add('flow')
    const { dealid } = data.dealid
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
        <button type="button" class="uppercase" data-dealid=${dealid} onclick="updataAdvancePay(this, event)">update</button>
        <button type = "reset" class = "uppercase" onclick="CloseModel('.main-dropdown')" >Cancel</button>
        </div>
    </form>
</div>`

}


async function openEdit() {
    document.getElementsByClassName('main')[0].classList.add('flow')
    // const { dealid } = data.dealid
    const maindropDown = document.querySelector(`.main-dropdown`);
    maindropDown.style.display = `block`;
    maindropDown.innerHTML = ""
    maindropDown.innerHTML = `<div class="advance_dropdown common_dropdown">
    <div class="field">
        <p class="uppercase">Installment No.</p>
        <p class="uppercase">1</p>
    </div>
    <div class="flex">
        <div class="field">
        <label for="" class="uppercase">Amount</label>
            <input type="text" name="" id="">
        </div>
        <div class="field">
        <label for="" class="uppercase">Date</label>
            <input type="text" name="" id="">
        </div>
    </div>
    <div class = "drop-btn flex">
        <button type="button" class="uppercase" ">update</button>
        <button type = "reset" class = "uppercase" onclick="CloseModel('.main-dropdown')" >Cancel</button>
        </div>
</div>`

}
(function GetIncExp() {
    let Ctn = document.getElementsByClassName('total_user_data')
    ReqHandler.GET(location.origin + '/admin/finance/get-income-expense').then((res) => {
        if (res.status) {
            Ctn[0].children[0].children[0].innerText = res.data[1][0].total_sum
            Ctn[1].children[0].children[0].innerText = res.data[0][0].cash_sum
            Ctn[2].children[0].children[0].innerText = res.data[0][0].online_sum}
    }).catch(err => {console.log('Error(fn-ExpsUpdate):', err);})})()

function CloseModel(e) {
    document.querySelector(e).style.display = 'none'
  }
  function search() {
    var inpValue = document.getElementById('searchQuery').value.toLowerCase();
    var elmCtn = document.querySelectorAll('.accordion-content');
    elmCtn.forEach(function(e) {var contentText = e.textContent.toLowerCase();
        if (contentText.includes(inpValue)) {e.style.display = 'block';
        } else {e.style.display = 'none'; }});}