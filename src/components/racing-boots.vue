<template>
    <div>
        <h1>Racing boots</h1>
        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            <div class="racing-boots-content">
                <div class="img-block">
                    <img src="../assets/shoes-img3.png" />
                </div>
                <div class="racing-text-block">
                    <div class="red">Sale</div>
                    <div>Joging</div>
                    <div class="red">shoes</div>
                    <div><span class="red">$</span> 100</div>
                    <button class="see-more-cta">See More</button>
                </div>
            </div>
    </div>
</template>
<style scoped>
    .racing-boots-content {
        background-color: #eae7e7;
        display: flex;
        padding: 50px 100px 30px 150px;
        margin: 30px 50px;
    }
    .see-more-cta {
        border: 0;
        background-color: #ff4e5b;
        color: #fff;
        font-size: 18px;
        height: 50px;
        padding: 5px 50px;
        margin: 30px;
    }
    .img-block {
        width: 70%;
    }
    .img-block img {
        max-width: 100%;
    }
    .racing-text-block {
        width: 30%;
    }
    .racing-text-block > div {
        font-size: 60px;
        font-weight: bold;
        text-transform: uppercase;
        line-height: 1.3;
    }
    .racing-text-block .red {
        color: #ed2540;;
    }
</style>