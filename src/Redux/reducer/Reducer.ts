import {Collection, DECREMENT, FILTER, INCREMENT, RESET, } from '../action/actionType'
import { collectionList } from './collectionList';
import { IData } from './collectionList';

  interface ISelectCollectionAction {
    type: typeof Collection;
    payload: IData[];
  }

  interface IFilterCollection {
    type: typeof FILTER,
    payload:IData[];
  }
  interface IIncPageNumAction {
    type: typeof INCREMENT;
    payload: number;
  }
  interface IDecPageNumAction {
    type: typeof DECREMENT;
    payload: number;
  }
  interface IReset {
    type: typeof RESET;
    payload: number;
  }

interface IState{
 CollectionData:IData[];
 PageNum:number;
 FilterData:IData[];
}
let arr=collectionList()

let initialState={
  CollectionData: arr,
  PageNum:1,
  FilterData:[]
}

type ActionType=ISelectCollectionAction|IIncPageNumAction|IDecPageNumAction|IReset|IFilterCollection

export const  collectionReducer=(state:IState=initialState, action:ActionType)=>{
  switch (action.type) {
    case Collection:
      console.log("action payload",action.payload);
      return{
        ...state, CollectionData:action.payload
      }
    case INCREMENT:
      console.log("page", action.payload);
      return {
        ...state, PageNum:action.payload + state.PageNum
      } 
    case DECREMENT:
      return{
        ...state, PageNum:state.PageNum-action.payload
      }  
    case RESET:  
        return{
          ...state, PageNum:action.payload
        }
    case FILTER:
      return{
        ...state, FilterData:action.payload
      }    
      default:
     return state;
  }
}


