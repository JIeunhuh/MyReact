import { atom, selector } from "recoil";
export const CntAtoms = atom({ //전역변수로 관리됨
    key : 'add',
    default : 0
});
export const CntAtomsTwice = selector({
    key : 'CntAtomsTwice',
    get : ({get})=>{
        return get(CntAtoms)*2;
    }
});