var idElementSelected = 'Trabalhos' //Item selecionado na pagina
var idPgSelected = 'PageTrabalhos' //Id atual da pagina visivel
var expandCardResumo = false //status do card resumo, se o mesmo esta expandido ou nao
var isBold = false //status do texto em negrito
var isItalic = false //status do texto em italico

//Funcao usada para mostrar visualmente que uma opcao do menu foi clicada
//idElement: id do menu clicado
function isSelected(idElement) {
    if(idElementSelected != idElement){        
        document.getElementById(idElementSelected).style.borderLeft = "0px solid"; 
        document.getElementById(idElementSelected).style.backgroundColor = "transparent";       
    }

    document.getElementById(idElement).style.backgroundColor = "#FDF1EB";
    document.getElementById(idElement).style.borderLeft = "5px solid";
    document.getElementById(idElement).style.borderImage = "linear-gradient(#FFB455, #ED7839) 1 100%";

    idElementSelected = idElement;
}

//Funcao usada para deixar visivel determinada pagina
//idPg: id da pagina que sera mostrada
function isSelectedPage(idPage) {
    if(idPgSelected != idPage){        
        document.getElementById(idPgSelected).style.display = "none";              
    }

    document.getElementById(idPage).style.display = "block";

    idPgSelected = idPage;
}

//Funcao ultilizada para expandir card de resumo
function cardExpand() {
    if(expandCardResumo){
        var styles = `
        .ocultLinetext{
            display: -webkit-box;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }`        
    }

    else{
        var styles = `
        .ocultLinetext{
            display: -webkit-box;
            -webkit-line-clamp: 1000;
            -webkit-box-orient: vertical;  
            overflow: hidden;
        }`
    }    
    expandCardResumo = !expandCardResumo
    
    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)
}

//Funcao para deixar o texto negrito
function fontBold() {
    if(!isBold){
        document.getElementById("exampleFormControlTextarea1").style.fontWeight = "bold";
    }

    else{
        document.getElementById("exampleFormControlTextarea1").style.fontWeight = "normal";     
    }

    isBold = !isBold;
}

//Funcao para deixar o texto em italico
function fontItalic() {
    if(!isItalic){
        document.getElementById("exampleFormControlTextarea1").style.fontStyle = "italic";
    }

    else{
        document.getElementById("exampleFormControlTextarea1").style.fontStyle = "normal";     
    }

    isItalic = !isItalic;
}

//Funcao responsavel por fazer aparecer na tela a caixa para escrever as duvidas
function criaTopico(idButton) {
    document.getElementById("capaDiscussoes").style.display = "none";
    document.getElementById("sendSuccess").style.display = "none";
    document.getElementById("sendDoubt").style.display = "block";
    document.getElementById(idButton).style.display = "none";
}

//Funcao responsavel por ocultar caixa para escrever duvidas e deixar visivel a mensagem de enviado com sucesso
function sendButton() {
    document.getElementById("sendDoubt").style.display = "none";
    document.getElementById("sendSuccess").style.display = "block";    
    document.getElementById("capaDiscussoes").style.display = "none";   
    document.getElementById("criaTopico").style.display = "block"; //mostra botao 
    document.getElementById("setText").innerHTML = "criar novo tópico"; //muda texto do botao
    document.getElementById("criaTopico").style.width = "235px"
}

//Funcao que adiciona os card de perguntas do usuario
function addDoubt() {     
    const app = document.getElementById('cardUsuario')
    const card = document.createElement('div')
    card.setAttribute('class', 'card card-body')
    card.setAttribute('style', 'margin-top: 30px; background-color: #ebebeb;')
    app.appendChild(card)    

    const fundo = document.createElement('div')
    fundo.setAttribute('class', 'blurCard')    
    card.appendChild(fundo)    

    const assunto = document.createElement('h4')     
    assunto.setAttribute('class', 'tituloH4') 
    assunto.textContent = "Assunto da pergunta aparece aqui"
    fundo.appendChild(assunto)

    const nome = document.createElement('h6')     
    nome.setAttribute('class', 'tituloH6') 
    nome.textContent = "Carlos Henrique Santos"
    fundo.appendChild(nome)

    const texto = document.createElement('h6')     
    texto.setAttribute('class', 'tituloTexto') 
    texto.textContent = "Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo..."
    fundo.appendChild(texto)   

    const backgroundCard = document.createElement('div')
    backgroundCard.setAttribute('class', 'backgroundCard')        
    card.appendChild(backgroundCard)

    const positionRelative = document.createElement('div')
    positionRelative.setAttribute('class', 'position-relative')        
    backgroundCard.appendChild(positionRelative)

    const primeiroPlano = document.createElement('div')
    primeiroPlano.setAttribute('class', 'position-absolute top-50 start-50 translate-middle')        
    positionRelative.appendChild(primeiroPlano)

    const imageFeedback = document.createElement('div')     
    imageFeedback.setAttribute('class', 'imagemFeedback mx-auto')     
    primeiroPlano.appendChild(imageFeedback)

    const waitFeedback = document.createElement('h4')     
    waitFeedback.setAttribute('class', 'mensagemPrimeiroPlano') 
    waitFeedback.textContent = "Aguardando feedback dos autores"
    primeiroPlano.appendChild(waitFeedback)

    const editarTopico = document.createElement('h4')     
    editarTopico.setAttribute('class', 'mensagemEditarTopico alignCenter') 
    editarTopico.textContent = "Editar tópico"
    primeiroPlano.appendChild(editarTopico)
}