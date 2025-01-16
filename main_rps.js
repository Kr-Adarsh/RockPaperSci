let rnum=0;
let compMove='';
let score = JSON.parse(localStorage.getItem('score'))||{
    wins: 0,
    losses: 0,
    ties: 0
};

update_score()

function update_score(){
    document.querySelector('.scores')
    .innerHTML=`Wins=${score.wins}, Losses= ${score.losses}, Ties= ${score.ties}`

}
// Function for the input and comp's comparison
function move(playerMove){
    comp_move();
    let result='';
    // compMove=comp_move();
    if(playerMove==='Rock'){
        if(compMove==='Paper'){
        result='You lost';
        } else if(compMove==='Scissor'){
            result='You Won';
        } else if(compMove==='Rock'){
            result='Tie';
        }
        // console.log(compMove);
    } else if(playerMove==='Paper'){
        if(compMove==='Paper'){
        result='Tie';
        } else if(compMove==='Scissor'){
            result='You lost';
        } else if(compMove==='Rock'){
            result='You Won';
        }
    // console.log(compMove);
        } else if(playerMove==='Scissor'){
            if(compMove==='Paper'){
                result='You Won';
            } else if(compMove==='Scissor'){
                result='Tie';
            } else if(compMove==='Rock'){
                result='You lost';
            }
    // console.log(compMove);
        }
    // alert(`Your move: ${playerMove} || Computer's move: ${compMove} \n Result: ${result}`);

    if(result==='You Won'){
        score.wins++;
    } else if(result==='You lost'){
        score.losses++;
    } else if(result==='Tie'){
        score.ties++;
    }

    // localStorage.setItem('message','hello');
    localStorage.setItem('score',JSON.stringify(score));

    update_score()
    // //To dispaly the result: 
    // alert(`Your move: ${playerMove} || Computer's move: ${compMove} \n Result: ${result}
    //     \n Wins=${score.wins}, Losses= ${score.losses}, Ties= ${score.ties}`);
        console.log(playerMove,compMove)
        document.querySelector('.results').innerHTML=`${result}!`;
        document.querySelector('.moves').innerHTML= `You <img class="newMove" src="rps_img/${playerMove}-emoji.png"> || <img class="newMove" src="rps_img/${compMove}-emoji.png"> Comp's`
}
// Fuction to generate the comp's values-
function comp_move(){
    rnum=Math.random();
    if(rnum>=0&&rnum<1/3){
        // console.log('rock')
        compMove='Rock';
    } else if(rnum>=1/3 && rnum<2/3){
        // console.log('Paper')
        compMove='Paper';
    } else if(rnum>=2/3 && rnum<1){
        // console.log('Scissor')
        compMove='Scissor';
    };
}
