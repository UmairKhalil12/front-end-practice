import { create } from 'zustand'

const appStore = create((set) => ({
  nav: false,
  handleNav: () => set((state) => ({ nav: !state.nav })),
  }))

export default appStore; 

