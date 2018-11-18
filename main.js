var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './assets/socks-green.jpg',
                variantQuantity: 0
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './assets/socks-blue.jpg',
                variantQuantity: 10
            }
        ],
        details: ['80% cotton', '20% polyester', 'Male'],
        cart: 0,
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function (index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity > 0
        }
    }
})
