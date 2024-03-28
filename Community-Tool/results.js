document.addEventListener("DOMContentLoaded",function(){
    let possiblyAceAnswers = localStorage.getItem("NonAlloResponses");

    let isAspec = localStorage.getItem("isAspec");

    let aspecText;
    let possiblyAceText;
    if(isAspec == "true"){
        aspecText = "You answered something different than a definite \"yes\" to the last question. You might be somewhere on the asexual spectrum. No one can put a label on your sexuality but yourself, but you might benefit from learning about different sexualities on the asexual spectrum.";
    }
    if(isAspec == "Need more info"){
        aspecText = "You answered that you're unsure if you experience sexual attraction. Sexual attraction can be hard to determine for someone that's questioning or is on the asexual spectrum. It helps to think about if you've ever felt attracted sexually to a specific person. Libido and sexual attraction are not the same, and someone can have a high libido and still not be sexually attracted to people. If you're a person that gets romantic crushes, you might want to think about if you've ever felt a physical or emotional desire to have sex with someone you're romantically attracted to. Since feelings of attraction are so personal, it's difficult to find definite answers for what they feel like. It's ultimately up to you to do further research and introspection to know if what you feel is sexual attraction.";
        if(possiblyAceAnswers != "0"){
            possiblyAceText = "Additionally, you provided some answers that align with common experiences of those on the asexual spectrum. It might be helpful to read more about other people's experiences with asexuality and see if you relate to them.";
        }
    }
    if(isAspec == "false"){
        aspecText = "You answered pretty confidently that you experience sexual attraction. If you feel that you experience it regularly, you may not be asexual.";
        if(possiblyAceAnswers != "0"){
            possiblyAceText = "You did provide some answers that allign with common experiences of those on the asexual spectrum. If you are still questioning, it might be helpful to read more about other people's experiences with asexuality and see if you relate to them.";
        }
    }

    document.querySelector("#result").innerHTML = aspecText + possiblyAceText;
})