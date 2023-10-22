import { createSlice } from '@reduxjs/toolkit'
import termsData from '../../assets/api/join_terms'

const initialState={
    termsData
}

export const AthoritySlice = createSlice({
    name:'athority',
    initialState,
    reducers:{

    }

})

export const {} = AthoritySlice.actions
export default AthoritySlice.reducer