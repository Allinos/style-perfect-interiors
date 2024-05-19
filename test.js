


let newObj = {}
main.forEach(e => {
    if (!newObj.hasOwnProperty(e.id)) {
        newObj[e.id] = {
            id: e.id,
            ref: e.reference_no,
            title: e.deal_name,
            location: e.city,
        }
    }
})
const MainObject = Object.values(newObj);
const id_map = new Map();
MainObject.forEach(obj => id_map.set(obj.id, obj));
let matchingObj = []
dataFromSecondQuery.forEach(obj => {
    matchingObj = id_map.get(obj.ndeal_id);
    if (matchingObj) {
        if(!matchingObj.payments){

            matchingObj.payments = [];
        }
        matchingObj.payments.push({
            id: obj.ndeal_id,
            totalamount: obj.totalamount,
            amount_got: obj.amount_got,
            modeofpay: obj.modeofpay,
            dateofpay: obj.dateofpay
        });
    }
});

  console.log(MainObject);


