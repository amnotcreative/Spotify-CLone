console.log("Welcome to My Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Bade_Achhe_Lagte_Hain_Shreya_Ghos_(getmp3.pro).mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
progressBar.value = 0;
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs =[
    {songName: "Bade achhe lagte hya", filepath: "songs/Bade_Achhe_Lagte_Hain_Shreya_Ghos_(getmp3.pro).mp3", coverPath: "cover/1.png"},
    {songName: "Buddhu Sa Maan", filepath: "songs/Buddhu Sa Mann Lyric Video – Kapoor & Sons _ Sidharth _ Alia _ Fawad _ Rishi Kapoor _ Armaan _ Amaal.mp3", coverPath: "cover/2.jpg"},
    {songName: "Hya Apna Dil toh awara", filepath: "songs/Hai Apna Dil To Awara _ Sanam ft. Soogum Sookha.mp3", coverPath: "cover/3.jpg"},
    {songName: "Kolaveri Di", filepath: "songs/3 - Why This Kolaveri Di Official Video _ Dhanush, Anirudh.mp3", coverPath: "cover/4.jpg"},
    {songName: "Param Sundari", filepath: "songs/Param Sundari -Official Video _ Mimi _ Kriti Sanon, Pankaj Tripathi _ @A. R. Rahman_ Shreya _Amitabh.mp3", coverPath: "cover/5.jpg"},
    {songName: "In Ankhoon mein Tum", filepath: "songs/In Aankhon Mein Tum - Jodha Akbar (Extended Full Version) Lagu India Terpopuler.mp3", coverPath: "cover/6.jpg"},
    {songName: "Esho Hey", filepath: "songs/Esho Hey (এসো হে) _ Ek Je Chhilo Raja _ Jishhu _ Shreya _ Ishan _ Indraadip _ Srijato _ Srijit _ SVF.mp3", coverPath: "cover/7.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByClassName("songPic")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    //element.getElementsByClassName("timestamp")[0].innerText= audioElement.duration;

})

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e) =>{
        makeAllPlay();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = songs[index].filepath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})