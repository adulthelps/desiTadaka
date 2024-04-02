import { Collection, INCREMENT, DECREMENT, RESET, FILTER } from './actionType';
import {collectionList} from '../reducer/collectionList'
import { IData } from '../reducer/collectionList';


interface ISelectCollectionAction {
  type: typeof Collection;
  payload: IData[];
}

let arr=collectionList()

export const selectCollection = ():ISelectCollectionAction => {
  return {
    type: Collection,
    payload: arr,
  };
};

export const increment=(val:number)=>{
return {
  type:INCREMENT,
  payload:val,
}
}
export const decrement=(val:number)=>{
return {
  type:DECREMENT,
  payload:val,
}
}
export const reset=(val:number)=>{
return {
  type:RESET,
  payload:val,
}
}
export const filter=(val:IData[])=>{
  return {
    type: FILTER,
    payload:val,
  }
}