import create from 'zustand';

const useStore = create(set => ({
    cart: [],
}));

export default useStore;
