// ReqHandler Data  
BASE_URL = (location.origin + '/admin/inventory');
let ReqURI = { getUsedInventoryById: BASE_URL + `/get-material-from-project?pid=`, getLeftInventoryById: BASE_URL + `/get-material-from-leftstock?pid=`, getAllRef: BASE_URL + '/get-all-ref', getRefByDetails: BASE_URL + '/get-pname-from-ref?ref=', addStockTo: { used: BASE_URL + '/add-material-to-project', left: BASE_URL + '/add-material-to-leftstock' }, getAllmeterials: BASE_URL + '/get-material-from-list', removeParticulars: { used: BASE_URL + '/remove-material-from-project?muid=', left: BASE_URL + '/remove-material-from-leftstock?mlid=' },}


//ADD NEW ITEMS IN INVENTORY
let inventoryType = null;
function openInventoryExpense() {
    ReqHandler.GET(ReqURI.getAllRef).then(res => {
        let ctn = document.getElementById('refNo');
        ctn.innerHTML = `<option value="">Select Project</option>`;
        res.data.forEach(e => {
            ctn.innerHTML += `<option value="${e.id}">${e.reference_no}</option>`;
        })
    });
    document.querySelector(`.inventoryList`).classList.add('active');
    inventoryType = { used: true }
}
function openStockExpense() {
    ReqHandler.GET(ReqURI.getAllRef).then(res => {
        let ctn = document.getElementById('refNo');
        ctn.innerHTML = `<option value="">Select Project</option>`;
        res.data.forEach(e => {
            ctn.innerHTML += `<option value="${e.id}">${e.reference_no}</option>`;
        })
    });
    document.querySelector(`.inventoryList`).classList.add('active');
    inventoryType = { left: true }
}
function closeInventoryExpense() {
    document.querySelector(`.inventoryList`).classList.remove(`active`)
}
function proceedDiv(e) {
    let title = document.querySelector('.pro-name');
    ReqHandler.GET(ReqURI.getRefByDetails + e).then(res => {
        title.innerText = res.data[0].work_name;
    })
    let selectedRef = document.querySelector(`#refNo`),
        selectOption = selectedRef.options[selectedRef.selectedIndex];
    if (selectOption !== '') {
        document.querySelector(`.project-inv`).classList.add('active')
        document.querySelector(`.inventory-add-item`).classList.add('active')
    } else {
        document.querySelector(`.project-inv`).classList.remove('active')
        document.querySelector(`.inventory-add-item`).classList.remove('active')
    }

}
function showInventoryCtn(e, o) {
    (document.querySelectorAll('.filter-options>p')).forEach(e => { e.classList.remove('active') });
    (document.querySelectorAll('.inventory-container')).forEach(e => { e.style.display = 'none'; });
    o.classList.add('active');
    let ctn = document.querySelector(`#${e}`).style.display = 'block';
}

//ADD NEW ITEM
function addField() {
    let particularItem = document.querySelector(`.inv-particular`);
    let particularInnerCnt = document.querySelector(`#particulars`).innerHTML;
    let newItem = document.createElement('div');
    newItem.classList.add('inv-particular', 'flex', 'common');
    newItem.innerHTML = ` <div class="field">
    <label for="" class="uppercase">Particulars</label>
    <select name="Particulars" id="particulars" >
    </select>
</div>
<div class="field">
    <label for="" class="uppercase">Quantity</label>
    <input type="text" name="quantity" id="quantity">
</div>
<div class="field">
    <label for="" class="uppercase">Amount(In Rs)</label>
    <input type="text" name="amount" id="amount">
</div>
<div class="field">
<label for="" class="uppercase opacity">0</label>
<span onclick="deleteField(this)" class="btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash-alt" class="svg"><path fill="" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg></span>
</div>`;
    let newCtn = particularItem.parentNode.appendChild(newItem);
    newCtn.querySelector('#particulars').innerHTML = particularInnerCnt;
}

function addCustomField() {
    let particularItem = document.querySelector(`.inv-particular`);
    let newItem = document.createElement('div');
    newItem.classList.add('inv-particular', 'flex', 'custom');
    newItem.innerHTML = ` <div class="field">
    <label for="" class="uppercase">Particulars</label>
    <input type="text" name="particulars" id="particulars">
</div>
<div class="field">
    <label for="" class="uppercase">Quantity</label>
    <input type="text" name="quantity" id="quantity">
</div>
<div class="field">
    <label for="" class="uppercase">Amount(In Rs)</label>
    <input type="text" name="amount" id="amount">
</div>
<div class="field">
<label for="" class="uppercase opacity">0</label>
<span class="btn deletefield" onclick="deleteField(this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash-alt" class="svg"><path fill="" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg></span>
</div>`;
    particularItem.parentNode.appendChild(newItem);
}

