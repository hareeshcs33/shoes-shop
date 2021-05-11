<template>
    <div>
        <h1>New Collection</h1>
        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <div class="collection-content">
            <div class="collection-box collection-box-one">
                <div class="img-block">
                    <img src="../assets/shoes-img1.png" />
                </div>
                <div class="review-detail-block">
                    <h4>Men Sports</h4>
                    <div class="value">$90</div>
                    <div class="ratings">
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                    </div>
                </div>
                <button class="new-cta">New</button>
            </div>
            <div class="collection-box collection-box-two">
                <div class="img-block">
                    <img src="../assets/shoes-img2.png" />
                </div>
                <div class="review-detail-block">
                    <h4>Men Sports</h4>
                    <div class="value">$90</div>
                    <div class="ratings">
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                    </div>
                </div>
            </div>
            <button class="see-more-cta">See More</button>
        </div>
    </div>
</template>
<style scoped>
    .collection-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .collection-box {
        padding: 30px 100px;
        box-shadow: 0px 0px 10px 0px;
    }
    .collection-box.collection-box-one {
        position: relative;
        z-index: 2;
        background-color: #fff;
    }
    .collection-box.collection-box-two {
        margin-left: -90px;
        margin-top: 120px;
        z-index: 1;
        background-image: url('../assets/about-img2.png');
        background-size: 100%;
    }
    .img-block img {
        width: 100%;
    }
    .review-detail-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 30px auto 0;
    }
    .new-cta {
        position: absolute;
        top: 0;
        left: -60px;
        background-color: #000;
        color: #fff;
        font-size: 18px;
        height: 50px;
        padding: 5px 30px;
        border: 0;
        outline: 0;
    }
    .see-more-cta {
        position: absolute;
        bottom: -150px;
        left: 50px;
        border: 0;
        background-color: #ff4e5b;
        color: #fff;
        font-size: 18px;
        height: 50px;
        padding: 5px 50px;
    }
</style>