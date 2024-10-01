function init() {
    document.inscription_form.nom.focus();
}

function checkForm() {
    let msg = "";

    let sexeF = document.inscription_form.sexe[0].checked;
    let sexeH = document.inscription_form.sexe[1].checked;
    if (!sexeF && !sexeH) {
        msg += "Merci de renseigner le sexe\n";
    }

    let nom = document.inscription_form.nom.value;
    if (!nom) {
        msg += "Merci de renseigner votre nom\n";
    }

    let diplome = document.inscription_form.diplom_sel;
    let val_diplome = diplome.options[diplome.selectedIndex].value;

    if (!val_diplome) {
        msg += "Merci d'indiquer un diplôme\n";
    }



    if (msg) {
        alert(msg);
        return false;
    } else {
        return true;
    }
}