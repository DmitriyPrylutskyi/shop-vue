<template>
    <v-container>
        <v-row class="product mt-3 elevation-10" v-if="!loading">
            <v-col
                cols="12"
                lg="6"
            >
                <img class="product-image" :src="product.imageSrc" alt="">
            </v-col>
            <v-col
                cols="12"
                lg="6"
            >
                <div class="product-info">
                    <h5 class="product-title .d-1 mb-3 mt-3">{{product.title}}</h5>
                    <p class="product-category title">
                        <span class="product-title">Vendor: </span>{{product.vendor.charAt(0).toUpperCase() + product.vendor.substring(1)}}
                    </p>
                    <p class="product-price title">
                        <span class="product-title">Price: </span>${{product.price}}
                    </p>
                    <p class="product-color title">
                        <span class="product-title">Color: </span>
                        <span
                            class="product-color-bg"
                            :title="product.color"
                            :style="{ backgroundColor: product.color }"
                        >
                        </span>
                    </p>
                    <p class="product-material title">
                        <span class="product-title">Material: </span>{{product.material.charAt(0).toUpperCase() + product.material.substring(1)}}
                    </p>
                    <div class="title mb-5">
                        <p class="product-title mb-2">Description: </p>{{product.description}}
                    </div>
                    <edit-product :product="product" v-if="isOwner"></edit-product>
                    <buy-dialog :product="product"></buy-dialog>
                </div>
            </v-col>
        </v-row>
        <v-row  v-else>
            <v-col class="d-flex flex-row justify-center mt-5">
                <loader></loader>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import editProduct from "@/views/EditProduct";
    import loader from "@/components/Loader";

    export default {
        name: "Product",
        props: ['id'],
        components: {
            editProduct,
            loader
        },
        computed: {
            product () {
                const id = this.id
                return this.$store.getters.productById(id)
            },
            isOwner () {
                return this.product.ownerId === this.$store.getters.user.id
            },
            loading () {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>
    .product {
        margin-bottom: 100px;
        padding: 30px;
        border: 1px solid #1c77ad;
    }
    .product-image {
        height: 100%;
        width: 550px;
    }
    .product-info {
        margin-left: 50px;
    }
    .product-title {
        margin-bottom: 0;
        font-size: 1.6rem;
        font-weight: bold;
        color: #1875d0;
    }
    .product-price {
        color: red;
    }
    .product-color-bg {
        display: inline-block;
        width: 50px;
        height: 20px;
        border: 1px solid #2b2b2b;
        border-radius: 10px;
    }
    @media screen and (max-width: 1270px) {
        .product {
            text-align: center;
        }
        .product_info {
            margin-left: 0;
        }
    }
    @media screen and (max-width: 620px) {
        .product {
            text-align: start;
        }
        .product_img {
            width: 100%;
            height: 100%;
        }
        .product_title {
            text-align: center;
        }
    }
    @media screen and (max-width: 400px) {
        .product {
            padding: 10px;
            text-align: start;
            margin-bottom: 120px
        }
        .product_img {
            height: 250px;
            width: 100%;
        }
        .product_info {
            margin-left: 0;
        }
    }
</style>