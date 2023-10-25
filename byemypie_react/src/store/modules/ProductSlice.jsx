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
    ],
    pagingNumber:1
 } 
export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    onMenufilter:(state, action)=>{ //카테고리에 맞는 상품데이터 출력
        // console.log(action.payload)
        state.menufilter = state.productList.filter(i=>i.menuType===action.payload)
        console.log(state.menufilter)
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
    onSortProduct:(state, action)=>{ //데이터순서 정렬 (낮은가격, 높은가격 등)
        // console.log(action.payload)
        state.sort = state.sort.map(i=>i.eTitle===action.payload?{...i, isOn:true}:{...i, isOn:false})
        switch(action.payload){
            case 'New Item' : state.menufilter.sort((a,b)=>a.id-b.id); break;
            case 'Lowest Price' : state.menufilter.sort((a, b) =>a.sale===0?(b.sale===0?a.price - b.price:a.price - b.sale):(b.sale === 0?a.sale - b.price:a.sale - b.sale));break;
            case 'Highest Price' : state.menufilter.sort((a, b) =>a.sale===0?(b.sale===0?b.price - a.price:b.sale-a.price):(b.sale === 0?b.price-a.sale:b.sale - a.sale));break;
            case 'Product Review' : state.menufilter.sort((a,b)=>b.review-a.review);break;
            default : state.menufilter;
        }
    },
    onSortProductReset:(state)=>{
        state.sort = state.sort.map(i=>({...i, isOn:false}))
    },
    onCurrentPage:(state,action)=>{
        console.log(action.payload)
        state.pagingNumber = action.payload
    }
  }
})


export const { onMenufilter, onSortProduct,onSortProductReset,onCurrentPage } = ProductSlice.actions
export default ProductSlice.reducer