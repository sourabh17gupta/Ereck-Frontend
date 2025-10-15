import teamDetailReducer from './slice/TeamDetail'


export const store = configureStore({
  reducer: {
    teamDetail : teamDetailReducer,
  },
});
