<template>
    <v-container>
        <v-row v-if="loading">
            <v-col class="d-flex flex-row justify-center mt-5">
                 <loader></loader>
            </v-col>
        </v-row>
        <v-row v-else-if="!loading && orders.length !==0">
            <v-col
                   cols="12"
                   sm="6"
                   offset-sm="3"
            >
                <h1 class="text--secondary mb-3">Orders</h1>
                <v-card
                    class="mx-auto"
                >
                    <v-list
                    subheader
                    two-line
                >
                    <v-list-item
                        avatar
                        v-for="(order, i) in orders"
                        :key="i"
                    >
                        <template>
                            <v-list-item-action>
                                <v-checkbox
                                        color="success"
                                        :input-value="order.done"
                                        @click="markDone(order)"
                                ></v-checkbox>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>{{ order.name }}</v-list-item-title>
                                <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn
                                    class="primary"
                                    :to="'/product/' + order.productId"
                                >
                                    Open
                                </v-btn>
                            </v-list-item-action>
                        </template>
                    </v-list-item>
                </v-list>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else>
            <v-col class="d-flex flex-row justify-center mt-5">
                <h1 class="text-primary">You not have orders</h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import loader from "@/components/Loader";

    export default {
        name: "Checkout",
        components: {
            loader
        },
        created () {
            this.$store.dispatch('fetchOrders')
        },
        computed: {
            loading () {
              return this.$store.getters.loading
            },
            orders () {
                return this.$store.getters.orders
            }
        },
        methods : {
            markDone (order) {
                this.$store.dispatch('markOrderDone', order.id)
                    .then (() => {
                        order.done = true
                    })
                    .catch(() => {})
               }
        }
    }
</script>

<style scoped>

</style>