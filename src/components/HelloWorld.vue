<template>
    <div class="wrapper">
        <header class="header">
            <div class="header__container">
                <div class="header__content">
                    <div class="header__logo">
                        <a href="#"><img src="..//assets/img/logo_one-1.svg" alt=""></a>
                    </div>
                    <div class="header__title">Кращі з кращих</div>
                    <button class="header__btn-1">Click</button>
                </div>
            </div>
        </header>
        <div class="banner">
            <div class="banner__container">
                <div class="banner__content">
                    <div class="timer">
                        <h1 class="countdown-title">Цей день настане</h1>
                        <h1 class="countdown-title">ЧЕРЕЗ:</h1>
                        <div id="countdown" class="countdown">
                            <div class="countdown-number">
                                <span class="days countdown-time">{{ time.days }}</span>
                                <span class="countdown-text">Дні</span>
                            </div>
                            <div class="countdown-number">
                                <span class="hours countdown-time">{{ ('0' + time.hours).slice(-2) }}</span>
                                <span class="countdown-text">Годин</span>
                            </div>
                            <div class="countdown-number">
                                <span class="minutes countdown-time">{{ ('0' + time.minutes).slice(-2) }}</span>
                                <span class="countdown-text">Хвилин</span>
                            </div>
                            <div class="countdown-number">
                                <span class="seconds countdown-time">{{ ('0' + time.seconds).slice(-2) }}</span>
                                <span class="countdown-text">Секунд</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="image-gallery">
            <div class="image-gallery-decor1">
                <img src="../assets/img/decor_left.svg" alt="">
            </div>
            <div class="image-gallery-decor2">
                <img src="../assets/img/decor_right.svg" alt="">
            </div>
            <div class="container">
                <div class="gallery-column">
                    <div class="column1">
                        <div class="column2">
                            <div>
                                <img
                                        :src="images[1].src"
                                        @click="openLightbox(1)"
                                        class="foto1"
                                />
                            </div>
                            <div>
                                <img
                                        :src="images[0].src"
                                        @click="openLightbox(0)"
                                        class="foto2"
                                />
                            </div>
                        </div>

                        <div>
                            <img
                                    :src="images[2].src"
                                    @click="openLightbox(2)"
                                    class="foto3"
                            />
                        </div>
                    </div>
                    <div>
                        <img
                                :src="images[3].src"
                                @click="openLightbox(3)"
                                class="foto4"
                        />
                    </div>
                </div>
            </div>

            <!-- Lightbox -->
            <div v-if="showLightbox" class="fullscreen-lightbox" @click="closeLightbox">
                <img :src="images[lightboxIndex].src" alt="Image"/>
            </div>
        </div>
        <footer class="footer">
            <div class="footer__container">
                <div class="footer__content">
                    <div class="footer__logo">
                        <a href="#"><img src="..//assets/img/logo_one-1.svg" alt=""></a>
                    </div>
                    <div class="footer__chat">
                        <div class="footer__chat-title">
                            Чат NOA Spartak
                        </div>
                        <div class="footer__chat-link">
                            <a target="_blank" href="https://invite.viber.com/?g2=AQBTbCfVQ6GM%2F03cx1oXY1Qtx6gsiwHMWoLhYaNNO0qEgQXP7THxUM1n9Pm%2B1gjO"><img src="..//assets/img/viber.svg" alt=""></a>
                        </div>
                    </div>
                    <div class="footer__social-all">
                        <div class="footer__social">
                            <div class="footer__social-title">
                                Соціальні мережі
                            </div>
                            <div class="footer__social-link">
                                <a target="_blank" href="https://www.instagram.com/noa.asian/"><img
                                        src="..//assets/img/instagram.svg" alt=""></a>
                                <a target="_blank" href="https://www.facebook.com/noa.asian/"><img
                                        src="..//assets/img/facebook.svg" alt=""></a>
                            </div>

                        </div>
                        <div class="footer__local">
                            <div class="footer__local-icon">
                                <a target="_blank"
                                   href="https://www.google.com/maps/place/%D0%9A%D0%BB%D0%B0%D0%B4%D0%B1%D0%B8%D1%89%D0%B5+%D0%93%D0%BE%D0%BB%D0%BE%D1%81%D0%BA%D0%BE/@49.8906321,24.0286967,16z/data=!4m6!3m5!1s0x473adc401ea00ae7:0x55855d4424a34f68!8m2!3d49.8910923!4d24.027774!16s%2Fg%2F1230pjxd?authuser=0&entry=ttu"><img
                                        class="footer__local-icon1" src="..//assets/img/local.svg" alt=""></a>
                            </div>
                            <div class="footer__local-title">
                                <div class="footer__local-city">
                                    м. Львів
                                </div>
                                <div class="footer__local-street">
                                    ТРЦ Spartak, Мазепи 1Б
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer__reserved">
                        <div class="footer__reserved-left">© 2023 NOA. All rights reserved.</div>
                        <div class="footer__reserved-right">Тай таке...</div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        data() {
            return {
                time: {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                },
                images: [
                    {src: require('@/assets/img/1.jpg')},
                    {src: require('@/assets/img/2.jpg')},
                    {src: require('@/assets/img/3.jpg')},
                    {src: require('@/assets/img/4.jpg')},
                ],
            }
        },

        methods: {
            openLightbox(index) {
                this.lightboxIndex = index;
                this.showLightbox = true;
            },
            closeLightbox() {
                this.showLightbox = false;
            },
            getTimeRemaining(endtime) {
                const t = Date.parse(endtime) - Date.now();
                const seconds = Math.floor((t / 1000) % 60);
                const minutes = Math.floor((t / 1000 / 60) % 60);
                const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                const days = Math.floor(t / (1000 * 60 * 60 * 24));
                return {
                    total: t,
                    days: days,
                    hours: hours,
                    minutes: minutes,
                    seconds: seconds
                };
            },
            updateClock(endtime) {
                const t = this.getTimeRemaining(endtime);

                this.time.days = t.days;
                this.time.hours = t.hours;
                this.time.minutes = t.minutes;
                this.time.seconds = t.seconds;

                if (t.total <= 0) {
                    clearInterval(this.timeinterval);
                }
            },
            initializeClock(id, endtime) {
                this.updateClock(endtime);
                this.timeinterval = setInterval(() => this.updateClock(endtime), 1000);
            },

        },
        mounted() {
            const deadline = new Date('August 22, 2023 00:00:00 GMT+0000');
            this.initializeClock('countdown', deadline);
        },
        beforeDestroy() {
            clearInterval(this.timeinterval);
        }
    };
</script>
<style scoped>
    /* Ваші стилі */

    /* Стилі для повноекранного режиму */
    .fullscreen-lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .fullscreen-lightbox img {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    }
</style>
