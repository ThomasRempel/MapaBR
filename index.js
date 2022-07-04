function fertine() {
    var PE = document.getElementById("PE");
    var PB = document.getElementById("PB");
    var RN = document.getElementById("RN");
    var CE = document.getElementById("CE");
    var PI = document.getElementById("PI");
    var boxFertine = document.getElementById("boxFertine");
    PE.classList.add("fill_svg");
    PB.classList.add("fill_svg");
    RN.classList.add("fill_svg");
    CE.classList.add("fill_svg");
    PI.classList.add("fill_svg");
    if(boxFertine.style.display == "block"){
        return
    }
    boxFertine.style.display = "block";
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('fertine')

    var NomeFertine = document.getElementById("NomeFertine");
    var NomeFertine1 = document.getElementById("NomeFertine1");
    var NomeFertine2 = document.getElementById("NomeFertine2");

    NomeFertine.classList.remove("classe_nome");
    NomeFertine1.classList.remove("classe_nome");
    NomeFertine2.classList.remove("classe_nome");


}

function fertineBox() {
    var PE = document.getElementById("PE");
    var PB = document.getElementById("PB");
    var RN = document.getElementById("RN");
    var CE = document.getElementById("CE");
    var PI = document.getElementById("PI");
    var boxFertine = document.getElementById("boxFertine");
    PE.classList.remove("fill_svg");
    PB.classList.remove("fill_svg");
    RN.classList.remove("fill_svg");
    CE.classList.remove("fill_svg");
    PI.classList.remove("fill_svg");
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('fertine')
    
    boxFertine.style.display = "none";

    var NomeFertine = document.getElementById("NomeFertine");
    var NomeFertine1 = document.getElementById("NomeFertine1");
    var NomeFertine2 = document.getElementById("NomeFertine2");

    NomeFertine.classList.add("classe_nome");
    NomeFertine1.classList.add("classe_nome");
    NomeFertine2.classList.add("classe_nome");
}

function maranhao() {
    var MA = document.getElementById("MA");
    var PI = document.getElementById("PI");
    var PA = document.getElementById("PA");
    var TO = document.getElementById("TO");
    var boxMaranhao = document.getElementById("boxMaranhao");
    MA.classList.add("fill_svg");
    PI.classList.add("fill_svg");
    PA.classList.add("fill_svg");
    TO.classList.add("fill_svg");
    if(boxMaranhao.style.display == "block"){
        return
    }
    boxMaranhao.style.display = "block";
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('maranhao')

    var NomeMaranhao = document.getElementById("NomeMaranhao");

    NomeMaranhao.classList.remove("classe_nome");

}

function maranhaoBox() {
    var MA = document.getElementById("MA");
    var PI = document.getElementById("PI");
    var PA = document.getElementById("PA");
    var TO = document.getElementById("TO");
    var boxMaranhao = document.getElementById("boxMaranhao");
    MA.classList.remove("fill_svg");
    PI.classList.remove("fill_svg");
    PA.classList.remove("fill_svg");
    TO.classList.remove("fill_svg");
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('maranhao')
    
    boxMaranhao.style.display = "none";

    var NomeMaranhao = document.getElementById("NomeMaranhao");

    NomeMaranhao.classList.add("classe_nome");
}

function fertial() {
    var AL = document.getElementById("AL");
    var CE = document.getElementById("CE");
    var RN = document.getElementById("RN");
    var boxFertial = document.getElementById("boxFertial");
    AL.classList.add("fill_svg");
    CE.classList.add("fill_svg");
    RN.classList.add("fill_svg");
    if(boxFertial.style.display == "block"){
        return
    }
    boxFertial.style.display = "block";
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('fertial')

    var NomeFertial = document.getElementById("NomeFertial");

    NomeFertial.classList.remove("classe_nome");
}

