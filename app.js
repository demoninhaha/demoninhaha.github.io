'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    var match = false;
    var tittle = document.querySelector("#tittle");
    var name = document.querySelector('#input-name');
    var progress = document.querySelector('.progress-bar');
    
    var lowerName = name.value.toLowerCase();
    console.log(lowerName)
    if (lowerName == "gustavo voltolini" || lowerName == "gu" || lowerName == "guga" || lowerName == "volt" 
    || lowerName == "voltolini" || lowerName == "gustavo"){
        tittle.textContent = "Analisador de Beleza";
        progress.textContent = "100% Lindo";
        progress.style.width = "100%";
        progress.className = "progress-bar progress-bar-striped bg-success";
        match = true;
    }
    if (lowerName == "rafa" || lowerName == "rafael" || lowerName == "rafinha" || lowerName == "rafael mendes" 
    || lowerName == "rafael mendes de carvalho" || lowerName == "rafinha ghost" || lowerName == "rafinha bastos"){
        tittle.textContent = "Analisador de Boiolage";
        progress.textContent = "100% Gay";
        progress.style.width = "100%";
        progress.className = "progress-bar progress-bar-striped bg-danger";
        match = true;
    }
    if(lowerName == "cacane" || lowerName == "caçane" || lowerName == "caçane maloz" || lowerName == "cacane maloz") {
        tittle.textContent = "Analisador de Beleza";
        progress.textContent = "100% Linda e gostosa";
        progress.style.width = "100%";
        progress.className = "progress-bar progress-bar-striped bg-success";
        match = true;
    } 
    if (!match) {
        var random_number = Math.floor(Math.random() * 21) + 10;
        tittle.textContent = "Analisador de Beleza";
        progress.className = "progress-bar progress-bar-striped bg-success";
        progress.textContent = random_number.toString() + "% de beleza";
        progress.style.width = random_number.toString() + "%";
    }
});