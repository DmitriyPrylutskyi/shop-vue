<template>
    <v-dialog width="400px" v-model="dialog">
        <template v-slot:activator="{on}">
            <v-btn class="buy-button" dark color="light-blue darken-4" rounded v-on="on">Buy</v-btn>
        </template>
        <v-card>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card-title>
                            <h2 class="text--primary">Do you want to buy it ?</h2>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-text-field
                                    label="Your Name"
                                    name="name"
                                    type="text"
                                    v-model="name"
                            ></v-text-field>
                            <v-text-field
                                    label="Your Phone"
                                    name="phone"
                                    type="text"
                                    v-model="phone"
                            ></v-text-field>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat outlined @click="onClose" :disabled="localLoading">Close</v-btn>
                            <v-btn flat class="success" @click="onBuy" :disabled="localLoading" :loading="localLoading">Buy</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "BuyDialog",
        props: ['product'],
        data () {
            return {
                dialog: false,
                name: '',
                phone: '',
                localLoading: false
            }
        },
        methods: {
            onClose () {
                this.name = ''
                this.phone = ''
                this.dialog = false
            },
            onBuy () {
                if (this.name !=='' && this.phone !=='') {
                    this.localLoading = true
                    this.$store.dispatch('createOrder', {
                        name: this.name,
                        phone: this.phone,
                        productId: this.product.id,
                        ownerId: this.product.ownerId
                    })
                        .finally(() => {
                            this.name = ''
                            this.phone = ''
                            this.localLoading = false
                            this.dialog = false
                        })
                }
            }
        }
    }
</script>

<style scoped>
    .buy-button {
        margin-left: 20px;
    }
</style>