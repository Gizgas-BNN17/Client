import axios from "axios";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { listCategory } from "../api/category";
import { listProduct, searchFilters } from "../api/product";
import _ from "lodash";
const usePersist = {
    name: 'Dessert-store',
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
            logout: () => {
                set({
                  user: null,
                  token: null,
                  categories: [],
                  products: [],
                  carts: [],
                });
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
            actionAddtoCart: (product) => {
                const carts = get().carts;
                const updateCart = [...carts, { ...product, count: 1 }];
                // Step Uniqe
                const uniqe = _.unionWith(updateCart, _.isEqual);
                set({ carts: uniqe });
                console.log('in actionAddtoCart')
                console.log('updateCart : ', updateCart)
                console.log('uniqe : ', uniqe)
            },
            actionUpdateQuantity: (productId, newQuantity) => {
                console.log('in actionUpdateQuantity', productId, newQuantity)
                set((state) => ({
                    carts: state.carts.map((item) =>
                        item.id === productId
                            ? { ...item, count: Math.max(1, newQuantity) }
                            : item
                    ),
                }));
            },
            actionRemoveProduct: (productId) => {
                set((state) => ({
                    carts: state.carts.filter((item) => item.id !== productId),
                }));
            },
            getTotalPrice: () => {
                return get().carts.reduce((total, item) => {
                  return total + item.price * item.count;
                }, 0);
              },
        }

        ),
        usePersist
    )

);

//const useEcomStore = create(ecomStore)

export default useEcomStore
