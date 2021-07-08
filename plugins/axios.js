export default function({ $axios, store }) {
    $axios.setHeader('Content-Type', 'application/json')
    $axios.setHeader('Access-Control-Allow-Origin', '*');

    $axios.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
        // $axios.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    $axios.setToken(store.state.api_token, 'Bearer')

    $axios.onError((error) => {
        console.log(error)
            // store.dispatch('setError', error);

        // this.$toast.error('Error while making request: ' + error.response.message)
        console.table(error)
        throw error.response
            // with a custom store action
            // store.dispatch('error', error)
    })
}