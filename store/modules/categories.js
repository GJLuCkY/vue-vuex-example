import axios from '@/plugins/axios'
const state = {
    categories: [],
    category: {},
    products: [],
    product: {}
};

const getters = {
    getCategories(state) {
        return state.categories
    },
    getCategory(state) {
        return state.category
    },
    getProducts(state) {
        return state.products
    },
    getProduct(state) {
        return state.product
    }
};

const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categories = categories;
    },
    SET_CATEGORY(state, category) {
        state.category = category
    },
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    SET_PRODUCT(state, product) {
        state.product = product
    }
};

const actions = {
    fetchCategories({commit}) {
        return axios.get('/categories')
            .then((response) => {
                commit('SET_CATEGORIES', response.data.data)
            })
    },
    async fetchCategory({commit}, categorySlug) {
        const response = await axios.get('/categories/' + categorySlug, {
            params: {
                with: 'description,image'
            }
        })
        commit('SET_CATEGORY', response.data.data)
    },
    async fetchCategoryProducts({commit}, categorySlug) {
        const response = await axios.get('/categories/' + categorySlug + '/products', {
            params: {
                with: 'size,unit,depth'
            }
        })
        commit('SET_PRODUCTS', response.data.data)
    },
    fetchCategoryProduct({commit}, payload) {
        return axios.get('/categories/' + payload.categorySlug + '/' + payload.productSlug, {
            params: {
                with: 'size,unit,depth,images,description'
            }
        })
            .then((response) => {
                commit('SET_PRODUCT', response.data.data)
            })
    }
};

export default {
    state, getters, mutations, actions
};