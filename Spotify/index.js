console.log("welcome")


//initializing the variables



let songIndex=0;
let audioElement=new Audio('./song/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');



//because this is an collection of html elements we can't apply for each


let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"hiofhweoni",       filePath:"./song/1.mp3",    coverPath:"./img/1.jpeg"},
    {songName:"Aj ki hiofhweoni",         filePath:"./song/2.mp3",    coverPath:"./img/2.jpg"},
    {songName:"Haste hiofhweoni",        filePath:"./song/3.mp3",    coverPath:"./img/3.jpeg"},
    {songName:"O Shanthi hiofhweoni",  filePath:"./song/4.mp3",    coverPath:"./img/4.jpg"},
    {songName:"hiofhweoni",          filePath:"./song/5.mp3",    coverPath:"./img/5.jpg"},
    {songName:"hiofhweoni",          filePath:"./song/5.mp3",    coverPath:"./img/5.jpg"},
    {songName:"hiofhweoni",          filePath:"./song/5.mp3",    coverPath:"./img/5.jpg"},
    {songName:"hiofhweoni",          filePath:"./song/5.mp3",    coverPath:"./img/5.jpg"},
    {songName:"hiofhweoni",          filePath:"./song/5.mp3",    coverPath:"./img/5.jpg"},


]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
//handling play/pause events
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
   })


   
//listening to events

audioElement.addEventListener('timeupdate',()=>{

    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;//getting the value in duration to get curremnt time
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
 
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();  
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`./song/${songIndex}.mp3`;
        // masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=1;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`./song/${songIndex}.mp3`;
    // masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`./song/${songIndex}.mp3`;
    // masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})