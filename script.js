// console.log("Welcome to spotify");

let songs=[
   {songName:"Ajab si",filePath:"songs/1.mp3",coverPath:"covers/Ajab si.jpeg"},
   {songName:"Tab bhi tu",filePath:"songs/2.mp3",coverPath:"covers/tab bhi tu.png"},
   {songName:"Zingaat Dhadak",filePath:"songs/3.mp3",coverPath:"covers/zingaat hindi.png"},
   {songName:"Ik Kudi",filePath:"songs/4.mp3",coverPath:"covers/ik kudi.png"},
   {songName:"Kaise Mizaz Aap Ke Hain",filePath:"songs/5.mp3",coverPath:"covers/kese mizaz.png"},
   {songName:"Khairiyat (Happy)",filePath:"songs/6.mp3",coverPath:"covers/chichore.png"},
   {songName:"Woh Din (Arijit Singh)",filePath:"songs/7.mp3",coverPath:"covers/chichore.png"},
   {songName:"Zingaat-Sairat",filePath:"songs/8.mp3",coverPath:"covers/zingaat.png"},
   {songName:"Maana Dil (Good Newwz)",filePath:"songs/9.mp3",coverPath:"covers/maana dil.png"},
   {songName:"Kalank ",filePath:"songs/10.mp3",coverPath:"covers/kalank.png"},
   {songName:"Jaane De",filePath:"songs/11.mp3",coverPath:"covers/jaane de.png"},
]
let masterPlay=document.getElementById('masterPlay');
let myProgressbar=document.getElementById('myProgressbar');
let audioElement=new Audio('songs/1.mp3'); 
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songitem'));
let masterSongName=document.getElementById('songName');

songItems.forEach((element,i)=> {
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{
  //  console.log('timeupdate');
//  update seekbar
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  // console.log(progress);
   myProgressbar.value=progress;
})
myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressbar.value * audioElement.duration/100;
})

let makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    }
    )
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{
        console.log(e.target);
        songIndex=parseInt(e.target.id);
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
     })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})