const aa = {
    l:[{}],

}
 x =(state=aa ,action)=>{
switch (action) {
    case 'ajo':
        return {...state,l:[...state.l,action.py]}
    ;
    default:
        return state;
    }

}