<template>
    <div class="nav-block">
        <router-link to="/home">Home</router-link>
        <router-link to="/collection">Collection</router-link>
        <router-link to="/shoes">Shoes</router-link>
        <router-link to="/racing-boots">Racing Boots</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
</template>
<style scoped>
.nav-block {
    position: absolute;
    top: 0;
    width: 100%;
    animation: 2s ease-in-out;
    z-index: 1;
    background-color: #000;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    padding-right: 30px;
}
.nav-block a {
    color: #fff;
    font-size: 30px;
    display: inline-block;
    text-decoration: none;
    padding: 5px 10px;
}
.nav-block a:hover {
    color: #db5660;
}
</style>