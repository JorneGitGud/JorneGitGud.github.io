const frame = Vue.createApp({
    //data, functions, template
    data() {
        return {
            slideId: 0,
            title: "My",
            title2: "Portofolio",
            text: "On this page you can find projects i have worked on.",
            text2:"",
            image: '/Assets/Coding.gif',
            slide: [
                { title: "My", title2: "Portofolio", text: "On this page you can find projects I have worked on.", image: '/Assets/Coding.gif' },
                { title: "UAP-meter", title2: "Uni-project", text: "A AUP-meter is a wearable for buisnisses. It helps employes and customers keep a safe distance from one another. By alerting the user when antother devices is whitin a set proximity. The wearables logs 'close encounters' and the data is read using a custom reader and collected in a database. This data can be viewed in the user application and can help create a safer work enviorement.", text2: "We used all sorts of cool technology for this project; HTML/CSS, Vue.js, Node.js, C#, MSSQL, Arduino, bluetooth 5.2", image: '/Assets/Amiga.gif' },
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
            this.text2 = this.slide[this.slideId].text2;
            this.image = this.slide[this.slideId].image;
        }
    }
})
frame.mount('#frame')