import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { listCategory } from "../api/category";
import { listProduct, searchFilters } from "../api/product";

const usePersist = {
    name: 'ecom-store',
    storage: createJSONStorage(() => localStorage)
}

const useEcomStore = create(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            categories: [],
            products: [],
            carts: [],
            actionAddCart: (product) => {
                const cart = get().carts
                const updateCart = [
                    ...cart,{...product,count : 1 }
                ]
                set({
                    cart :  updateCart
                })
            },
            actionLogin: async (form) => {
                console.log('action login')
                const res = await axios.post('http://localhost:5000/api/login', form)
                // console.log(res)
                set({
                    user: res.data.payload,
                    token: res.data.token
                })
                return res
            },
            getCategory: async () => {

                try {
                    const res = await listCategory()
                    // console.log(res)
                    set({ categories: res.data })

                } catch (err) {
                    console.log(err)
                }
            },
            getProduct: async (count) => {

                try {
                    const res = await listProduct(count)
                    // console.log(res)
                    set({ products: res.data })

                } catch (err) {
                    console.log(err)
                }
            }, actionRemoveProduct: (productId) => {
                set((state) => ({
                    carts: state.carts.filter((item) => item.id !== productId),
                }));
            },
            actionSearchFilters: async (arg) => {
                console.log('arg : ', arg)
                try {
                    const res = await searchFilters(arg);
                    set({ products: res.data });
                } catch (err) {
                    console.log(err);
                }
            },

        }

        ),
        usePersist
    )

);

//const useEcomStore = create(ecomStore)

export default useEcomStore
