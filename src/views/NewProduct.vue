<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
                sm="6"
                offset-sm="3"
            >
                <h1 class="text--secondary mb-3">Create New Product</h1>
                <v-form ref="form" v-model="valid" class="mb-3">
                    <v-text-field
                        label="Title"
                        name="title"
                        type="text"
                        :rules="titleRules"
                        v-model="title"
                    >
                    </v-text-field>
                    <v-text-field
                        label="Vendor"
                        name="vendor"
                        type="text"
                        :rules="vendorRules"
                        v-model="vendor"
                    >
                    </v-text-field>
                    <v-text-field
                        label="Color"
                        name="color"
                        type="text"
                        :rules="colorRules"
                        v-model="color"
                    >
                    </v-text-field>
                    <v-text-field
                        label="Material"
                        name="material"
                        type="text"
                        :rules="materialRules"
                        v-model="material"
                    >
                    </v-text-field>
                    <v-text-field
                        label="Price"
                        name="price"
                        type="text"
                        :rules="priceRules"
                        v-model="price"
                    >
                    </v-text-field>
                    <v-textarea
                        label="Description"
                        name="description"
                        type="text"
                        no-resize
                        :rules="descriptionRules"
                        v-model="description"
                    >
                    </v-textarea>
                </v-form>
                <v-row>
                    <v-col cols="12">
                        <v-btn class="warning mb-3" @click="upload">
                            Upload
                            <v-icon right dark>mdi-cloud-upload</v-icon>
                        </v-btn>
                        <input
                            ref="fileInput"
                            type="file"
                            style="display:none;"
                            accept="image/*"
                            @change="onFileChange"
                        >
                       </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" v-if="imageSrc">
                        <img :src="imageSrc" alt="" height="200px">
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-switch
                            color="primary"
                            v-model="promo"
                            label="Add to Promo ?"
                        ></v-switch>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-spacer></v-spacer>
                        <v-btn
                           class="success"
                           @click="createProduct"
                           :loading="loading"
                           :disabled="!valid || !image || loading"
                        >
                            Create Product
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "NewProduct",
        data() {
            return {
                title: '',
                titleRules: [
                    v => !!v || 'Title is required'
                ],
                vendor: '',
                vendorRules: [
                    v => !!v || 'Vendor is required'
                ],
                color: '',
                colorRules: [
                    v => !!v || 'Color is required'
                ],
                material: '',
                materialRules: [
                    v => !!v || 'Material is required'
                ],
                price: '',
                priceRules: [
                    v => !!v || 'Price is required'
                ],
                description: '',
                descriptionRules: [
                    v => !!v || 'Description is required'
                ],
                promo: false,
                valid: false,
                image: null,
                imageSrc: ''
            }
        },
        computed : {
            loading () {
                return this.$store.getters.loading
            }
        },
        methods: {
            createProduct () {
                if (this.$refs.form.validate()) {
                    const product = {
                        title: this.title,
                        vendor: this.vendor,
                        color: this.color,
                        material: this.material,
                        price: this.price,
                        description: this.description,
                        promo: this.promo,
                        image: this.image
                    }

                    this.$store.dispatch('createProduct', product)
                        .then(() => {
                                this.$router.push('/list')
                            }
                        )
                        .catch(() => {})
                }
            },
            upload () {
                this.$refs.fileInput.click()
            },
            onFileChange (event) {
                const file = event.target.files[0]
                const reader = new FileReader()

                reader.onload = () => {
                    this.imageSrc = reader.result
                }

                reader.readAsDataURL(file)
                this.image = file
            }
        }
    }
</script>

<style scoped>

</style>