function fertialBox() {
    var AL = document.getElementById("AL");
    var CE = document.getElementById("CE");
    var RN = document.getElementById("RN");
    var boxFertial = document.getElementById("boxFertial");
    AL.classList.remove("fill_svg");
    CE.classList.remove("fill_svg");
    RN.classList.remove("fill_svg");
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('fertial')
    
    boxFertial.style.display = "none";

    var NomeFertial = document.getElementById("NomeFertial");

    NomeFertial.classList.add("classe_nome");
}

function matogrosso() {
    var PR = document.getElementById("PR");
    var MT = document.getElementById("MT");
    var boxMatogrosso = document.getElementById("boxMatogrosso");
    MT.classList.add("fill_svg");
    PR.classList.add("fill_svg");
    if(boxMatogrosso.style.display == "block"){
        return
    }
    boxMatogrosso.style.display = "block";
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('matogrosso')

    var NomeMatogrosso1 = document.getElementById("NomeMatogrosso1");
    var NomeMatogrosso2 = document.getElementById("NomeMatogrosso2");
    var NomeMatogrosso3 = document.getElementById("NomeMatogrosso3");

    NomeMatogrosso1.classList.remove("classe_nome");
    NomeMatogrosso2.classList.remove("classe_nome");
    NomeMatogrosso3.classList.remove("classe_nome");
}

function matogrossoBox() {
    var PR = document.getElementById("PR");
    var MT = document.getElementById("MT");
    var boxMatogrosso = document.getElementById("boxMatogrosso");
    MT.classList.remove("fill_svg");
    PR.classList.remove("fill_svg");
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('matogrosso')
    
    boxMatogrosso.style.display = "none";

    var NomeMatogrosso1 = document.getElementById("NomeMatogrosso1");
    var NomeMatogrosso2 = document.getElementById("NomeMatogrosso2");
    var NomeMatogrosso3 = document.getElementById("NomeMatogrosso3");

    NomeMatogrosso1.classList.add("classe_nome");
    NomeMatogrosso2.classList.add("classe_nome");
    NomeMatogrosso3.classList.add("classe_nome");
}

function fertigran() {
    var MG = document.getElementById("MG");
    var GO = document.getElementById("GO");
    var SP = document.getElementById("SP");
    var boxFertigran = document.getElementById("boxFertigran");
    MG.classList.add("fill_svg");
    GO.classList.add("fill_svg");
    SP.classList.add("fill_svg");
    if(boxFertigran.style.display == "block"){
        return
    }
    boxFertigran.style.display = "block";
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('fertigran')

    var  NomeFertigran3 = document.getElementById("NomeFertigran3");
    var  NomeFertigran6 = document.getElementById("NomeFertigran6");
    var  NomeFertigran5 = document.getElementById("NomeFertigran5");
    var  NomeFertigran2 = document.getElementById("NomeFertigran2");
    var  NomeFertigran4 = document.getElementById("NomeFertigran4");
    var  NomeFertigran3 = document.getElementById("NomeFertigran3");
    var  NomeFertigran3_2 = document.getElementById("NomeFertigran3_2");
    var  NomeFertigran1 = document.getElementById("NomeFertigran1");
    var  NomeFertigran2_2 = document.getElementById("NomeFertigran2_2");
    var  NomeFertigran1_2 = document.getElementById("NomeFertigran1_2");

    NomeFertigran3.classList.remove("classe_nome");
    NomeFertigran6.classList.remove("classe_nome");
    NomeFertigran5.classList.remove("classe_nome");
    NomeFertigran2.classList.remove("classe_nome");
    NomeFertigran4.classList.remove("classe_nome");
    NomeFertigran3.classList.remove("classe_nome");
    NomeFertigran3_2.classList.remove("classe_nome");
    NomeFertigran1.classList.remove("classe_nome");
    NomeFertigran2_2.classList.remove("classe_nome");
    NomeFertigran1_2.classList.remove("classe_nome");
   

}

