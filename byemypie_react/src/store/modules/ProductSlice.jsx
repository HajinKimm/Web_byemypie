import { createSlice } from '@reduxjs/toolkit'
import productList from '../../assets/api/products.json'

const initialState = { 
    productList: localStorage.getItem('byemypie')?
                JSON.parse(localStorage.getItem('byemypie')): productList,
    menufilter:[], //메뉴 타입에 맞는 데이터만 filter
    productTitle:'', //메뉴 타입 title 명칭
    sort :[
        {id:1, title: '신상품', eTitle:'New Item', isOn:false},
        {id:2, title: '낮은가격', eTitle:'Lowest Price', isOn:false},
        {id:3, title: '높은가격', eTitle:'Highest Price', isOn:false},
        {id:4, title: '상품후기', eTitle:'Product Review', isOn:false}
    ]
 } 
export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    onMenufilter:(state, action)=>{
        // console.log(action.payload)
        state.menufilter = state.productList.filter(i=>i.menuType.includes(action.payload))
        // console.log(state.menufilter)
        switch(action.payload){
            case 'case' : state.productTitle='phone case'; break;
            case 'tok' : state.productTitle='finger tok'; break;
            case 'airpods' : state.productTitle='airpods cas'; break;
            case 'keyring' : state.productTitle='keyring'; break;
            case 'etc' : state.productTitle='etc'; break;
            default : state.productTitle='없음';
        }
        // console.log(state.productTitle)
    },
    onSortProduct:(state, action)=>{
        // console.log(action.payload)
        // switch(action.payload){
        //     case 'New Item' : state.menufilter.sort((a,b)=>a.id-b.id); break;
        //     case 'Lowest Price' : state.menufilter.filter(i=>i.sale===0?i.price:i.sale).sort((a,b)=>a-b); break;
        //     case 'Highest Price' : state.menufilter.sort((a,b)=>b.sale===0?b.price-a.price:b.sale-a.price); break;
        // }
        console.log(state.menufilter.filter(i=>i.sale===0?i.price:i.sale))
    }
  }
})


export const { onMenufilter, onSortProduct } = ProductSlice.actions
export default ProductSlice.reducer