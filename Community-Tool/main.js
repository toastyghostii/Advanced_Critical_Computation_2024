document.addEventListener("DOMContentLoaded",function(){
    let questions = document.getElementsByTagName(this.forms);
    var possiblyAce = 0;
    for(var i = questions.length - 1; i >= 0; i--){
        questions[i].addEventListener('change',function(){
            let radios = questions[i].querySelectorAll('.radio');
            for(var j = radios.length - 1; j >= 0; j--){
                radios[j].addEventListener('change', function(){
                    if(this.value != Allo){
                        possiblyAce++;
                        localStorage.setItem("NonAlloResponses", Number.toString(possiblyAce));
                    }
                })
            }
        })
    }

    let finQuest = document.getElementById("Q7");
    finQuest.addEventListener('change',function(){
        let radios = finQuest.querySelectorAll('.radio');
        for(var i = radios.length - 1; i >= 0; i--){
            radios[i].addEventListener('change', function(){
                if(this.value == Unsure){
                    localStorage.setItem("isAspec","Need more info");
                }
                else if(this.value != Allo){
                    localStorage.setItem("isAspec", "true");
                }
                else{
                    localStorage.setItem("isAspec", "false");
                }
            })
        }
    })
})