function fertigranBox() {
    var MG = document.getElementById("MG");
    var GO = document.getElementById("GO");
    var SP = document.getElementById("SP");
    var boxFertigran = document.getElementById("boxFertigran");
    MG.classList.remove("fill_svg");
    GO.classList.remove("fill_svg");
    SP.classList.remove("fill_svg");
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('fertigran')
    
    boxFertigran.style.display = "none";

var  NomeFertigran3 = document.getElementById("NomeFertigran3");
var  NomeFertigran6 = document.getElementById("NomeFertigran6");
var  NomeFertigran5 = document.getElementById("NomeFertigran5");
var  NomeFertigran2 = document.getElementById("NomeFertigran2");
var  NomeFertigran4 = document.getElementById("NomeFertigran4");
var  NomeFertigran3 = document.getElementById("NomeFertigran3");
var  NomeFertigran3_2 = document.getElementById("NomeFertigran3_2");
var  NomeFertigran1 = document.getElementById("NomeFertigran1");
var  NomeFertigran2_2 = document.getElementById("NomeFertigran2_2");
var  NomeFertigran1_2 = document.getElementById("NomeFertigran1_2");

NomeFertigran3.classList.add("classe_nome");
NomeFertigran6.classList.add("classe_nome");
NomeFertigran5.classList.add("classe_nome");
NomeFertigran2.classList.add("classe_nome");
NomeFertigran4.classList.add("classe_nome");
NomeFertigran3.classList.add("classe_nome");
NomeFertigran3_2.classList.add("classe_nome");
NomeFertigran1.classList.add("classe_nome");
NomeFertigran2_2.classList.add("classe_nome");
NomeFertigran1_2.classList.add("classe_nome");
}

function fertinor() {
    var BA = document.getElementById("BA");
    var SE = document.getElementById("SE");
    var AL = document.getElementById("AL");
    var MG = document.getElementById("MG");
    var GO = document.getElementById("GO");
    var TO = document.getElementById("TO");
    var boxFertinor = document.getElementById("boxFertinor");
    BA.classList.add("fill_svg");
    SE.classList.add("fill_svg");
    AL.classList.add("fill_svg");
    MG.classList.add("fill_svg");
    GO.classList.add("fill_svg");
    TO.classList.add("fill_svg");
    if(boxFertinor.style.display == "block"){
        return
    }
    boxFertinor.style.display = "block";
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('fertinor')

    var  NomeFertinor = document.getElementById("NomeFertinor");

    NomeFertinor.classList.remove("classe_nome");
}

function fertinorBox() {
    var BA = document.getElementById("BA");
    var SE = document.getElementById("SE");
    var AL = document.getElementById("AL");
    var MG = document.getElementById("MG");
    var GO = document.getElementById("GO");
    var TO = document.getElementById("TO");
    var boxFertinor = document.getElementById("boxFertinor");
    BA.classList.remove("fill_svg");
    SE.classList.remove("fill_svg");
    AL.classList.remove("fill_svg");
    MG.classList.remove("fill_svg");
    GO.classList.remove("fill_svg");
    TO.classList.remove("fill_svg");
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('fertinor')
    
    boxFertinor.style.display = "none";

    var  NomeFertinor = document.getElementById("NomeFertinor");

    NomeFertinor.classList.add("classe_nome");
}

function piratini() {
    var RS = document.getElementById("RS");
    var SC = document.getElementById("SC");
    var boxPiratini = document.getElementById("boxPiratini");
    RS.classList.add("fill_svg");
    SC.classList.add("fill_svg");
    if(boxPiratini.style.display == "block"){
        return
    }
    boxPiratini.style.display = "block";
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('piratini')

    var  NomePiratini2 = document.getElementById("NomePiratini2");
    var  NomePiratini4 = document.getElementById("NomePiratini4");
    var  NomePiratini = document.getElementById("NomePiratini");
    var  NomePiratini1 = document.getElementById("NomePiratini1");
    var  NomePiratini2_2 = document.getElementById("NomePiratini2_2");
    var  NomePiratini1_2 = document.getElementById("NomePiratini1_2");

    NomePiratini2.classList.remove("classe_nome");
    NomePiratini4.classList.remove("classe_nome");
    NomePiratini.classList.remove("classe_nome");
    NomePiratini1.classList.remove("classe_nome");
    NomePiratini2_2.classList.remove("classe_nome");
    NomePiratini1_2.classList.remove("classe_nome");

    
}

