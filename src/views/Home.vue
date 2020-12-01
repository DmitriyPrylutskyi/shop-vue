<template>
    <div v-if="!loading">
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <v-carousel
                            :show-arrows="false"
                            hide-delimiter-background
                            delimiter-icon="mdi-stop"
                    >
                        <v-carousel-item
                            v-for="(product, i) in promoProducts"
                            :key="i"
                            :src="product.imageSrc"
                        >

                        </v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col
                    v-for="(product, i) in products"
                    :key="i"
                >
                    <v-card
                            class="mx-auto"
                            max-width="500"
                    >
                        <router-link
                            :aria-label="product.title"
                            :to="'/product/' + product.id"
                        >
                            <v-img
                                class="white--text align-end"
                                height="350px"
                                :src="product.imageSrc"
                            >
                            </v-img>
                        </router-link>
                        <v-card-subtitle class="pb-0">{{ product.title }}</v-card-subtitle>

                        <v-card-text class="text--primary">
                            <div>{{ product.description.substring(0, 60) }}...</div>
                            <div>Price: ${{ product.price }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                  dark
                                  color="light-blue darken-4"
                                  rounded
                                  outlined
                                  :to="'/product/' + product.id"
                            >
                                Description
                            </v-btn>
                            <buy-dialog :product="product"></buy-dialog>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div v-else>
        <v-container>
            <v-row>
                <v-col class="d-flex flex-row justify-center mt-5">
                    <loader></loader>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import loader from "@/components/Loader";
    import BuyDialog from "@/components/BuyDialog";

    export default {
        name: "Home",
        components: {
            BuyDialog,
            loader
        },
        computed: {
            promoProducts() {
                return this.$store.getters.promoProducts
            },
            products() {
                return this.$store.getters.products
            },
            loading() {
                return this.$store.getters.loading
            }
        }
    }

</script>

<style scoped>

</style>