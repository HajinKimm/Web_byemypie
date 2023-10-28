import {createSlice} from '@reduxjs/toolkit'
import termsData from '../../assets/api/join_terms'

const initialState = {
    termsData
}

export const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    }
})

export const {} = UserSlice.actions
export default UserSlice.reducer