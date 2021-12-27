var kek = 0;
var piros = 0;
var sarga = 0;
var zold = 0;

//#region kek
function pluszkek(){
    if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezopirossargazold.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezopirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezopiroszold.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezosargazold.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezopiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezosarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezozold.png");
    } else {
        $("#" + kek).attr("src","mezo.png");
    }

    kek++;

    if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpirossargazold.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezokekpirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpiroszold.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokeksargazold.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezokekpiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezokeksarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezokekzold.png");
    } else {
        $("#" + kek).attr("src","mezokek.png");
    }
}

function minuszkek(){
    if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezopirossargazold.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezopirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezopiroszold.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezosargazold.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezopiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezosarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezozold.png");
    } else {
        $("#" + kek).attr("src","mezo.png");
    }

    kek--;

    if (piros == kek && sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpirossargazold.png");
    } else if (piros == kek && sarga == kek){
        $("#" + kek).attr("src","mezokekpirossarga.png");
    } else if (piros == kek && zold == kek){
        $("#" + kek).attr("src","mezokekpiroszold.png");
    } else if (sarga == kek && zold == kek){
        $("#" + kek).attr("src","mezokeksargazold.png");
    } else if (piros == kek){
        $("#" + kek).attr("src","mezokekpiros.png");
    } else if (sarga == kek){
        $("#" + kek).attr("src","mezokeksarga.png");
    } else if (zold == kek){
        $("#" + kek).attr("src","mezokekzold.png");
    } else {
        $("#" + kek).attr("src","mezokek.png");
    }
}
//#endregion

//#region piros
function pluszpiros(){
    if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokeksargazold.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokeksarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekzold.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezosargazold.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokek.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezosarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezozold.png");
    } else {
        $("#" + piros).attr("src","mezo.png");
    }

    piros++;

    if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpirossargazold.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokekpirossarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpiroszold.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezopirossargazold.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokekpiros.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezopirossarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezopiroszold.png");
    } else {
        $("#" + piros).attr("src","mezopiros.png");
    }
}

function minuszpiros(){
    if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokeksargazold.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokeksarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekzold.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezosargazold.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokek.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezosarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezozold.png");
    } else {
        $("#" + piros).attr("src","mezo.png");
    }

    piros--;

    if (kek == piros && sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpirossargazold.png");
    } else if (kek == piros && sarga == piros){
        $("#" + piros).attr("src","mezokekpirossarga.png");
    } else if (kek == piros && zold == piros){
        $("#" + piros).attr("src","mezokekpiroszold.png");
    } else if (sarga == piros && zold == piros){
        $("#" + piros).attr("src","mezopirossargazold.png");
    } else if (kek == piros){
        $("#" + piros).attr("src","mezokekpiros.png");
    } else if (sarga == piros){
        $("#" + piros).attr("src","mezopirossarga.png");
    } else if (zold == piros){
        $("#" + piros).attr("src","mezopiroszold.png");
    } else {
        $("#" + piros).attr("src","mezopiros.png");
    }
}
//#endregion

//#region sarga
function pluszsarga(){
    if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpiroszold.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpiros.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekzold.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopiroszold.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokek.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopiros.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezozold.png");
    } else {
        $("#" + sarga).attr("src","mezo.png");
    }

    sarga++;

    if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpirossargazold.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpirossarga.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokeksargazold.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopirossargazold.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokeksarga.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopirossarga.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezosargazold.png");
    } else {
        $("#" + sarga).attr("src","mezosarga.png");
    }
}

function minuszsarga(){
    if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpiroszold.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpiros.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekzold.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopiroszold.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokek.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopiros.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezozold.png");
    } else {
        $("#" + sarga).attr("src","mezo.png");
    }

    sarga--;

    if (kek == sarga && piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokekpirossargazold.png");
    } else if (kek == sarga && piros == sarga){
        $("#" + sarga).attr("src","mezokekpirossarga.png");
    } else if (kek == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezokeksargazold.png");
    } else if (piros == sarga && zold == sarga){
        $("#" + sarga).attr("src","mezopirossargazold.png");
    } else if (kek == sarga){
        $("#" + sarga).attr("src","mezokeksarga.png");
    } else if (piros == sarga){
        $("#" + sarga).attr("src","mezopirossarga.png");
    } else if (zold == sarga){
        $("#" + sarga).attr("src","mezosargazold.png");
    } else {
        $("#" + sarga).attr("src","mezosarga.png");
    }
}
//#endregion

