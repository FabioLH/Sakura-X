const App = {
    init() {
        this.controllers.createComponents()
        this.controllers.modalSite()
        this.controllers.headerSite()
        this.controllers.bodySite()
        this.controllers.renderAllAnimeCards()
        this.controllers.renderAllMyAnim()
        this.controllers.footerSite()

    },

    state: {

        animelist: [
            {id: 1, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "https://animeshouse.net/wp-content/uploads/2021/10/32434.jpg",
            vid: "https://www.youtube.com/watch?v=0lNjes4la9U"},
            
            {id: 2, nomejp: "Mieruko-chan", nomeing: "Mieruko-chan", disponibilidade: "Funimation", genero: "Gasolina",
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "https://ogre.natalie.mu/media/news/comic/2021/0716/mieruko_Teaser2.jpg",},

            {id: 3, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Netflix", genero: "Gasolina",
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 4, nomejp: "Guranburu", nomeing: "Grand Blue Dreaming", disponibilidade: "Amazon Prime", genero: "Gasolina",
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "https://wallpapercave.com/wp/wp4507902.jpg",},
            
            {id: 5, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 6, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 7, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 8, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 9, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 10, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 11, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 12, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 13, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 13, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 14, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 14, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 15, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 16, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 17, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 17, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 18, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 19, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},

            {id: 20, nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Gasolina", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "segunda",
            img: "",},
        ],

        myAnim: []
    },

    controllers: {

    showModal(body) {
        App.elements.modal.backdrop.style.display = "flex"
        App.elements.modal.container.body.innerHTML = ""
        App.elements.modal.container.body.appendChild(body)
    },
     
    hideModal() {
        App.elements.modal.backdrop.style.display = "none" 
    },

    modalSite() {
        const el = App.elements.modal

        App.helpers.style(el.backdrop, {
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)",
            display: "none",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            overflow: "auto"
        })

        App.helpers.style(el.container.el, {
            width: "350px",
            background: "white",
            borderRadius: "10px",
            paddingBottom: "5px",
        })

        App.helpers.style(el.container.close.el, {
            border: "0px solid blue",
            paddingRight: "5px",
            margin: "0px",
            display: "flex",
            justifyContent: "flex-end"
        })

        el.container.close.btn.innerHTML = "X"
        App.helpers.style(el.container.close.btn, {
            cursor: "pointer",
            fontFamily: "sans-serif"
        })

        el.container.close.btn.onclick = () => {
            App.elements.modal.backdrop.style.display = "none"
        }

        el.backdrop.onclick = (evt) => {
            if (evt.target === el.backdrop) {
                App.controllers.hideModal()
            }
        }

        el.container.close.el.appendChild(el.container.close.btn)
        el.container.el.appendChild(el.container.close.el)
        el.container.el.appendChild(el.container.body)
        el.backdrop.appendChild(el.container.el)
        App.elements.app.appendChild(el.backdrop)
    },

    createAnimStats(anime) {
        const container = document.createElement("div")
        const header = document.createElement("div")
        const img = document.createElement("img")
        const l1 = document.createElement("div")
        const v1 = document.createElement("div")
        const l2 = document.createElement("div")
        const v2 = document.createElement("div")
        const l3 = document.createElement("div")
        const v3 = document.createElement("div")
        const l4 = document.createElement("div")
        const v4 = document.createElement("div")
        const l5 = document.createElement("div")
        const v5 = document.createElement("div")
        const btn = document.createElement("button")

        container.classList.add("anime-card-container")
        
        header.classList.add("anime-card-header")
        header.innerHTML = ""

        l1.innerHTML = "Nome JP:"
        v1.innerHTML = anime.nomejp
        l1.classList.add("cars-card-l1")
        v1.classList.add("cars-card-v1")

        l2.innerHTML = "Nome EN:"
        v2.innerHTML = anime.nomeing
        l2.classList.add("cars-card-l2")
        v2.classList.add("cars-card-v2")

        l3.innerHTML = "Temporada:"
        v3.innerHTML = anime.temporada
        l3.classList.add("cars-card-l3")
        v3.classList.add("cars-card-v3")

        l4.innerHTML = "Disponível:"
        v4.innerHTML = anime.disponibilidade
        if (anime.disponibilidade === "Crunchyroll") {
            v4.style.color = " #DF6300"
        } 
        if (anime.disponibilidade === "Funimation") {
            v4.style.color = "#800080"
        }
        if (anime.disponibilidade === "Netflix") {
            v4.style.color = "#E50914"
        }
        if (anime.disponibilidade === "Amazon Prime") {
            v4.style.color = "#00A8E1"
        }
        l4.classList.add("cars-card-l4")
        v4.classList.add("cars-card-v4")

        l5.innerHTML = "Motor:"
        l5.style.display = "none"
        v5.innerHTML = ""
        v5.style.display = "none"
        l5.classList.add("cars-card-l5")
        v5.classList.add("cars-card-v5")


        container.appendChild(l1)
        container.appendChild(v1)
        container.appendChild(l2)
        container.appendChild(v2)
        container.appendChild(l3)
        container.appendChild(v3)
        container.appendChild(l4)
        container.appendChild(v4)
        container.appendChild(l5)
        container.appendChild(v5)

        return container
    },

    createAnimCards(anime, isBuy) {
        const el = document.createElement("div")
        const header = document.createElement("div")
        const img = document.createElement("img")
        const btn = document.createElement("button")
        const stats = App.controllers.createAnimStats(anime)
        
        el.classList.add("anime-card")
        el.onmouseover = function () {
            el.style.boxShadow = "0px 0px 3px 0px #f78589"
        }
        el.onmouseout = function () {
            el.style.boxShadow = "0px 0px 5px 2px #c5c5c5"
        }
        
        img.classList.add("anime-card-img")
        img.style.width = "0%"
        img.style.height = "0%"
        img.src = anime.img

        header.classList.add("anime-card-header")
        header.innerHTML = anime.nomejp

        btn.classList.add("anime-card-btn")
        btn.innerHTML = isBuy ? "+Detalhes" : "Retirar"
        btn.onclick = () => {
            const content = App.controllers.createCardsContent(anime, isBuy)
            App.controllers.showModal(content)
        }

        el.appendChild(img)
        el.appendChild(header)
        el.appendChild(stats)
        el.appendChild(btn)

        return el
    },

    createCardsContent(anime, isBuy) {
        const el = document.createElement("div")
        const img = document.createElement("video")
        const header = document.createElement("div")
        const container = document.createElement("div")
        const l5 = document.createElement("div")
        const v5 = document.createElement("div")
        const l6 = document.createElement("div")
        const v6 = document.createElement("div")
        const l7 = document.createElement("div")
        const v7 = document.createElement("div")
        const l8 = document.createElement("div")
        const v8 = document.createElement("div")
        const l9 = document.createElement("div")
        const v9 = document.createElement("div")
        const btn = document.createElement("button")
        const btn2 = document.createElement("button")
        const btn3 = document.createElement("button")
        //const fot = [animelist.img]

        App.helpers.style(el, {
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
        })
        
        App.helpers.style(img, {
            width: "350px",
            height: "250px",
        })
        img.src = anime.vid
        img.controls = true
        img.autoplay = true
        img.loop = true

        //btn2.classList.add("next")
        //btn2.innerHTML = "&#10095;"
        //btn2.onclick = () => {
         //   if (img.src === fot[fot.length - 1]) {
         //       img.src = fot[0]
          //  } else {
          //      img.src = fot[fot.indexOf(img.src) + 1]
          //  }
      //  }

       // btn3.classList.add("prev")
        //btn3.innerHTML = "&#10094;"
       // btn3.onclick = () => {
          //  if (img.src === fot[0]) {
           //     img.src = fot[fot.length - 1]
           // } else {
            //    img.src = fot[fot.indexOf(img.src) - 1]
           // }
      //  }

        header.classList.add("anime-card-header")
        header.innerHTML = anime.nomejp

        container.classList.add("anime-card-container")

        l5.innerHTML = "Gênero:"
        v5.innerHTML = anime.genero
        l5.classList.add("cars-card-l5")
        v5.classList.add("cars-card-v5")

        l6.innerHTML = "Episódios:"
        v6.innerHTML = anime.episodios
        l6.classList.add("cars-card-l6")
        v6.classList.add("cars-card-v6")

        l7.innerHTML = "Ep. novo:"
        v7.innerHTML = anime.epnovo
        l7.classList.add("cars-card-l7")
        v7.classList.add("cars-card-v7")

        l8.innerHTML = "Link:"
        v8.innerHTML = "Assista aqui"
        v8.style.color = "#f78589"
        v8.style.textDecoration = "underline"
        v8.style.cursor = "pointer"
        v8.onclick = () => {
            window.open(anime.link)
        }
        l8.classList.add("cars-card-l8")
        v8.classList.add("cars-card-v8")

        //l9.innerHTML = ""
        //v9.innerHTML = ""
       // l9.classList.add("cars-card-l9")
        //v9.classList.add("cars-card-v9")

        btn.classList.add("cars-card-btn")
        btn.innerHTML = isBuy ? "Favoritar" : "Desfavoritar"
        btn.style.marginTop = "5px"
        btn.onclick = () => {
            if (localStorage.getItem("token") === null) {
                App.controllers.hideModal()
                //App.elements.alerta.backdrop3.style.display = "flex"
                //App.elements.alerta.container3.title3.innerHTML = "Entre no Projeto X para adicionar anúncios aos seus favoritos."
            } else if (isBuy) {
                //App.controllers.favFlow(cars)
            } else {
                //App.controllers.desfavFlow(cars)
            } 
        }
        btn.disabled = isBuy ? App.state.myAnim.some(car => car.id === cars.id) : false

        el.appendChild(img)
        el.appendChild(header)
        el.appendChild(container)
        container.appendChild(l5)
        container.appendChild(v5)
        container.appendChild(l6)
        container.appendChild(v6)
        container.appendChild(l7)
        container.appendChild(v7)
        container.appendChild(l8)
        container.appendChild(v8)
        container.appendChild(l9)
        container.appendChild(v9)
        el.appendChild(btn)
        el.appendChild(btn2)
        el.appendChild(btn3)
        return el
    },

    renderAllAnimeCards() {
        const container = App.elements.body.itens
        container.all.innerHTML = ""
        container.allCards = []

        for (let i = 0; i < App.state.animelist.length; i++) {
            const anime = App.state.animelist[i];
            const el = this.createAnimCards(anime, true)
            container.all.appendChild(el)
            container.allCards.push(el)
        } 
    },

    renderAllMyAnim() {
        const container = App.elements.body.itens
        container.fav.innerHTML = ""
        container.favMyCards = []

        for (let i = 0; i < App.state.myAnim.length; i++) {
            const anime = App.state.myAnim[i];
            const el = this.createAnimCards(anime, true)
            container.fav.appendChild(el)
            container.favMyCards.push(el)
        } 
    },

    headerSite() {
        const els = App.elements.header

        App.helpers.style(els.el, {backgroundColor: "#e4eeed", padding: '0px', border: "0px solid red", display: "flex",
        justifyContent: "space-between", alignItems: "center", top: 0, left: 0, width: "100vw", borderBottom: "1px solid #ccc",
        flexDirection: "row", })

        els.sakurax.classList.add('sakurax')
        els.sakurax.innerHTML = "Sakura Petal"
        App.helpers.style(els.sakurax, {
            backgroundImage: "url(https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/35950/cherry-blossoms-branch-clipart-xl.png",
            backgroundSize: "10vw",
            backgroundPosition: "0% 45%",
            backgroundRepeat: "no-repeat",
        })

        App.helpers.style(els.users.el, {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            border: "0px solid red",
            padding: "10px",
        })
        App.helpers.style(els.users.user, {
            display: "flex",
            border: "0px solid red",
            fontFamily: "sans-serif",
            fontSize: "15px",
            color: "black",
            cursor: "pointer",
            marginRight: "20px",
            width: "30px",
        })
        els.users.user.src = "https://cdn.iconscout.com/icon/free/png-256/account-269-866236.png"

        App.helpers.style(els.users.favan, {
            border: "0px solid red",
            display: "flex",
            fontFamily: "sans-serif",
            fontSize: "15px",
            color: "black",
            width: "30px",
            cursor: "pointer",
        })
        els.users.favan.src = "https://cdn-icons-png.flaticon.com/512/1531/1531041.png"

        App.helpers.style(els.isl, {
            border: "0px solid red",
            display: "flex",
            justifyContent: "center",
            color: "#f78589",
            fontFamily: "sans-serif",
            fontSize: "15px",
            fontWeight: "bold",
            padding: "14px",
            width: "200px",
        })
        els.isl.innerHTML = "The anime island"
        App.helpers.style(els.isl, {
            backgroundImage: "url(https://i1.wp.com/azurebane.com/wp-content/uploads/2021/08/island2.png?resize=188%2C188&ssl=1",
            backgroundSize: "50px",
            backgroundPosition: "96% 45%",
            backgroundRepeat: "no-repeat",
        })

        els.el.appendChild(els.sakurax)
        els.users.el.appendChild(els.users.user)
        els.el.appendChild(els.isl)
        els.users.el.appendChild(els.users.favan)
        els.el.appendChild(els.users.el)
        App.elements.app.appendChild(els.el)
    },

    bodySite() {
        const els = App.elements.body
        const Div3 = {border: "px solid red", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", 
        alignItems: "center", alignContent: "center", fontFamily: "sans-serif", fontSize: "15px", padding: "0px", 
        margin: "0px", backgroundColor: "#fef8f9",};

        App.helpers.style(els.el, {border: "0px solid black" ,flexGrow: "1", margin: "0px", display: "flex",
        alignItems:  "flex-start", flexDirection: "row", overflowX: "hidden", overflowY: "auto",})




        App.helpers.style(els.itens.all, Div3)


        els.el.appendChild(els.itens.all)
        App.elements.app.appendChild(els.el)
    },

    footerSite() {
        const els = App.elements.footer

        App.helpers.style(els.el, {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            flexDirection: "row",
            alignItems: "center",
            border: "0px solid red",
            padding: "10px",
            backgroundColor: "gray",
            color: "white",
        })

        els.el.innerHTML = "2021 Sakura Petal. Todos os direitos reservados"

        //App.elements.app.appendChild(els.el)
    },

    createComponents() {
        const els = App.elements

        App.helpers.style(els.app, {
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
            overflowX: "hidden",
            overflow: "auto",
            border: "0px solid red",
        })

    },        
},

    elements: {
        app: document.getElementById("app"),

        header: {
            el: document.createElement("div"),
            sakurax: document.createElement("div"),
            users: {
                el: document.createElement("div"),
                user: document.createElement("img"),
                favan: document.createElement("img"),
            },
            isl: document.createElement("div"),
        },
        body: {
            el: document.createElement("div"),
            searchdiv: {
                el: document.createElement("div"),
                search: document.createElement("input"),
            },
            itens: {
                el: document.createElement("div"),
                all: document.createElement("div"),
                fav: document.createElement("div"),
                allCards: [],
                favMyCards: [],
            },
        },

        modal: {
            backdrop: document.createElement("div"),
            container: {
                el: document.createElement("div"),
                body: document.createElement("div"),
                close: {
                    el: document.createElement("div"),
                    btn: document.createElement("div"),
                },
            },
        },

        footer: {
            el: document.createElement("div"),
        },
    },
    helpers: {
        zeroPadding(value) {
            return value.toString().padStart(2, "0")
        },
        style(el, rules){
            for(let prop in rules){
                el.style[prop] = rules[prop]
            }
        },
    },
}
App.init()