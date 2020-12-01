<template>
    <v-dialog width="400px" v-model="dialog" >
        <template v-slot:activator="{on}">
            <v-btn dark class="light-blue darken-4" rounded v-on="on">Edit</v-btn>
        </template>
        <v-card>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card-title>
                            <h1 class="text--primary">Edit Product</h1>
                        </v-card-title>
                        <v-divider></v-divider>
                         <v-card-text>
                             <v-text-field
                                     label="Title"
                                     name="title"
                                     type="text"
                                     v-model="editedTitle"
                             ></v-text-field>
                             <v-text-field
                                     label="Description"
                                     name="description"
                                     type="text"
                                     v-model="editedDescription"
                             ></v-text-field>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn dark color="light-blue darken-4" outlined @click="onCancel">Cancel</v-btn>
                            <v-btn dark color="light-blue darken-4" @click="onSave">Save</v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: "EditProduct",
        props: ['product'],
        data () {
            return {
                dialog: false,
                editedTitle: this.product.title,
                editedDescription: this.product.description
            }
        },
        methods: {
            onCancel () {
                this.editedTitle = this.product.title
                this.editedDescription = this.product.description
                this.dialog= false
            },
            onSave () {
                if (this.editedTitle !=='' && this.editedDescription !=='') {
                    this.$store.dispatch('updateProduct', {
                        title: this.editedTitle,
                        description: this.editedDescription,
                        id: this.product.id
                    })
                    this.dialog = false
                }
            }
        }
    }
</script>

<style scoped>

</style>