function piratiniBox() {
    var RS = document.getElementById("RS");
    var SC = document.getElementById("SC");
    var boxPiratini = document.getElementById("boxPiratini");
    RS.classList.remove("fill_svg");
    SC.classList.remove("fill_svg");
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('piratini')

    boxPiratini.style.display = "none";

    var  NomePiratini2 = document.getElementById("NomePiratini2");
    var  NomePiratini4 = document.getElementById("NomePiratini4");
    var  NomePiratini = document.getElementById("NomePiratini");
    var  NomePiratini1 = document.getElementById("NomePiratini1");
    var  NomePiratini2_2 = document.getElementById("NomePiratini2_2");
    var  NomePiratini1_2 = document.getElementById("NomePiratini1_2");

    NomePiratini2.classList.add("classe_nome");
    NomePiratini4.classList.add("classe_nome");
    NomePiratini.classList.add("classe_nome");
    NomePiratini1.classList.add("classe_nome");
    NomePiratini2_2.classList.add("classe_nome");
    NomePiratini1_2.classList.add("classe_nome");
}

function sudeste() {
    var ES = document.getElementById("ES");
    var RJ = document.getElementById("RJ");
    var MG = document.getElementById("MG");
    var boxSudeste = document.getElementById("boxSudeste");
    ES.classList.add("fill_svg");
    RJ.classList.add("fill_svg");
    MG.classList.add("fill_svg");
    if(boxSudeste.style.display == "block"){
        return
    }
    boxSudeste.style.display = "block";
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('sudeste')

    var  NomeSudeste3 = document.getElementById("NomeSudeste3");
    var  NomeSudeste6 = document.getElementById("NomeSudeste6");
    var  NomeSudeste5 = document.getElementById("NomeSudeste5");
    var  NomeSudeste2 = document.getElementById("NomeSudeste2");
    var  NomeSudeste4 = document.getElementById("NomeSudeste4");
    var  NomeSudeste3_2 = document.getElementById("NomeSudeste3_2");
    var  NomeSudeste1 = document.getElementById("NomeSudeste1");
    var  NomeSudeste2_2 = document.getElementById("NomeSudeste2_2");
    var  NomeSudeste1_2 = document.getElementById("NomeSudeste1_2");

    NomeSudeste3.classList.remove("classe_nome");
    NomeSudeste6.classList.remove("classe_nome");
    NomeSudeste5.classList.remove("classe_nome");
    NomeSudeste2.classList.remove("classe_nome");
    NomeSudeste4.classList.remove("classe_nome");
    NomeSudeste3_2.classList.remove("classe_nome");
    NomeSudeste1.classList.remove("classe_nome");
    NomeSudeste2_2.classList.remove("classe_nome");
    NomeSudeste1_2.classList.remove("classe_nome");
}

function sudesteBox() {
    var ES = document.getElementById("ES");
    var RJ = document.getElementById("RJ");
    var MG = document.getElementById("MG");
    var boxSudeste = document.getElementById("boxSudeste");
    ES.classList.remove("fill_svg");
    RJ.classList.remove("fill_svg");
    MG.classList.remove("fill_svg");
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('sudeste')
    
    boxSudeste.style.display = "none";

    var  NomeSudeste3 = document.getElementById("NomeSudeste3");
    var  NomeSudeste6 = document.getElementById("NomeSudeste6");
    var  NomeSudeste5 = document.getElementById("NomeSudeste5");
    var  NomeSudeste2 = document.getElementById("NomeSudeste2");
    var  NomeSudeste4 = document.getElementById("NomeSudeste4");
    var  NomeSudeste3_2 = document.getElementById("NomeSudeste3_2");
    var  NomeSudeste1 = document.getElementById("NomeSudeste1");
    var  NomeSudeste2_2 = document.getElementById("NomeSudeste2_2");
    var  NomeSudeste1_2 = document.getElementById("NomeSudeste1_2");

    NomeSudeste3.classList.add("classe_nome");
    NomeSudeste6.classList.add("classe_nome");
    NomeSudeste5.classList.add("classe_nome");
    NomeSudeste2.classList.add("classe_nome");
    NomeSudeste4.classList.add("classe_nome");
    NomeSudeste3_2.classList.add("classe_nome");
    NomeSudeste1.classList.add("classe_nome");
    NomeSudeste2_2.classList.add("classe_nome");
    NomeSudeste1_2.classList.add("classe_nome");
}

