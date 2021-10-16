import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { 
    FLUSH, 
    REHYDRATE, 
    PAUSE, 
    PERSIST, 
    PURGE, 
    REGISTER 
} from 'redux-persist';
import logger from 'redux-logger'
import { combineReducer } from "./redusers";

const middleware = [...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
    }), 
    logger,
];


const store = configureStore({
    reducer: {
        contacts: combineReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});

export { store };