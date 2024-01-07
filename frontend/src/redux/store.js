import { configureStore } from '@reduxjs/toolkit';
import axios from "axios";


import  {userReducer} from "./reducers/user"

const Store = configureStore({
    reducer:{
        user: userReducer
    }
})

export default Store