<template>
    <div>
        <v-navigation-drawer app temporary v-model="sideNav">
            <v-list>
                <v-list-item
                    v-for="(link, i) in links"
                    :key="i"
                    :to="link.url"
                >
                    <v-list-item-icon>
                        <v-icon>{{ link.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="link.title"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item
                    @click="onLogout"
                    v-if="isUserLoggedIn"
                >
                    <v-list-item-icon>
                        <v-icon>mdi-exit-to-app</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="'Logout'"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app dark color="primary">
            <v-app-bar-nav-icon
                    class="hidden-md-and-up"
                    @click="sideNav = !sideNav"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>
                <router-link
                    :to="'/'"
                    tag="span"
                    class="pointer"
                >
                    Store
                </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                    text
                    v-for="(link, i) in links"
                    :key="i"
                    :to="link.url"
                >
                    <v-icon left>{{ link.icon }}</v-icon>
                    {{ link.title }}
                </v-btn>
                <v-btn
                    text
                    @click="onLogout"
                    v-if="isUserLoggedIn"
                >
                    <v-icon left>mdi-exit-to-app</v-icon>
                    Logout
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        data () {
            return {
                sideNav: false
             }
        },
        computed: {
            isUserLoggedIn() {
                return this.$store.getters.isUserLoggedIn;
            },
            links () {
                if (this.isUserLoggedIn) {
                    return [
                        {title: 'Cart', icon: 'mdi-cart', url: '/checkout'},
                        {title: 'New Product', icon: 'mdi-plus', url: '/new'},
                        {title: 'My Products', icon: 'mdi-format-list-bulleted', url: '/list'}
                    ]
                } else {
                    return [
                        {title: 'Login', icon: 'mdi-account-box', url: '/login'},
                        {title: 'Register', icon: 'mdi-face', url: '/register'},
                    ]
                }
            }
        },
        methods: {
            onLogout () {
                this.$store.dispatch('logoutUser')
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .pointer {
        cursor: pointer;
    }
</style>