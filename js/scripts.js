var idElementSelected = 'Trabalhos' //Item selecionado na pagina
var idPgSelected = 'PageTrabalhos' //Id atual da pagina visivel
var expandCardResumo = false //status do card resumo, se o mesmo esta expandido ou nao

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