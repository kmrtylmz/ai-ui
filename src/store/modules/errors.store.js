const initialState = () => ({
    api:{
      c_0001:'API not found',
      c_0002:'API does not have such a router',
      c_0003:'API is not active yet.',
    },
    permission:{
      c_0001:'You don\nt have permission to access this page.',
    }
    // ... 
});

const state = initialState();

export default {
  namespaced: true,
  state
}