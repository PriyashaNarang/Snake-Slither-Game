// Game constants and variables
var inputdir={x:0,y:0};
const food=new Audio("food.mp3")
const gameover=new Audio("gameover.mp3")
var speed=5;
var snakearr=[{x:13,y:15}];
var fooddir={x:6,y:7};
var lastPaintTime=0;
var score=0;
var high=localStorage.getItem("high");
if(high===null)
{
    localStorage.setItem('high',JSON.stringify(0));
}
else
{
    val=JSON.parse(high);
    highscore.innerHTML='HighScore:'+high;
}
// Game Functions
function collide(snake){
    //Bumped into self
    for (let index = 1; index < snakearr.length; index++) {
        if(snake[index].x==snake[0].x && snake[index].y==snake[0].y)
        {
            return true;
        }
    }
    // Bumped into wall
    if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0)
    {
        return true;
    } 
}
function gameengine(){
    if(collide(snakearr))
    {
        inputdir.x=0;
        inputdir.y=0;
        alert('Game over :(Press Ctrl+R to refresh the game)')
        snakearr=[{x:13,y:15}];
        gameover.play();
        score=0;
        scoreb.innerHTML='Score:'+score;
    }
    // Part 1
    // Adding food
    // If food is eaten, regenerate food
    if(snakearr[0].y==fooddir.y && snakearr[0].x==fooddir.x)
    {
        // Food is eaten;
        food.play();
        score+=1;
        if(score>high)
        {
            high=score;
            localStorage.setItem('high',JSON.stringify(high));
            highscore.innerHTML='HighScore:'+high;
            scoreb.innerHTML='Score:'+score;
        }
        else
        {
            scoreb.innerHTML='Score:'+score;
        }
        snakearr.unshift({x:snakearr[0].x+inputdir.x,y:snakearr[0].y+inputdir.y});
        var a=2;
        var b=16;
        fooddir={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};
    }
    // Move the snake
    for (let index = snakearr.length-2; index >=0 ; index--) 
    {
        snakearr[index+1]={...snakearr[index]};  
    }
    snakearr[0].x+=inputdir.x;
    snakearr[0].y+=inputdir.y;
    // Part 2
    // Display food and snake
    // Display snake
    playarea.innerHTML=" ";
    snakearr.forEach((element,index) => {
        snakeelement=document.createElement('div');
        snakeelement.style.gridRowStart=element.y;
        snakeelement.style.gridColumnStart=element.x;
        if(index==0)
            {
                snakeelement.classList.add('head');
            }
            else
            {
                snakeelement.classList.add('snake');
            }
            playarea.appendChild(snakeelement);
    });
    // Display food
    foodelement=document.createElement('div');
    foodelement.style.gridRowStart=fooddir.y;
    foodelement.style.gridColumnStart=fooddir.x;
    foodelement.classList.add('food');
    playarea.appendChild(foodelement);
}
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime-lastPaintTime)/1000<(1/speed))
    {
        return;
    }
    lastPaintTime=ctime;
    gameengine();
}
// Logic behind running a game
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    switch(e.key)
    {
        case 'ArrowUp':
            inputdir.x=0;
            inputdir.y=-1;
            break;
        case 'ArrowDown':
            inputdir.x=0;
            inputdir.y=1;
            break;
        case 'ArrowLeft':
            inputdir.x=-1;
            inputdir.y=0;
            break;
        case 'ArrowRight':
            inputdir.x=1;
            inputdir.y=0;
            break;
        default:
            break;
    }
})