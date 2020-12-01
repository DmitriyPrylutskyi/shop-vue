<template>
    <v-container>
        <v-row v-if="!loading && myProducts.length !== 0">
            <v-col
                cols="12"
                sm="6"
                offset-sm="3"
            >
                <h1 class="text--secondary mb-3">My Products</h1>
                <v-card
                    class="elevation-10 mb-2"
                    v-for="(product, i) in myProducts"
                    :key = i
                >
                    <v-row>
                        <v-col cols="4">
                            <v-img
                                class="white--text align-end"
                                height="250px"
                                :src="product.imageSrc"
                            >
                            </v-img>
                        </v-col>
                        <v-col cols="8">
                            <v-card-text>
                                <h2 class="text--primary">{{ product.title }}</h2>
                                <p>{{ product.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    class="info"
                                    :to="'/product/' + product.id"
                                >
                                    Open
                                </v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else-if="!loading && myProducts.length === 0">
            <v-col class="d-flex flex-row justify-center mt-5">
                <h1 class="text--primary">You not have products</h1>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col class="d-flex flex-row justify-center mt-5">
                <loader></loader>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import loader from "@/components/Loader";

    export default {
        name: "ProductsList",
        components: {
            loader
        },
        computed: {
            myProducts () {
                return this.$store.getters.myProducts
            },
            loading () {
                return this.$store.getters.loading
            }
        }
    }
</script>

<style scoped>

</style>