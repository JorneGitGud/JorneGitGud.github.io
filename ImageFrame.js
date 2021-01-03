console.log("Image Frame loaded")

const frame = Vue.createApp({
    //data, functions, template


    data() {
        return {
            slide: 0,
            //element array{title title 2 text image}
            date: "00-0000",
            title: "Something cool",
            text: "Lorem ipsum bla bla bla bla Lorem ipsum bla bla bla bla Lorem ipsum bla bla bla bla Lorem ipsum bla bla bla bla Lorem ipsum bla bla bla bla",
            image: '/Assets/Thinkpad.png'
        }
    },
    methods: {
        nextImage(next) {
            if (next) {
                this.slide++
                    console.log(this.slide)
            } else {
                if (this.slide > 0) {
                    this.slide--
                        console.log(this.slide)
                }
            }
        }
    }

})

frame.mount('#frame')