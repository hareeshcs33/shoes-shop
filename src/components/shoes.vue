<template>
    <div>
        <h1>New Arrivals Products</h1>
        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
        <div class="shoes-content">
            <div class="shoe-box">
                <h4>Best shoes</h4>
                <div class="shoe-wrap">
                    <div class="img-box">
                        <img src="../assets/shoes-img4.png"/>
                    </div>
                    <div class="rating-block">
                        <div class="rating">
                            <img src="../assets/star-icon.png" />
                            <img src="../assets/star-icon.png" />
                            <img src="../assets/star-icon.png" />
                            <img src="../assets/star-icon.png" />
                            <img src="../assets/star-icon.png" />
                        </div>
                        <div class="value">$ <span class="red">100</span></div>
                    </div>
                </div>
            </div>
            <div class="shoe-box">
                <h4>Best shoes</h4>
                <div class="shoe-wrap">
                    <div class="img-box">
                        <img src="../assets/shoes-img5.png"/>
                    </div>
                    <div class="rating-block">
                        <div class="rating">
                            <img src="../assets/star-icon.png" />
                            <img src="../assets/star-icon.png" />
                            <img src="../assets/star-icon.png" />
                            <img src="../assets/star-icon.png" />
                            <img src="../assets/star-icon.png" />
                        </div>
                        <div class="value">$ <span class="red">100</span></div>
                    </div>
                </div>
            </div>
            <div class="shoe-box">
                <h4>Best shoes</h4>
                <div class="shoe-wrap">
                <div class="img-box">
                    <img src="../assets/shoes-img6.png"/>
                </div>
                <div class="rating-block">
                    <div class="rating">
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                    </div>
                    <div class="value">$ <span class="red">100</span></div>
                </div></div>
            </div>
            <div class="shoe-box">
                <h4>Best shoes</h4>
                <div class="shoe-wrap">
                <div class="img-box">
                    <img src="../assets/shoes-img7.png"/>
                </div>
                <div class="rating-block">
                    <div class="rating">
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                    </div>
                    <div class="value">$ <span class="red">100</span></div>
                </div></div>
            </div>
            <div class="shoe-box">
                <h4>Best shoes</h4>
                <div class="shoe-wrap">
                <div class="img-box">
                    <img src="../assets/shoes-img8.png"/>
                </div>
                <div class="rating-block">
                    <div class="rating">
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                    </div>
                    <div class="value">$ <span class="red">100</span></div>
                </div></div>
            </div>
            <div class="shoe-box">
                <h4>Best shoes</h4>
                <div class="shoe-wrap">
                <div class="img-box">
                    <img src="../assets/shoes-img9.png"/>
                </div>
                <div class="rating-block">
                    <div class="rating">
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                        <img src="../assets/star-icon.png" />
                    </div>
                    <div class="value">$ <span class="red">100</span></div>
                </div>
                </div>
            </div>
        </div>   
    </div>
</template>
<style scoped>
.shoes-content {
    display: flex;
    flex-flow: row wrap;
    background-color: #ff4e5b;
    padding: 30px 50px;
}
.rating-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.rating {
    display: flex;
}

.shoe-box {
    width: calc(33.33% - 30px);
    background-color: #fff;
    padding: 50px;
    text-align: center;
    margin: 10px;
}
.shoe-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 96%;
}
.red {
    color: #ff4e5b;
}
</style>