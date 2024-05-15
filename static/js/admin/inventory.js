//ADD NEW ITEMS IN INVENTORY
function addInventoryExpense(){
    document.querySelector(`.inventoryList`).classList.add('active');
}
function closeInventoryExpense(){
    document.querySelector(`.inventoryList`).classList.remove(`active`)
}
function proceedDiv(){
    let selectedRef = document.querySelector(`#refNo`),
    selectOption = selectedRef.options[selectedRef.selectedIndex];
    console.log(selectedRef.options[selectedRef.selectedIndex].value);
    if(selectOption !== ''){
        document.querySelector(`.project-inv`).classList.add('active')
        document.querySelector(`.inventory-add-item`).classList.add('active')
    }else{
        document.querySelector(`.project-inv`).classList.remove('active')
        document.querySelector(`.inventory-add-item`).classList.remove('active')
    }

}

async function addInventory(){
    let particularItem = document.querySelector(`.inv-particular`);
    let newItem = document.createElement('div');
    newItem.classList.add('inv-particular', 'flex', 'common');
    newItem.innerHTML =` <div class="field">
    <label for="" class="uppercase">Particulars</label>
    <select name="" id="" onchange="">
    <option value="">Bricks</option>
    <option value="">Cement</option>
    <option value="">Fevicol</option>
    <option value="">Tiles</option>
    </select>
</div>
<div class="field">
    <label for="" class="uppercase">Quantity</label>
    <input type="text" name="quantity" id="">
</div>
<div class="field">
    <label for="" class="uppercase">Amount(In Rs)</label>
    <input type="text" name="amount" id="">
</div>`;
    particularItem.parentNode.appendChild(newItem)
    console.log(particularItem.parentNode);

}
async function addCustom(){
    let particularItem = document.querySelector(`.inv-particular`);
    let newItem = document.createElement('div');
    newItem.classList.add('inv-particular', 'flex', 'custom');
    newItem.innerHTML =` <div class="field">
    <label for="" class="uppercase">Particulars</label>
    <input type="text" name="particulars" id="">
</div>
<div class="field">
    <label for="" class="uppercase">Quantity</label>
    <input type="text" name="quantity" id="">
</div>
<div class="field">
    <label for="" class="uppercase">Amount(In Rs)</label>
    <input type="text" name="amount" id="">
</div>`;
    particularItem.parentNode.appendChild(newItem)
    console.log(particularItem.parentNode);

}

function showInventory(){
    document.querySelector(`.inventoryList-popup`).classList.add('active');
}
function closeInventory(){
    document.querySelector(`.inventoryList-popup`).classList.remove('active');
}

