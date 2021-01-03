const frame = Vue.createApp({
    //data, functions, template
    data() {
        return {
            slideId: 0,
            title: "My",
            title2: "Portofolio",
            text: "On this page you can find projects i have worked on.",
            image: '/Assets/Coding.gif',
            slide: [
                { title: "11-8888", title2: "TIITTTTLLEE", text: "this is a different text, this is a different text,  this is a different text,  this is a different text  this is a different text.   ", image: '/Assets/Amiga.gif' },
                { title: "22-8888", title2: "TIITTTTLLEE", text: "this is a different text, this is a different text,  this is a different text,  this is a different text  this is a different text.   ", image: '/Assets/Amiga.gif' },
                { title: "33-8888", title2: "TIITTTTLLEE", text: "this is a different text, this is a different text,  this is a different text,  this is a different text  this is a different text.   ", image: '/Assets/Amiga.gif' },

            ]
        }
    },
    methods: {
        nextImage(next) {
            if (next) {
                this.slideId++
                    if (this.slideId >= this.slide.length) {
                        this.slideId = 0;
                    }
            } else {
                if (this.slideId > 0) {
                    this.slideId--
                } else {
                    this.slideId = this.slide.length - 1;
                }
            }
            console.log(this.slideId)
            this.title = this.slide[this.slideId].title;
            this.title2 = this.slide[this.slideId].title2;
            this.text = this.slide[this.slideId].text;
            this.image = this.slide[this.slideId].image;
        }
    }
})
frame.mount('#frame')