function deleteField(e){e.parentElement.parentElement.remove()}
(async function getAllmeterials(params) {
    let particularInnerCnt = document.querySelector(`#particulars`);
    ReqHandler.GET(ReqURI.getAllmeterials).then((res) => {
        res.forEach(e => {
            particularInnerCnt.innerHTML += `<option value="${e.material_name}">${e.material_name}</option>`
        })
    })
})()

function showInventory(e, o, c) {
    let check=(o=='userInventoryCtn');
    let parent = c.parentElement;
    let [ref, projectName] = [parent.querySelectorAll('.inData')[0].innerText,
    parent.querySelectorAll('.inData')[1].innerText]
    ReqHandler.GET((check ? ReqURI.getUsedInventoryById : ReqURI.getLeftInventoryById) + e)
        .then((res) => {
            if (res.status) {
                document.querySelector(`.inventoryList-popup`).classList.add('active');
                let Newref = document.querySelectorAll('.project-refr>.inData')[0]
                let NewprojectName = document.querySelectorAll('.project-refr>.inData')[1];
                Newref.innerText = ref; NewprojectName.innerText = projectName;
                let payment_listCtn = document.querySelector('#tableData')
                let id = 0, total_price = 0;
                res.data.forEach(e => {
                    total_price += e.price;
                    let html = `<tr class="tableData" data-id="${check?e.muid:e.mlid}"><td>${++id}</td><td>${e.material_name}</td><td>${e.quantity}</td><td>&#8377;<span>${e.price}</span></td><td class="flex">
                <span onclick="editParticulars(this)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="pen" class="svg"><path fill="" d="M22,7.24a1,1,0,0,0-.29-.71L17.47,2.29A1,1,0,0,0,16.76,2a1,1,0,0,0-.71.29L13.22,5.12h0L2.29,16.05a1,1,0,0,0-.29.71V21a1,1,0,0,0,1,1H7.24A1,1,0,0,0,8,21.71L18.87,10.78h0L21.71,8a1.19,1.19,0,0,0,.22-.33,1,1,0,0,0,0-.24.7.7,0,0,0,0-.14ZM6.83,20H4V17.17l9.93-9.93,2.83,2.83ZM18.17,8.66,15.34,5.83l1.42-1.41,2.82,2.82Z"></path></svg>
                </span>
                <span onclick="deleteParticulars(this,${check?true:false})"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="trash-alt" class="svg"><path fill="" d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"></path></svg>
                </span></td></tr>`;
                    payment_listCtn.innerHTML += html;
                })
                document.getElementById('totalAmount').innerText = total_price;
            }
        }).catch(err => { console.log(err); })
}


function closeInventory() {
    document.querySelector(`.inventoryList-popup`).classList.remove('active');
    document.querySelector('#tableData').innerHTML = '';
}

function options() {
    document.querySelector(`.filter-options`).classList.toggle('hide');
}
// function opener() {
//     document.querySelector(`.add-btn`).classList.toggle('hide');
// }
function addInventoryItem(e) {
    e.preventDefault();
    document.getElementById('loading-container').classList.remove('hide')
    let checker = (inventoryType.used);
    let dataCtn = document.querySelectorAll('.inv-particular');
    let bodyData = {}; bodyData.items = [];
    let refId = document.getElementById('refNo').value;
    bodyData.pid = refId;
    dataCtn.forEach(e => {
        bodyData.items.push({
            item: e.querySelector('#particulars').value,
            qnt: e.querySelector('#quantity').value,
            amount: e.querySelector('#amount').value,
        })
    })
    ReqHandler.POST(checker ? ReqURI.addStockTo.used : ReqURI.addStockTo.left, bodyData)
        .then((res) => {
            if (res.status) {
                document.getElementById('loading-container').classList.add('hide')
                AlertNotify('Sucess', res.msg, 'success');
            } else {
                document.getElementById('loading-container').classList.add('hide')
                AlertNotify('Error!', "unable to retrive data", 'error');
            }
        })
}

function deleteParticulars(e,itemType) {
   let itemCtn=e.parentElement.parentElement;
   let id =itemCtn.dataset.id;
   ReqHandler.DEL(itemType?ReqURI.removeParticulars.used+id:ReqURI.removeParticulars.left+id)
        .then((res) => {
            if (res.status) {
                document.getElementById('loading-container').classList.add('hide')
                AlertNotify('Sucess', res.msg, 'success');
                itemCtn.remove();
                document.getElementById('totalAmount').style.display='none'
            } else {
                document.getElementById('loading-container').classList.add('hide')
                AlertNotify('Error!', "unable to retrive data", 'error');
            }
        })

    
}