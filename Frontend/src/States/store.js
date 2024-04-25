import {create} from 'zustand'
import items from '../SampleData/items'

const useStore = create((set)=> ({
    user: null,
    showAccordingToTypeOfShops:true,
    catogory:"all",
    cart:()=>{
        /*
        fetch("")
        .then(res => res.json())
        .then(data => data)

        */
       return items.slice(0,5);  //for demo purpose only
    },
    setUser:(user)=>{
        set({user})
    },
    setCatogory : (cat)=>{
        set({catogory:cat})
    },
    changeShowAccodingToTypeOfShops:()=>{
        set((state)=>{
            if(state.showAccordingToTypeOfShops) return  {showAccordingToTypeOfShops:false};
            else return {showAccordingToTypeOfShops: true, catogory:'all'}
        })
    }
}))

export const useAppStore = useStore;