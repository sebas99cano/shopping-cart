export const RECEIVE_PHONES = 'RECEIVE_PHONES'
export function receivePhones(phones){
    return{
        type: RECEIVE_PHONES,
        phones
    }
}
/*
export function _getPhones (){
    return new Promise((res, rej) =>{
        setTimeout(() => res({...phones
        }), 1000);
    });
}export function setInCart({id, inCart}){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            phones = {
                ...phones,
                id :{
                    ...phonesid ,
                    inCart: inCart
                }
            }
            res()
        }, 500);
    });
}
*/