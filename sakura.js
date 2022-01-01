const App = {
    init() {
        this.controllers.createComponents()
        this.controllers.modalSite()
        this.controllers.modalUser()
        this.controllers.modalAlert()
        this.controllers.headerSite()
        this.controllers.searchDiv()
        this.controllers.bodySite()
        this.controllers.contaUser()
        this.controllers.novaConta()
        this.controllers.renderAllAnimeCards()
        this.controllers.loadLocalData()
        this.controllers.renderAllMyAnim()
        this.controllers.footerSite()

    },

    state: {
        storageKey: "Sakura-X",

        animelist: [
            {id: 1, season: "S1", nomejp: "takt op.Destiny", nomeing: "takt op.Destiny", disponibilidade: "Crunchyroll", genero: "Ação, Fantasia, Música", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "Segunda-feira",
            img: "https://animeanime.global/wp-content/uploads/2021/09/431140.jpg",
            vid: "https://www.youtube-nocookie.com/embed/0lNjes4la9U"},
            
            {id: 2, season: "S1", nomejp: "Mieruko-chan", nomeing: "Mieruko-chan", disponibilidade: "Funimation", genero: "Comédia, Horror, Sobrenatural",
            episodios: "12", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/mieruko-chan/?qid=", epnovo: "segunda",
            img: "https://static.zerochan.net/Mieruko-chan.600.3391309.jpg",
            vid: "https://www.youtube-nocookie.com/embed/GfR0u_71jRA",
            sinopse: "Ela pode ver pessoas mortas... mas opta por ignorá-las. Esse é o plano de Miko, entretanto, com resultados horríveis (e, às vezes, hilários)."},

            {id: 3, season: "S1", nomejp: "Hepburn: Eiti Shikkusuy", nomeing: "86 EIGHTY-SIX", disponibilidade: "Crunchyroll", genero: "Drama, Mecha, Militar, Ação",
            episodios: "23", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/86-eighty-six", epnovo: "segunda",
            img: "https://kbimages1-a.akamaihd.net/81525c89-29ca-41f6-a1a4-88289079b200/353/569/90/False/86-eighty-six-vol-5-light-novel.jpg",
            vid: "https://www.youtube-nocookie.com/embed/fQoxKVLkrEY"},

            {id: 4, season: "S1", nomejp: "Guranburu", nomeing: "Grand Blue Dreaming", disponibilidade: "Amazon Prime", genero: "Comédia, Slice of Life",
            episodios: "12", temporada: "Outubro 2021", link: "https://www.primevideo.com/detail/0R9VJMVT7G1I5K03IUINLFHRBO/ref=atv_hm_hom_1_c_7d0kid_2_1", epnovo: "Finalizado",
            img: "https://animefire.net/img/animes/grand-blue-large.webp?v=1",
            vid: "https://www.youtube-nocookie.com/embed/7ygvyKSnmkI"},
            
            {id: 5, season: "S1", nomejp: "Saihate no Paladin", nomeing: "The Faraway Paladin", disponibilidade: "Crunchyroll", genero: "Aventura, Fantasia, Ação", 
            episodios: "Unknown", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/the-faraway-paladin", epnovo: "segunda",
            img: "https://m.media-amazon.com/images/M/MV5BYjAwMTU3YTEtNTQ1NS00MzY5LTlmYzItNmI5OTRiZDIxZTdlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
            vid: "https://www.youtube-nocookie.com/embed/OfEv9N-E0wE"},

            {id: 6, season: "S1", nomejp: "Maburavu orutaneitivu", nomeing: "Muv-Luv Alternative", disponibilidade: "Crunchyroll", genero: "Mecha, Militar", 
            episodios: "12", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/muv-luv-alternative", epnovo: "segunda",
            img: "https://cdn.myanimelist.net/images/anime/1916/118439.jpg",
            vid: "https://www.youtube-nocookie.com/embed/ftuD73sXiHU"},

            {id: 7, season: "S1", nomejp: "Sekai Saikō no Ansatsusha", nomeing: "The World's Best Assassin", disponibilidade: "Crunchyroll", genero: "Ação, Drama, Fantasia, Mistério, Romance", 
            episodios: "12", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/the-worlds-finest-assassin-gets-reincarnated-in-another-world-as-an-aristocrat", epnovo: "segunda",
            img: "https://blogs.opovo.com.br/tomodachinerds/wp-content/uploads/sites/102/2021/02/ansatsukizoku01.jpg",
            vid: "https://www.youtube-nocookie.com/embed/0PzC2F-tiME"},

            {id: 8, season: "S1", nomejp: "Kobayashi-san Chi no Maid Dragon", nomeing: "Miss Kobayashi's Dragon Maid", disponibilidade: "Crunchyroll", genero: "Romance, Comédia, Fantasia", 
            episodios: "25", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/miss-kobayashis-dragon-maid", epnovo: "segunda",
            img: "https://cdn.myanimelist.net/images/anime/5/85434.jpg",
            vid: "https://www.youtube-nocookie.com/embed/YVAnyHveq6E"},

            {id: 9, season: "S1", nomejp: "Shinka no Mi", nomeing: "The Fruit of Evolution", disponibilidade: "Crunchyroll", genero: "Fantasia, Romance", 
            episodios: "12", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/the-fruit-of-evolution-before-i-knew-it-my-life-had-it-made", epnovo: "segunda",
            img: "https://animesbr.biz/wp-content/uploads/2021/10/jiJZan11JtZcR76bihEtwjsLOBM.jpg",
            vid: "https://www.youtube-nocookie.com/embed/P441kTYtx1Q"},

            {id: 10, season: "S1", nomejp: "Bokutachi no Rimeiku", nomeing: "Remake Our Life!", disponibilidade: "Crunchyroll", genero: "Drama, Romance, Slice of Life", 
            episodios: "12", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/remake-our-life", epnovo: "Finalizado",
            img: "https://m.media-amazon.com/images/M/MV5BNjJmNDU0MzUtOWY3ZS00MDQ5LTg3OTQtODRiYWNmNzkxZTNiXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
            vid: "https://www.youtube-nocookie.com/embed/T1kzGVmqdmY"},

            {id: 11, season: "S1", nomejp: "Tōkyō Ribenjāzu", nomeing: "Tokyo Revengers", disponibilidade: "Crunchyroll", genero: "Drama, Ação, Sobrenatural", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/tokyo-revengers", epnovo: "Finalizado",
            img: "https://cdn.aprendejaponeshoy.com/19815/tokyo-revengers-tv-anime-official-guide-book.jpg",
            vid: "https://www.youtube-nocookie.com/embed/ZUzQQAZZqO4"},

            {id: 12, season: "S5", nomejp: "Boku no Hīrō Akademia", nomeing: "My Hero Academia", disponibilidade: "Crunchyroll", genero: "Ação, Comédia, Super-herói", 
            episodios: "25", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/takt-opdestiny", epnovo: "Finalizado",
            img: "https://cdn.myanimelist.net/images/anime/1911/113611.jpg",
            vid: "https://www.youtube-nocookie.com/embed/zkGSYFke1oE"},

            {id: 13, season: "S1", nomejp: "Tonikaku Kawaii", nomeing: "TONIKAWA: Over The Moon For You", disponibilidade: "Crunchyroll", genero: "Romance, Comédia", 
            episodios: "13", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/tonikawa-over-the-moon-for-you", epnovo: "Finalizado",
            img: "https://m.media-amazon.com/images/M/MV5BZmI0OTI1OWQtYzRkNy00NGVlLWFhYzAtNzAzNWRkNjE0ZThiXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
            vid: "https://www.youtube-nocookie.com/embed/oEfNqrkatII"},

            {id: 14, season: "S1", nomejp: "Ao-chan wa Benkyō ga Dekinai", nomeing: "Ao-chan Can't Study!", disponibilidade: "Crunchyroll", genero: "Comédia, Romance", 
            episodios: "12", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/ao-chan-cant-study", epnovo: "Finalizado",
            img: "https://cdn.myanimelist.net/images/anime/1718/98214.jpg",
            vid: "https://www.youtube-nocookie.com/embed/qN17SimWp0U"},

            {id: 15, season: "Movie", nomejp: "BLACKFOX", nomeing: "BLACKFOX", disponibilidade: "Crunchyroll", genero: "Ação, Drama", 
            episodios: "1", temporada: "Outubro 2021", link: "https://www.crunchyroll.com/pt-br/blackfox", epnovo: "Finalizado",
            img: "https://m.media-amazon.com/images/M/MV5BZTc3Y2ZhYTAtMjRlZS00YTY2LWIyOWMtMmYxYjUyNzA3NzVlXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
            vid: "https://www.youtube-nocookie.com/embed/6Q1cIHo7SdQ"},

            {id: 16, season: "S1", nomejp: "Mushoku Tensei: Isekai Ittara Honki Dasu", nomeing: "Mushoku Tensei: Jobless Reincarnation", disponibilidade: "Funimation", genero: "Drama, Fantasia, Ação, Ecchi", 
            episodios: "24", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/mushoku-tensei-jobless-reincarnation-p2/?qid=", epnovo: "Domingo",
            img: "https://cdn.myanimelist.net/images/anime/1028/117777.jpg",
            vid: "https://www.youtube-nocookie.com/embed/DTfgyQU-CDw"},

            {id: 17, season: "S1", nomejp: "Nichijou", nomeing: "Nichijou - My Ordinary Life", disponibilidade: "Funimation", genero: "Comédia, Slice of Life", 
            episodios: "26", temporada: "Abril 2011", link: "https://www.funimation.com/shows/nichijou-my-ordinary-life/?qid=", epnovo: "Finalizado",
            img: "https://cdn.myanimelist.net/images/anime/3/75617.jpg",
            vid: "https://www.youtube-nocookie.com/embed/3od3pc8LOPs"},

            {id: 18, season: "S1", nomejp: "Rogu Horaizun", nomeing: "Log Horizon", disponibilidade: "Funimation", genero: "Ação, Aventura, Fantasia, Isekai", 
            episodios: "25", temporada: "Outubro 2013", link: "https://www.funimation.com/shows/log-horizon-destruction-of-the-round-table/?qid=", epnovo: "Finalizado",
            img: "https://image.tmdb.org/t/p/w342/gsQCqqjUUDKcKEgWdJE4SlSNbPg.jpg",
            vid: "https://www.youtube-nocookie.com/embed/IG1VhJ75r8k"},

            {id: 19, season: "S1", nomejp: "Vivy: Fluorite Eye's Song", nomeing: "Vivy: Fluorite Eye's Song", disponibilidade: "Funimation", genero: "Ação, Sci-Fi, Suspense", 
            episodios: "13", temporada: "Abril 2021", link: "https://www.funimation.com/shows/vivy-fluorite-eyes-song-/?qid=", epnovo: "Finalizado",
            img: "https://m.media-amazon.com/images/M/MV5BZjMwOWJmNDQtNWRkMC00ODhjLTgyMGEtYzI0MjU3ZjBlNTUzXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_.jpg",
            vid: "https://www.youtube-nocookie.com/embed/Y653dJQ_ecs"},

            {id: 20, season: "S1", nomejp: "Shadō Hausu", nomeing: "Shadows House", disponibilidade: "Funimation", genero: "Slice of Life, Mistério, Sobrenatural", 
            episodios: "13", temporada: "Abril 2021", link: "https://www.funimation.com/shows/shadows-house/?qid=", epnovo: "Finalizado",
            img: "https://cdn.myanimelist.net/images/anime/1424/113342.jpg",
            vid: "https://www.youtube-nocookie.com/embed/t7lGIJGAMm0"},

            {id: 21, season: "S1", nomejp: "Tsuki to Laika to Nosferatu", nomeing: "Irina: The Vampire Cosmonaut", disponibilidade: "Funimation", genero: "Sci-fi, Fantasia", 
            episodios: "12", temporada: "Outubro 2021", link: "https://www.funimation.com/shows/irina-the-vampire-cosmonaut/?qid=", epnovo: "Finalizado",
            img: "https://cdn.myanimelist.net/images/anime/1393/118374.jpg",
            vid: "https://www.youtube-nocookie.com/embed/XaD3ebxrxqk"},

            {id: 22, season: "S1", nomejp: "Hori-san and Miyamura-kun", nomeing: "Horimiya", disponibilidade: "Funimation", genero: "Comédia, Romance, Slice of Life", 
            episodios: "13", temporada: "Janeiro 2021", link: "https://www.funimation.com/shows/horimiya/?qid=", epnovo: "Finalizado",
            img: "https://cdn.myanimelist.net/images/anime/1695/111486.jpg",
            vid: "https://www.youtube-nocookie.com/embed/CNs2IZQZcyI"},

            {id: 23, season: "S1", nomejp: "Wārudo Torigā", nomeing: "World Trigger", disponibilidade: "Crunchyroll", genero: "Ação, Sci-Fi, Sobrenatural", 
            episodios: "73", temporada: "Outubro 2014", link: "https://www.crunchyroll.com/world-trigger", epnovo: "Finalizado",
            img: "https://cdn.myanimelist.net/images/anime/1783/106843.jpg",
            vid: "https://www.youtube-nocookie.com/embed/pqc0AS1nFlA"},
        ],

        myAnim: []
    },

    controllers: {

    showModal(body) {
        App.elements.modal.backdrop.style.display = "flex"
        App.elements.modal.container.body.innerHTML = ""
        App.elements.modal.container.body.appendChild(body)
    },

    loadLocalData(){
        const data = localStorage.getItem(App.state.storageKey);
        if(data){
            App.state = JSON.parse(data);
        } 
    },

    contaUser(){
        const els = App.elements.contaUser
        const entrar = els.container2.btn2

        App.helpers.style(els.backdrop2, {position: "relative", width: "100%", height: "100%",
        background: "rgba(0, 0, 0, 0.1)", display: "none", justifyContent: "space-between", alignItems: "center",
        alignContent: "center", overflow: "auto", flexDirection: "column", textAlign: "center", overflowX: "hidden",});

        els.container2.el.classList.add("el-container2-el")

        App.helpers.style(els.container2.header2, {textFamily: "sans-serif", textAlign: "center", fontSize: "16px",
        marginBottom: "5%", marginTop: "5%",})
        els.container2.header2.innerHTML = "Para ver e gerenciar as informações da sua conta, informe os dados abaixo"

        App.helpers.style(els.container2.usuario, {border: "none" , borderBottom: "2px solid #595a5a", outline: "none",
        width: "197px"})
        els.container2.usuario.placeholder = "Usuário"
        els.container2.usuario.focus()

        App.helpers.style(els.container2.senha, {border: "none" , borderBottom: "2px solid #595a5a", outline: "none",
        paddingRight: "20px", width: "179px",})
        els.container2.senha.placeholder = "Senha"
        let senha = els.container2.senha
        senha.setAttribute("type", "password")

        els.container2.forpass.classList.add("forgot-password")
        els.container2.forpass.innerHTML = "Esqueceu sua senha?"
        els.container2.forpass.onclick = function(){
            window.location.href = ""
        }

        els.container2.errolog.classList.add("erro-log")
        els.container2.errolog.innerHTML = "Usuário ou senha incorretos"
        els.container2.btn2.classList.add("account-btn2")
        els.container2.btn2.innerHTML = "Entrar"
        entrar.addEventListener("click", function(){
            const usuario = els.container2.usuario
            const senha = els.container2.senha
            let ListaUser = []
            let userValid = {
                nome: "",
                user: "",
                senha: ""
            }
            ListaUser = JSON.parse(localStorage.getItem("ListaUser"))
            ListaUser.forEach((item) => {
                if (usuario.value === item.usuarioCad && senha.value == item.senhaCad) {
                    userValid = {
                        nome: item.nomeCad,
                        user: item.usuarioCad,
                        senha: item.senhaCad
                    }
                }
            })
            if (usuario.value === userValid.user && senha.value === userValid.senha) {
                window.location.href = ""
                let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                localStorage.setItem("token", token)

                localStorage.setItem("userLogado", JSON.stringify(userValid))
            } else {
                els.container2.errolog.style.display = "block"
                usuario.focus()
                setTimeout(() => {
                    els.container2.errolog.style.display = "none"
                }, 2000)
            }
        })


        App.helpers.style(els.container2.newacc, {textFamily: "sans-serif", textAlign: "center", fontSize: "13px",
        fontWeight: "bold", cursor: "pointer"})
        els.container2.newacc.innerHTML = "Não tem uma conta? <span class='criar-conta'>Crie uma agora!</span>"
        els.container2.newacc.onclick = () => {
            App.elements.cadastro.backdrop2.style.display = "flex"
            App.elements.contaUser.backdrop2.style.display = "none"
            App.elements.footer.el.style.display = "flex"
        }

        els.container2.verpass.classList.add("ver-password")
        els.container2.verpass.src = "https://img.icons8.com/color/48/000000/invisible.png"
        els.container2.verpass.onclick = () => {
            if (senha.type === "password") {
                senha.type = "text"
                els.container2.verpass.src = "https://img.icons8.com/color/48/000000/visible.png"
            } else {
                senha.type = "password"
                els.container2.verpass.src = "https://img.icons8.com/color/48/000000/invisible.png"
            }
        }

        els.container2.el.appendChild(els.container2.header2)
        els.container2.el.appendChild(els.container2.errolog)
        els.container2.el.appendChild(els.container2.usuario)
        els.container2.el.appendChild(els.container2.senha)
        els.container2.el.appendChild(els.container2.verpass)
        els.container2.el.appendChild(els.container2.forpass)
        els.container2.el.appendChild(els.container2.btn2)
        els.container2.el.appendChild(els.container2.newacc)
        els.backdrop2.appendChild(els.container2.el)
        App.elements.app.appendChild(els.backdrop2)
    },

    novaConta(){
        const els = App.elements.cadastro
        const nome = els.novaacc.nome
        const user = els.novaacc.usuario2
        const senha2 = els.novaacc.senha2
        const senha3 = els.novaacc.senha3

        App.helpers.style(els.backdrop2, {position: "relative", width: "100%", height: "100%",
        background: "rgba(0, 0, 0, 0.1)", display: "none", justifyContent: "center", alignItems: "center",
        alignContent: "center", overflow: "auto", flexDirection: "column", textAlign: "center", overflowX: "hidden",});

        els.novaacc.el.classList.add("el-novaacc-el")

        App.helpers.style(els.novaacc.header3, {textFamily: "sans-serif", textAlign: "center", fontSize: "16px",})
        els.novaacc.header3.innerHTML = "Preencha os dados abaixo para criar sua conta na Sakura Petal"

        els.novaacc.mininone.classList.add("mini-caract")
        els.novaacc.mininone.innerHTML = "Insira no mínimo 4 caracteres"
        App.helpers.style(els.novaacc.nome, {border: "0" , borderBottom: "2px solid #595a5a", outline: "none",
        width: "196px"})
        els.novaacc.nome.placeholder = "Nome"
        nome.addEventListener("keyup", () => {
            if (nome.value.length <= 3) {
                els.novaacc.nome.style.borderBottom = "2px solid red"
                validNome = false
                els.novaacc.mininone.style.display = "block"
            } else {
                els.novaacc.nome.style.borderBottom = "2px solid green"
                validNome = true
                els.novaacc.mininone.style.display = "none"
            }
        })
        let validNome = false

        els.novaacc.miniuser.classList.add("mini-caract2")
        els.novaacc.miniuser.innerHTML = "Insira no mínimo 4 caracteres"
        App.helpers.style(els.novaacc.usuario2, {border: "0" , borderBottom: "2px solid #595a5a", outline: "none",
        width: "196px",})
        els.novaacc.usuario2.placeholder = "Usuário"
        user.addEventListener("keyup", () => {
            if (user.value.length <= 3) {
                els.novaacc.usuario2.style.borderBottom = "2px solid red"
                validUser = false
                els.novaacc.miniuser.style.display = "block"
            } else {
                els.novaacc.usuario2.style.borderBottom = "2px solid green"
                validUser = true
                els.novaacc.miniuser.style.display = "none"
            }
        })
        let validUser = false

        els.novaacc.minisenha2.classList.add("mini-caract3")
        els.novaacc.minisenha2.innerHTML = "Insira no mínimo 6 caracteres"
        App.helpers.style(els.novaacc.senha2, {border: "0" , borderBottom: "2px solid #595a5a", outline: "none",
        paddingRight: "20px", width: "178px",})
        els.novaacc.senha2.placeholder = "Senha"
        senha2.setAttribute("type", "password")
        senha2.addEventListener("keyup", () => {
            if (senha2.value.length <= 5) {
                els.novaacc.senha2.style.borderBottom = "2px solid red"
                validSenha2 = false
                els.novaacc.minisenha2.style.display = "block"
                senha3.disabled = true
            } else {
                els.novaacc.senha2.style.borderBottom = "2px solid green"
                validSenha2 = true
                els.novaacc.minisenha2.style.display = "none"
                senha3.disabled = false
            }
        })
        let validSenha2 = false

        els.novaacc.minisenha3.classList.add("mini-caract4")
        els.novaacc.minisenha3.innerHTML = "As senhas não conferem"
        App.helpers.style(els.novaacc.senha3, {border: "0" , borderBottom: "2px solid #595a5a", outline: "none",
        paddingRight: "20px", width: "178px",})
        els.novaacc.senha3.placeholder = "Confirmar senha"
        senha3.disabled = true
        senha3.setAttribute("type", "password")
        senha3.addEventListener("keyup", () => {
             if (senha2.value != senha3.value) {
                els.novaacc.senha3.style.borderBottom = "2px solid red"
                validSenha3 = false
                els.novaacc.minisenha3.style.display = "block"
            } else {
                els.novaacc.senha3.style.borderBottom = "2px solid green"
                validSenha3 = true
                els.novaacc.minisenha3.style.display = "none"
            }
        })
        let validSenha3 = false

        els.novaacc.erroconta.classList.add("erro-conta")
        els.novaacc.erroconta.innerHTML = "Preencha todos os campos corretamente"
        els.novaacc.sucssconta.classList.add("sucs-conta")
        els.novaacc.sucssconta.innerHTML = "Cadastrando usuário..."
        els.novaacc.btn3.classList.add("account-btn2")
        els.novaacc.btn3.innerHTML = "Criar conta"
        els.novaacc.btn3.onclick = () => {
            if (validNome && validUser && validSenha2 && validSenha3) {
                let ListaUser = JSON.parse(localStorage.getItem("ListaUser") || "[]")
                ListaUser.push({
                    nomeCad: nome.value,
                    usuarioCad: user.value,
                    senhaCad: senha2.value
                })
                localStorage.setItem("ListaUser", JSON.stringify(ListaUser))
                els.novaacc.sucssconta.style.display = "block"
                els.novaacc.erroconta.style.display = "none"
                setTimeout(() => {
                    els.novaacc.sucssconta.style.display = "none"
                    window.location.href = ""
                }, 2000)
                
            } else {
                els.novaacc.erroconta.style.display = "block"
                els.novaacc.sucssconta.style.display = "none"
                setTimeout(() => {
                    els.novaacc.erroconta.style.display = "none"
                }, 2000)
            }
        }

        App.helpers.style(els.novaacc.btn4, {textFamily: "sans-serif", textAlign: "center", fontSize: "15px",
        fontWeight: "bold", cursor: "pointer",})
        els.novaacc.btn4.innerHTML = "Cancelar"
        els.novaacc.btn4.onclick = () => {
            window.location.reload()
        },

        els.novaacc.verpass2.classList.add("ver-password2")
        els.novaacc.verpass2.src = "https://img.icons8.com/color/48/000000/invisible.png"
        els.novaacc.verpass2.onclick = () => {
            if (senha2.type === "password") {
                senha2.type = "text"
                els.novaacc.verpass2.src = "https://img.icons8.com/color/48/000000/visible.png"
            } else {
                senha2.type = "password"
                els.novaacc.verpass2.src = "https://img.icons8.com/color/48/000000/invisible.png"
            }
        }

        els.novaacc.verpass3.classList.add("ver-password3")
        els.novaacc.verpass3.src = "https://img.icons8.com/color/48/000000/invisible.png"
        els.novaacc.verpass3.onclick = () => {
            if (senha3.type === "password") {
                senha3.type = "text"
                els.novaacc.verpass3.src = "https://img.icons8.com/color/48/000000/visible.png"
            } else {
                senha3.type = "password"
                els.novaacc.verpass3.src = "https://img.icons8.com/color/48/000000/invisible.png"
            }
        }

        els.novaacc.el.appendChild(els.novaacc.header3)
        els.novaacc.el.appendChild(els.novaacc.erroconta)
        els.novaacc.el.appendChild(els.novaacc.sucssconta)
        els.novaacc.el.appendChild(els.novaacc.nome)
        els.novaacc.el.appendChild(els.novaacc.mininone)
        els.novaacc.el.appendChild(els.novaacc.usuario2)
        els.novaacc.el.appendChild(els.novaacc.miniuser)
        els.novaacc.el.appendChild(els.novaacc.senha2)
        els.novaacc.el.appendChild(els.novaacc.minisenha2)
        els.novaacc.el.appendChild(els.novaacc.verpass2)
        els.novaacc.el.appendChild(els.novaacc.senha3)
        els.novaacc.el.appendChild(els.novaacc.minisenha3)
        els.novaacc.el.appendChild(els.novaacc.verpass3)
        els.novaacc.el.appendChild(els.novaacc.btn3)
        els.novaacc.el.appendChild(els.novaacc.btn4)
        els.backdrop2.appendChild(els.novaacc.el)
        App.elements.app.appendChild(els.backdrop2)
    },

    favFlow(anime){
        App.state.myAnim.push(anime) 
                
        const arr = App.state.animelist.filter((ani) => {
            return ani.id !== anime.id
        })
        App.state.animelist = arr

        App.controllers.renderAllMyAnim()
        App.controllers.hideModal()
        App.controllers.setLocalData()
    },

    desfavFlow(anime){
        App.state.animelist.push(anime) 
        const arr = App.state.myAnim.filter((ani) => {
            return ani.id !== anime.id
        })
        App.state.myAnim = arr

        App.controllers.renderAllMyAnim()
        App.controllers.hideModal()
        App.controllers.setLocalData()
    },

    setLocalData(){
        localStorage.setItem(App.state.storageKey, JSON.stringify(App.state));
    },

    modalUser(){
        const el = App.elements.conta;

        App.helpers.style(el.backdrop2, {position: "absolute", left: 0, top: 0, width: "100%", height: "100%",
        background: "rgba(0, 0, 0, 0)", display: "none", justifyContent: "flex-end",overflow: "auto"})

        el.container2.el.classList.add("el-container2-el")

        App.helpers.style(el.container2.title, {display:"flex" ,textFamily: "sans-serif", textAlign: "center", fontSize: "14px",
        color: "black", fontWeight: "", cursor: "pointer", width: "100%", height: "100%", justifyContent: "center",
        alignItems: "center",})
        el.container2.title.innerHTML = "Minha conta"
        el.container2.title.onclick = function(){
            window.location.href = ""
        }
        el.container2.title.onmouseover = () => {
            el.container2.title.style.backgroundColor = "#a5d1eb"
        }
        el.container2.title.onmouseout = () => {
            el.container2.title.style.backgroundColor = ""
        }

        App.helpers.style(el.container2.header2, {textFamily: "sans-serif", textAlign: "center", fontSize: "14px",
        cursor: "pointer", color: "black", fontWeight: "",  width: "100%", height: "100%", justifyContent: "center",
        alignItems: "center", display: "flex"})
        el.container2.header2.innerHTML = "Sair"
        el.container2.header2.onclick = () => {
            localStorage.removeItem("token")
            localStorage.removeItem("userLogado")
            window.location.reload()
        }
        el.container2.header2.onmouseover = () => {
            el.container2.header2.style.backgroundColor = "#a5d1eb"
        }
        el.container2.header2.onmouseout = () => {
            el.container2.header2.style.backgroundColor = ""
        }

        App.elements.header.users.user.onclick = () => {
            if (localStorage.getItem("token") === null) {
                window.location.href = ""
            } else if (el.backdrop2.style.display === "none") {
                el.backdrop2.style.display = "flex"
            } else {
                el.backdrop2.style.display = "none"
            } 
        }

        el.backdrop2.onclick = (evt) => {
            if (evt.target === el.backdrop2) {
                el.backdrop2.style.display = "none"
            }
        }

        el.container2.el.appendChild(el.container2.title)
        el.container2.el.appendChild(el.container2.header2)
        el.backdrop2.appendChild(el.container2.el)
        App.elements.app.appendChild(el.backdrop2)
    },

    modalAlert(){
        const el = App.elements.alerta

        App.helpers.style(el.backdrop3, {position: "absolute", left: 0, top: 0, width: "100%", height: "100%",
        background: "rgba(0, 0, 0, 0.5)", display: "none", justifyContent: "center", alignContent: "center", 
        overflow: "auto", alignItems: "center"})

        el.container3.el.classList.add("el-alerta-el")

        App.helpers.style(el.container3.title2, {textFamily: "sans-serif", textAlign: "center", fontSize: "20px",
        color: "#f78589", fontWeight: "bold", position: "relative"})
        el.container3.title2.innerHTML = "Acesse a sua conta"

        App.helpers.style(el.container3.title3, {textFamily: "sans-serif", textAlign: "center", fontSize: "16px", position: "relative"})

        el.container3.btn4.classList.add("entrar-conta")
        el.container3.btn4.innerHTML = "Entrar"

        el.container3.btn4.onclick = () => {
            window.location.href = ""
        }

        App.helpers.style(el.container3.cad, {textFamily: "sans-serif", textAlign: "center", fontSize: "16px", cursor: "pointer",})
        el.container3.cad.innerHTML = "Não tem uma conta? <span class='criar-conta'>Crie uma agora!</span>"

        el.container3.cad.onclick = () => {
            App.elements.cadastro.backdrop2.style.display = "flex"
            App.elements.body.el.style.display = "none"
            App.elements.footer.el.style.display = "flex"
            el.backdrop3.style.display = "none"
        }

        App.helpers.style(el.container3.close2.el, {
            border: "0px solid blue",
            paddingRight: "5px",
            margin: "0px",
            display: "flex",
            justifyContent: "flex-end"
        })

        el.container3.close2.btn5.innerHTML = "X"
        App.helpers.style(el.container3.close2.btn5, {
            cursor: "pointer",
            fontFamily: "sans-serif"
        })

        el.backdrop3.onclick = (evt) => {
            if (evt.target === el.backdrop3) {
                el.backdrop3.style.display = "none"
            }
        }

        el.container3.close2.el.appendChild(el.container3.close2.btn5)
        el.container3.el.appendChild(el.container3.title2)
        el.container3.el.appendChild(el.container3.title3)
        el.container3.el.appendChild(el.container3.btn4)
        el.container3.el.appendChild(el.container3.cad)
        el.backdrop3.appendChild(el.container3.el)
        App.elements.app.appendChild(el.backdrop3)
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
            overflow: "auto",
            zIndex: "1"
        })

        App.helpers.style(el.container.el, {
            width: "350px",
            background: "white",
            borderRadius: "10px",
            paddingBottom: "5px",
            zIndex: "1"
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

    createAnimCards(anime, isBuy) {
        const el = document.createElement("div")
        const header = document.createElement("div")
        const img = document.createElement("img")
        const container5 = document.createElement("div")
        const nome1 = document.createElement("div")
        const temporada = document.createElement("div")
        const genero = document.createElement("div")
        const disponibilidade = document.createElement("div")
        const btn = document.createElement("button")
        
        el.classList.add("anime-card")
        
        el.onmouseover = function () {
            el.style.boxShadow = "0px 0px 3px 1px #b56a4c"
            // fall - #b56a4c
            // winter - #74b4b4
        }
        el.onmouseout = function () {
            el.style.boxShadow = "0px 0px 5px 2px #c5c5c5"
        }
        App.helpers.style(el, {
            backgroundImage: "url(" + anime.img + ")",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
        })
        el.onclick = () => {
            const content = App.controllers.createCardsContent(anime, isBuy)
            App.controllers.showModal(content)
        }

        container5.classList.add("anime-card-container5")
        nome1.classList.add("anime-detail")
        nome1.innerHTML = anime.nomeing
        temporada.classList.add("anime-detail2")
        temporada.innerHTML = " Temporada - " + anime.temporada
        genero.classList.add("anime-detail2")
        genero.innerHTML = " Gênero - " + anime.genero
        disponibilidade.classList.add("anime-detail2")
        disponibilidade.innerHTML = " Disponível - " + anime.disponibilidade
        if (anime.disponibilidade === "Crunchyroll") {
            disponibilidade.style.color = " #DF6300"
        } 
        if (anime.disponibilidade === "Funimation") {
            disponibilidade.style.color = "#800080"
        }
        if (anime.disponibilidade === "Netflix") {
            disponibilidade.style.color = "#E50914"
        }
        if (anime.disponibilidade === "Amazon Prime") {
            disponibilidade.style.color = "#00A8E1"
        }

        container5.appendChild(nome1)
        container5.appendChild(temporada)
        container5.appendChild(genero)
        container5.appendChild(disponibilidade)
        el.appendChild(container5)

        return el
    },

    createCardsContent(anime, isBuy) {
        const el = document.createElement("div")
        const img = document.createElement("iframe")
        const header = document.createElement("div")
        const container = document.createElement("div")
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
        const l6 = document.createElement("div")
        const v6 = document.createElement("div")
        const l7 = document.createElement("div")
        const v7 = document.createElement("div")
        const btn = document.createElement("button")

        App.helpers.style(el, {
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
        })
        
        img.classList.add("img-video")
        img.src = anime.vid
        img.frameborder = "0"
        img.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        img.allowfullscreen = "true"

        header.classList.add("anime-card-header")
        header.innerHTML = anime.nomeing

        container.classList.add("anime-card-container")

        l1.innerHTML = "Gênero:"
        v1.innerHTML = anime.genero
        l1.classList.add("anime-card-l1")
        v1.classList.add("anime-card-v1")

        l2.innerHTML = "Episódios:"
        v2.innerHTML = anime.episodios
        l2.classList.add("anime-card-l2")
        v2.classList.add("anime-card-v2")

        l3.innerHTML = "Ep. novo:"
        v3.innerHTML = anime.epnovo
        l3.classList.add("anime-card-l3")
        v3.classList.add("anime-card-v3")

        l4.innerHTML = "Link:"
        v4.innerHTML = "Assista aqui"
        v4.style.color = "#f78589"
        v4.style.textDecoration = "underline"
        v4.style.cursor = "pointer"
        v4.onclick = () => {
            window.open(anime.link)
        }
        l4.classList.add("anime-card-l4")
        v4.classList.add("anime-card-v4")

        l5.classList.add("anime-card-l5")
        l5.innerHTML = "Estúdio:"
        v5.innerHTML = "Qualquer um"
        v5.classList.add("anime-card-v5")

        l6.classList.add("anime-card-l6")
        l6.innerHTML = "Temporada:"
        v6.innerHTML = anime.temporada
        v6.classList.add("anime-card-v6")

        l7.classList.add("anime-card-l7")
        l7.innerHTML = "Nome JP:"
        v7.innerHTML = anime.nomejp
        v7.classList.add("anime-card-v7")

        btn.classList.add("anime-card-btn")
        btn.innerHTML = isBuy ? "Favoritar" : "Desfavoritar"
        btn.style.marginTop = "5px"
        btn.onclick = () => {
            if (localStorage.getItem("token") === null) {
                App.controllers.hideModal()
                App.elements.alerta.backdrop3.style.display = "flex"
                App.elements.alerta.container3.title3.innerHTML = "Entre no Sakura Petal para adicionar animes na sua lista."
            } else if (isBuy) {
                App.controllers.favFlow(anime)
            } else {
                App.controllers.desfavFlow(anime)
            } 
        }
        btn.disabled = isBuy ? App.state.myAnim.some(ani => ani.id === anime.id) : false

        el.appendChild(img)
        el.appendChild(header)
        el.appendChild(container)
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
        container.appendChild(l6)
        container.appendChild(v6)
        container.appendChild(l7)
        container.appendChild(v7)
        el.appendChild(btn)

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
            const el = this.createAnimCards(anime, false)
            container.fav.appendChild(el)
            container.favMyCards.push(el)
        } 
    },

    headerSite() {
        const els = App.elements.header

        els.el.classList.add("header-site")

        els.sakurax.classList.add('sakurax')
        els.sakurax.innerHTML = "Sakura Petal"
        App.helpers.style(els.sakurax, {
            backgroundImage: "url(https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/35950/cherry-blossoms-branch-clipart-xl.png",
            backgroundSize: "150px",
            backgroundPosition: "50% 45%",
            backgroundRepeat: "no-repeat",
        })
        els.sakurax.onclick = () => {
            window.location.reload()
        }


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
        els.users.user.onclick = () => {
            App.elements.contaUser.backdrop2.style.display = "flex"
            App.elements.body.el.style.display = "none"
            App.elements.footer.el.style.display = "flex"
        }

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
        els.users.favan.onclick = function () {
            if (localStorage.getItem("token") === null) {
                App.elements.alerta.backdrop3.style.display = "flex"
                App.elements.alerta.container3.title3.innerHTML = "É necessário entrar na sua conta para acessar sua lista de favoritos."

            } else if (App.elements.body.itens.all.style.display === "flex") {
                App.elements.body.itens.all.style.display = "none"
                App.elements.body.itens.fav.style.display = "flex"
                els.users.favan.src = "https://cdn-icons-png.flaticon.com/512/0/340.png"
            } else {
                App.elements.body.itens.fav.style.display = "none"
                App.elements.body.itens.all.style.display = "flex"
                els.users.favan.src = "https://cdn-icons-png.flaticon.com/512/1531/1531041.png"
            } 
        }

        els.users.searchicon.classList.add("search-icon")
        els.users.searchicon.src = "https://www.pinclipart.com/picdir/big/149-1490404_clipart-computer-magnifying-glass-anime-magnifying-glass-png.png"
        els.users.searchicon.onclick = () => {
            if (App.elements.body.searchdiv.el.style.display === "none") {
                App.elements.body.searchdiv.el.style.display = "flex"
            } else {
                App.elements.body.searchdiv.el.style.display = "none"
            }
        }

        els.el.appendChild(els.sakurax)
        els.users.el.appendChild(els.users.searchicon)
        els.users.el.appendChild(els.users.user)
        els.users.el.appendChild(els.users.favan)
        els.el.appendChild(els.users.el)
        App.elements.app.appendChild(els.el)
    },

    searchDiv() {
        const els = App.elements.body.searchdiv
        const Searchbar = {outline: "none", fontSize: "14px",position: "sticky", display: "flex", border: "1px solid #ece8e8", height: "5vh",
        backgroundColor: "white", width: "400px", paddingLeft: "2vw", marginBottom: "2vh", marginTop: "2vh"}

        App.helpers.style(els.el, {
        display: "none", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", alignContent: "center", 
        fontFamily: "sans-serif", fontSize: "15px", padding: "0px", margin: "0px", backgroundColor: "white",
        transition: "transform .9s ease-in-out",})
        App.helpers.style(els.el, {
            backgroundImage: "url(https://img1.picmix.com/output/stamp/normal/0/9/1/4/644190_e7498.gif)",
            backgroundSize: "20%",
            backgroundRepeat: "repeat",
        })
        // Fall - https://img1.picmix.com/output/stamp/normal/0/9/1/4/644190_e7498.gif
        // Primav - https://i.pinimg.com/originals/52/b3/ca/52b3caaa9e283398b6d5b80a11938bed.gif

        els.el.style.border = "0px solid #4E9DCA"
        
        els.search.classList.add("search-bar")
        els.search.placeholder = "Digite o nome da obra"

        App.helpers.style(els.search, {
            backgroundImage: "url(https://img.flaticon.com/icons/png/512/61/61088.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF)",
            backgroundSize: "2vw",
            backgroundPosition: "1% 45%",
            backgroundRepeat: "no-repeat",
        })
        const search = els.search
        const carslist = App.state.animelist
        search.addEventListener("keyup", (e) => {
            const searchString = e.target.value.toLowerCase();
            const filterCars = carslist.filter(ani => {
                return ani.nomeing.toLowerCase().includes(searchString) || ani.nomejp.toLowerCase().includes(searchString)
            });
            App.state.animelist = filterCars
            App.controllers.renderAllAnimeCards()
        })

        els.el.appendChild(els.search)
        App.elements.app.appendChild(els.el)
    },

    bodySite() {
        const els = App.elements.body
        const Div3 = {border: "px solid red", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", 
        alignItems: "center", fontFamily: "sans-serif", fontSize: "15px", padding: "0px", 
        margin: "0px", overflow: "auto", backgroundColor: "#FFB7C5", width: "100%", height: "100%",};
        const Div4 = {border: "px solid red", display: "none", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", 
        alignItems: "center", fontFamily: "sans-serif", fontSize: "15px", padding: "0px", 
        margin: "0px", overflow: "auto", backgroundColor: "#FFB7C5", width: "100%", height: "100%",};

        App.helpers.style(els.el, {border: "0px solid black" ,flexGrow: "1", margin: "0px", display: "flex",
        alignItems:  "flex-start", flexDirection: "row", overflowX: "hidden", overflowY: "auto",})




        App.helpers.style(els.itens.all, Div3)
        App.helpers.style(els.itens.fav, Div4)


        els.el.appendChild(els.itens.all)
        els.el.appendChild(els.itens.fav)
        App.elements.app.appendChild(els.el)
    },

    footerSite() {
        const els = App.elements.footer

        App.helpers.style(els.el, {
            display: "none",
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

        App.elements.app.appendChild(els.el)
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
                searchicon: document.createElement("img"),
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

        contaUser: {
            backdrop2: document.createElement("div"),
            header: document.createElement("div"),
            container2: {
                el: document.createElement("div"),
                header2: document.createElement("div"),
                usuario: document.createElement("input"),
                senha: document.createElement("input"),
                btn2: document.createElement("button"),
                forpass: document.createElement("div"),
                newacc: document.createElement("div"),
                verpass: document.createElement("img"),
                errolog: document.createElement("div"),
            },
            footer: document.createElement("div"),
        },
        cadastro: {
            backdrop2: document.createElement("div"),
            novaacc: {
                el: document.createElement("div"),
                header3: document.createElement("div"),
                nome: document.createElement("input"),
                usuario2: document.createElement("input"),
                senha2: document.createElement("input"),
                senha3: document.createElement("input"),
                btn3: document.createElement("button"),
                btn4: document.createElement("div"),
                verpass2: document.createElement("img"),
                verpass3: document.createElement("img"),
                mininone: document.createElement("div"),
                miniuser: document.createElement("div"),
                minisenha2: document.createElement("div"),
                minisenha3: document.createElement("div"),
                erroconta: document.createElement("div"),
                sucssconta: document.createElement("div"),
             },
        },

        conta: {
            backdrop2: document.createElement("div"),
            container2: {
                el: document.createElement("div"),
                title: document.createElement("div"),
                header2: document.createElement("div"),
            },
        },
        alerta: {
            backdrop3: document.createElement("div"),
            container3: {
                el: document.createElement("div"),
                title2: document.createElement("div"),
                title3: document.createElement("div"),
                btn4: document.createElement("button"),
                cad: document.createElement("div"),
                close2: {
                    el: document.createElement("div"),
                    btn5: document.createElement("div"),
                },
            },
        },

        alerta2: {
            backdrop4: document.createElement("div"),
            container4: {
                el: document.createElement("div"),
                title: document.createElement("div"),
                gif: document.createElement("img"),
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