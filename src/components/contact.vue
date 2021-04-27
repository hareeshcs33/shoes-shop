<template>
    <div>
        <h1>Contact Now</h1>
        <div class="content-block">
            <div class="form-block">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Numer" />
                <input type="text" placeholder="Email" />
                <textarea rows="4" placeholder="message"></textarea>
                <button class="cta-red">Send</button>
            </div>
            <div class="img-block">
                <img src="../assets/shop-banner.png" />
                <button class="our-shop">Our Shop</button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.content-block {
    display: flex;
    margin: 30px;
}
.content-block .form-block {
    width: 40%;
    background-color: #666;
    margin-right: 50px;
    padding: 20px 30px;
}
input {
    display: block;
    width: 100%;
    height: 50px;
    border: 0;
    margin-bottom: 15px;
    padding: 5px 10px;
}
textarea {
    display: block;
    width: 100%;
    padding: 10px;
}
input:focus,
textarea:focus {
    border: 0;
    outline: none;
}
.content-block .img-block {
    width: 60%;
    position: relative;
}
.img-block img {
    width: 100%;
}
.our-shop {
    background-color: #fff;
    color: #444;
    font-size: 22px;
    padding: 10px;
    border: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% -50%);
}
.our-shop:focus {
    outline: 0;
    border: 0;
}
.cta-red {
    background-color: #db5660;
    color: #fff;
    font-size: 26px;
    border: 0;
    outline: 0;
    padding: 10px 30px;
    height: 60px;
    width: 170px;
    margin: 10px auto 0;
    display: block;
}
</style>