function bandeirantes() {
    var SP = document.getElementById("SP");
    var MS = document.getElementById("MS");
    var boxBandeirantes = document.getElementById("boxBandeirantes");
    SP.classList.add("fill_svg");
    MS.classList.add("fill_svg");

    if(boxBandeirantes.style.display == "block"){
        return
    }
    boxBandeirantes.style.display = "block";
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('bandeirantes')

    var  NomeBandeirantes7 = document.getElementById("NomeBandeirantes7");
    var  NomeBandeirantes6 = document.getElementById("NomeBandeirantes6");
    var  NomeBandeirantes5 = document.getElementById("NomeBandeirantes5");
    var  NomeBandeirantes4 = document.getElementById("NomeBandeirantes4");
    var  NomeBandeirantes2 = document.getElementById("NomeBandeirantes2");
    var  NomeBandeirantes3 = document.getElementById("NomeBandeirantes3");
    var  NomeBandeirantes2_2 = document.getElementById("NomeBandeirantes2_2");
    var  NomeBandeirantes1 = document.getElementById("NomeBandeirantes1");
    var  NomeBnadeirantes4 = document.getElementById("NomeBnadeirantes4");
    var  NomeBnadeirantes3 = document.getElementById("NomeBnadeirantes3");

    NomeBandeirantes7.classList.remove("classe_nome");
    NomeBandeirantes6.classList.remove("classe_nome");
    NomeBandeirantes5.classList.remove("classe_nome");
    NomeBandeirantes4.classList.remove("classe_nome");
    NomeBandeirantes2.classList.remove("classe_nome");
    NomeBandeirantes3.classList.remove("classe_nome");
    NomeBandeirantes2_2.classList.remove("classe_nome");
    NomeBandeirantes1.classList.remove("classe_nome");
    NomeBnadeirantes4.classList.remove("classe_nome");
    NomeBnadeirantes3.classList.remove("classe_nome");
}

function bandeirantesBox() {
    var SP = document.getElementById("SP");
    var MS = document.getElementById("MS");
    var boxBandeirantes = document.getElementById("boxBandeirantes");
    SP.classList.remove("fill_svg");
    MS.classList.remove("fill_svg");
    
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('bandeirantes')
    
    boxBandeirantes.style.display = "none";
    var  NomeBandeirantes7 = document.getElementById("NomeBandeirantes7");
    var  NomeBandeirantes6 = document.getElementById("NomeBandeirantes6");
    var  NomeBandeirantes5 = document.getElementById("NomeBandeirantes5");
    var  NomeBandeirantes4 = document.getElementById("NomeBandeirantes4");
    var  NomeBandeirantes2 = document.getElementById("NomeBandeirantes2");
    var  NomeBandeirantes3 = document.getElementById("NomeBandeirantes3");
    var  NomeBandeirantes2_2 = document.getElementById("NomeBandeirantes2_2");
    var  NomeBandeirantes1 = document.getElementById("NomeBandeirantes1");
    var  NomeBnadeirantes4 = document.getElementById("NomeBnadeirantes4");
    var  NomeBnadeirantes3 = document.getElementById("NomeBnadeirantes3");

    NomeBandeirantes7.classList.add("classe_nome");
    NomeBandeirantes6.classList.add("classe_nome");
    NomeBandeirantes5.classList.add("classe_nome");
    NomeBandeirantes4.classList.add("classe_nome");
    NomeBandeirantes2.classList.add("classe_nome");
    NomeBandeirantes3.classList.add("classe_nome");
    NomeBandeirantes2_2.classList.add("classe_nome");
    NomeBandeirantes1.classList.add("classe_nome");
    NomeBnadeirantes4.classList.add("classe_nome");
    NomeBnadeirantes3.classList.add("classe_nome");
}

