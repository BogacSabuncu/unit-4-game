$(document).ready(function () {

    let score = 0;
    let winCount = 0;
    let loseCount = 0;
    let comPic = 0;

    function randInterval(min, max) // min and max included
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function changeValue(){
        $("#crystals").find("div").each(function(){
            $(this).attr("value", randInterval(1,12));
        });

        comPic = randInterval(19, 120);
    }

    changeValue();


    $("#scoreDiv").append(`<h2> Score : ${score}  </h2>`);
    $("#win").append(`Wins : ${loseCount} `);
    $("#lose").append(`Loses : ${winCount} `);       
    $("#compDiv").append(`<h2> Computer Pick : ${comPic} </h2>`);

    $("#crystals").on("click", ".crystal", function(){
        let gem_value = $(this).attr("value");
        score += parseInt(gem_value);

        if(score === comPic){
            score = 0;
            winCount++;
            $("#win").text(`Wins : ${winCount} `);
            changeValue();
        }
        else if(score > comPic){
            score = 0;
            loseCount++;
            $("#lose").text(`Loses : ${loseCount} `); 
            changeValue();
        }

        $("#scoreDiv").text(`Score : ${score}`);
    });


});