function nordeste() {
    var BA = document.getElementById("BA");
    var MG = document.getElementById("MG");
    var GO = document.getElementById("GO");
    var TO = document.getElementById("TO");
    var boxNordeste = document.getElementById("boxNordeste");
    BA.classList.add("fill_svg");
    MG.classList.add("fill_svg");
    GO.classList.add("fill_svg");
    TO.classList.add("fill_svg");
    if(boxNordeste.style.display == "block"){
        return
    }
    var pinnord = document.querySelector('.flag');
    pinnord.classList.toggle('nordeste')
    boxNordeste.style.display = "block";

    var  NomeNordeste1 = document.getElementById("NomeNordeste1");
    var  NomeNordeste2 = document.getElementById("NomeNordeste2");
    var  NomNordeste = document.getElementById("NomNordeste");
 

    NomeNordeste1.classList.remove("classe_nome");
    NomeNordeste2.classList.remove("classe_nome");
    NomNordeste.classList.remove("classe_nome");
}

function nordesteBox() {
    var BA = document.getElementById("BA");
    var MG = document.getElementById("MG");
    var GO = document.getElementById("GO");
    var TO = document.getElementById("TO");
    var boxNordeste = document.getElementById("boxNordeste");
    BA.classList.remove("fill_svg");
    MG.classList.remove("fill_svg");
    GO.classList.remove("fill_svg");
    TO.classList.remove("fill_svg");
    var pinnord = document.querySelector('.flag');
    pinnord.classList.toggle('nordeste')
    boxNordeste.style.display = "none";

    var  NomeNordeste1 = document.getElementById("NomeNordeste1");
    var  NomeNordeste2 = document.getElementById("NomeNordeste2");
    var  NomNordeste = document.getElementById("NomNordeste");
 

    NomeNordeste1.classList.add("classe_nome");
    NomeNordeste2.classList.add("classe_nome");
    NomNordeste.classList.add("classe_nome");


}

function parana() {
    var SP = document.getElementById("SP");
    var PR = document.getElementById("PR");
    var SC = document.getElementById("SC");
    var RO = document.getElementById("RO");
    var MS = document.getElementById("MS");
    var PARAGUAI = document.getElementById("PARAGUAI");
    var boxParana = document.getElementById("boxParana");
    SP.classList.add("fill_svg");
    PR.classList.add("fill_svg");
    SC.classList.add("fill_svg");
    RO.classList.add("fill_svg");
    MS.classList.add("fill_svg");
    PARAGUAI.classList.add("fill_svg");
    if(boxParana.style.display == "block"){
        return
    }
    boxParana.style.display = "block";
    var pinFlag = document.querySelector('.flag');
    pinFlag.classList.toggle('parana')

    var  NomeParana7 = document.getElementById("NomeParana7");
    var  NomeParana12 = document.getElementById("NomeParana12");
    var  NomeParana11 = document.getElementById("NomeParana11");
    var  NomeParana6 = document.getElementById("NomeParana6");
    var  NomeParana10 = document.getElementById("NomeParana10");
    var  NomeParana9 = document.getElementById("NomeParana9");
    var  NomeParana5 = document.getElementById("NomeParana5");
    var  NomeParana8 = document.getElementById("NomeParana8");
    var  NomeParana7_2 = document.getElementById("NomeParana7_2");
    var  NomeParana4 = document.getElementById("NomeParana4");
    var  NomeParana6_2 = document.getElementById("NomeParana6_2");
    var  NomeParana5_2 = document.getElementById("NomeParana5_2");
    var  NomeParana3 = document.getElementById("NomeParana3");
    var  NomeParana2 = document.getElementById("NomeParana2");
    var  NomeParana1 = document.getElementById("NomeParana1");
    var  NomeParana2_2 = document.getElementById("NomeParana2_2");
    var  NomeParana1_2 = document.getElementById("NomeParana1_2");

    NomeParana7.classList.remove("classe_nome");
    NomeParana12.classList.remove("classe_nome");
    NomeParana11.classList.remove("classe_nome");
    NomeParana6.classList.remove("classe_nome");
    NomeParana10.classList.remove("classe_nome");
    NomeParana9.classList.remove("classe_nome");
    NomeParana5.classList.remove("classe_nome");
    NomeParana8.classList.remove("classe_nome");
    NomeParana7_2.classList.remove("classe_nome");
    NomeParana4.classList.remove("classe_nome");
    NomeParana6_2.classList.remove("classe_nome");
    NomeParana5_2.classList.remove("classe_nome");
    NomeParana3.classList.remove("classe_nome");
    NomeParana2.classList.remove("classe_nome");
    NomeParana1.classList.remove("classe_nome");
    NomeParana2_2.classList.remove("classe_nome");
    NomeParana1_2.classList.remove("classe_nome");
}


function paranaBox() {
    var SP = document.getElementById("SP");
    var PR = document.getElementById("PR");
    var SC = document.getElementById("SC");
    var RO = document.getElementById("RO");
    var MS = document.getElementById("MS");
    var PARAGUAI = document.getElementById("PARAGUAI");
    var boxParana = document.getElementById("boxParana");
    SP.classList.remove("fill_svg");
    PR.classList.remove("fill_svg");
    SC.classList.remove("fill_svg");
    RO.classList.remove("fill_svg");
    MS.classList.remove("fill_svg");
    PARAGUAI.classList.remove("fill_svg");
    
    
    var pinFlag = document.querySelector('.flag');
    boxParana.style.display = "none";
    pinFlag.classList.toggle('parana')


    var  NomeParana7 = document.getElementById("NomeParana7");
    var  NomeParana12 = document.getElementById("NomeParana12");
    var  NomeParana11 = document.getElementById("NomeParana11");
    var  NomeParana6 = document.getElementById("NomeParana6");
    var  NomeParana10 = document.getElementById("NomeParana10");
    var  NomeParana9 = document.getElementById("NomeParana9");
    var  NomeParana5 = document.getElementById("NomeParana5");
    var  NomeParana8 = document.getElementById("NomeParana8");
    var  NomeParana7_2 = document.getElementById("NomeParana7_2");
    var  NomeParana4 = document.getElementById("NomeParana4");
    var  NomeParana6_2 = document.getElementById("NomeParana6_2");
    var  NomeParana5_2 = document.getElementById("NomeParana5_2");
    var  NomeParana3 = document.getElementById("NomeParana3");
    var  NomeParana2 = document.getElementById("NomeParana2");
    var  NomeParana1 = document.getElementById("NomeParana1");
    var  NomeParana2_2 = document.getElementById("NomeParana2_2");
    var  NomeParana1_2 = document.getElementById("NomeParana1_2");

    NomeParana7.classList.add("classe_nome");
    NomeParana12.classList.add("classe_nome");
    NomeParana11.classList.add("classe_nome");
    NomeParana6.classList.add("classe_nome");
    NomeParana10.classList.add("classe_nome");
    NomeParana9.classList.add("classe_nome");
    NomeParana5.classList.add("classe_nome");
    NomeParana8.classList.add("classe_nome");
    NomeParana7_2.classList.add("classe_nome");
    NomeParana4.classList.add("classe_nome");
    NomeParana6_2.classList.add("classe_nome");
    NomeParana5_2.classList.add("classe_nome");
    NomeParana3.classList.add("classe_nome");
    NomeParana2.classList.add("classe_nome");
    NomeParana1.classList.add("classe_nome");
    NomeParana2_2.classList.add("classe_nome");
    NomeParana1_2.classList.add("classe_nome");
}
