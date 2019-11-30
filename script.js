var audio;
var songs;
var songadded;
var play;
var result;
var toggleplaypause;
var songfinished;
var songplayed;
var pause;
var volume1;
var col_1;
var featuresongs;
var centerelement;
var movienamedesign;
window.addEventListener("load",eventbind);

function eventbind() 
{
    volume1=document.querySelector("#range");
    audio=document.getElementById("audio");
    songs=document.getElementById("songs1");
    col_1=document.getElementById("col_1");
    songadded=document.getElementById("songadded");
    toggleplaypause=document.getElementById("toggleplaypause");
    songadded.className="designadded";
    play=document.getElementById("play");
    document.getElementById("forwardplay").addEventListener("click",forwardplay);
    for(var i=0;i<songsArray.length; i++)
    {
        var song=document.createElement("li");
        var songmovie=document.createElement("span");
        songmovie.innerText=songsArray[i].SongMovie;
        songmovie.className="songmovienameweekly";
        var songimage=document.createElement("img");
        songimage.setAttribute("src",songsArray[i].SongImage);
        songimage.className="songimage";
        var playbtnimg=document.createElement("img");
        playbtnimg.setAttribute("src","Assets/Images/PlayButton.png");
        playbtnimg.className="setdesignplaybtnimg";
        song.innerText=songsArray[i].SongName;
        songs.appendChild(song);
        song.appendChild(playbtnimg);
        song.appendChild(songmovie);
        song.appendChild(songimage);
        song.addEventListener("click",addto);
    }
   // play.addEventListener("click",addtoaudio);
    play.addEventListener("click",playSong);
    function playSong(){
        audio.play();

    }
    function forwardplay(){
        var songId = audio.title;
        var n_song = parseInt(songId)+1;
        var songName;
        console.log(n_song);
        for(var i = 0; i < songsArray.length; i++){
            if(songsArray[i].songId == n_song) {
                songName = songsArray[i].songName;
                console.log(n_song, songName);
            }
        }
        playSong(songName);
    }
    
    songfinished=document.getElementById("songfinished");
    // songfinished.addEventListener("click",changetimeback);
    songplayed=document.getElementById("songplayed");
    songplayed.addEventListener("click",changetime);
    pause=document.getElementById("pause").addEventListener("click",pause);
    console.log(pause);
    volume1.addEventListener("change",volumechange);
    centerelement=document.getElementById("centerelement");
        columnmiddle(col_1_songs);
        columnmiddle(col_2_songs);
        columnmiddle(col_3_songs);
        columnmiddle(col_4_songs);
        columnmiddle(col_5_songs);
        columnmiddle(col_6_songs);
        columnmiddle(col_7_songs);
        columnmiddle(col_8_songs);
        columnmiddle(col_9_songs);
        columnmiddle(col_10_songs);
        columnmiddle(col_11_songs);
        columnmiddle(col_12_songs);
        columnmiddle(col_13_songs);
    featuresongs=document.getElementById("featuresongs");
        songsright(featuresong_col_1);
        songsright(featuresong_col_2);
        songsright(featuresong_col_3);
        songsright(featuresong_col_4);
        songsright(featuresong_col_5);
        songsright(featuresong_col_6);
        songsright(featuresong_col_7);
        songsright(featuresong_col_8);
        songsright(featuresong_col_9);
        songsright(featuresong_col_10);
        songsright(featuresong_col_11);
        songsright(featuresong_col_12);
        songsright(featuresong_col_13);
        songsright(featuresong_col_14);
        songfinished.addEventListener("click",changetimeover);
        for(var z=0;z<50 ;z++) 
        {
            movienamedesign=document.querySelectorAll(".movienamedesign")[z].addEventListener("click",addtoaudiocentre);
        }
}
function addto() {
    result=event.srcElement.childNodes[0].data;
    songadded.innerText=result;
}
function addtoaudio() {
    var result1=songadded.innerText;
    var songurls;
    for(var i=0;i<songsArray.length;i++) 
    {
        if(songsArray[i].SongName==result1) 
        {
            songurls=songsArray[i].SongUrl;
        }
    }
        audio.src=songurls;
           setTimeout(function() {
            songplayed.style.width=audio.duration / 3 + '%';
        },50);
    audio.play();
}
setInterval(function(){
    songfinished.style.width=audio.currentTime / 3  + '%';
},1000);
function pause() {
    audio.pause();
}
function changetime(){
    var item=audio.currentTime + 20;
    var result=eval(item);
    audio.currentTime=result;
    songfinished.style.width=result;
    
}
function volumechange() {
    audio.volume=volume1.value /100;
}
function columnmiddle(col_1_songs) {
        var ultag=document.createElement("ul");
        centerelement.appendChild(ultag);
        ultag.className="flex";
        for(var j=0;j<col_1_songs.length;j++)
        {
        var coldiv=document.createElement("div");
        coldiv.className="coldiv";
        var spanmovie=document.createElement("span");
        spanmovie.className="movienamedesign";
        var spansinger=document.createElement("span");
        spanmovie.innerHTML=col_1_songs[j].SongMovie;
        spansinger.innerHTML=col_1_songs[j].SongSinger;
        ultag.appendChild(coldiv);
        var colmoviename=document.createElement("div");
        colmoviename.className="designcolnames";
        colmoviename.appendChild(spanmovie);
        var colsingername=document.createElement("div");
        colsingername.className="designcolnames";
        colsingername.className="designsinger";
        colsingername.appendChild(spansinger);
        var colimage=document.createElement("img");
        colimage.className="columnimage";
        colimage.setAttribute("src",col_1_songs[j].SongImageCol);
        coldiv.appendChild(colimage);
        coldiv.appendChild(colmoviename);
        coldiv.appendChild(colsingername);
        }
}
function songsright(featuresong_col) {
        var division=document.createElement("div");
        division.className="flex";
        // division.className="divright";
        featuresongs.appendChild(division);
        for(var i=0;i<featuresong_col.length;i++)
        {
            var divinside=document.createElement("div");
            var featureimage=document.createElement("img");
            featureimage.className="imageright";
            var heading=document.createElement("h6");
            heading.className="imagerightheading";
            heading.innerHTML=featuresong_col[i].songtopic;
            var paragraph=document.createElement("p");
            paragraph.className="imagerightpara";
            paragraph.innerHTML=featuresong_col[i].songsize;
            featureimage.setAttribute("src", featuresong_col[i].songimage);
            division.appendChild(divinside);
            divinside.appendChild(featureimage);
            divinside.appendChild(heading);
            divinside.appendChild(paragraph);
        }
}
function changetimeover() {
    var item=audio.currentTime - 20;
    var result=eval(item);
    audio.currentTime=result;
    songfinished.style.width=result;
}
function addtoaudiocentre() {
    var result=event.srcElement.innerHTML;
    songadded.innerText=result;
    addtoaudio1();
}
function addtoaudio1() {
    var result1=songadded.innerText;
    var songurls;
    var i,j;
    for(i=0;i<col_1_songs.length;i++) 
    {
        
        if(col_1_songs[i].SongMovie==result1) 
        {
            
            songurls=col_1_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_2_songs.length;i++) 
    {
        if(col_2_songs[i].SongMovie==result1) 
        {
            
            songurls=col_2_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_3_songs.length;i++) 
    {
        
        if(col_3_songs[i].SongMovie==result1) 
        {
            
            songurls=col_3_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  

    for(i=0;i<col_4_songs.length;i++) 
    {
        
        if(col_4_songs[i].SongMovie==result1) 
        {
            
            songurls=col_4_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_5_songs.length;i++) 
    {
        
        if(col_5_songs[i].SongMovie==result1) 
        {
            
            songurls=col_5_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_6_songs.length;i++) 
    {
        
        if(col_6_songs[i].SongMovie==result1) 
        {
            
            songurls=col_6_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_7_songs.length;i++) 
    {
        
        if(col_7_songs[i].SongMovie==result1) 
        {
            
            songurls=col_7_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_8_songs.length;i++) 
    {
        
        if(col_8_songs[i].SongMovie==result1) 
        {
            
            songurls=col_8_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_9_songs.length;i++) 
    {
        
        if(col_9_songs[i].SongMovie==result1) 
        {
           
            songurls=col_9_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_10_songs.length;i++) 
    {
        
        if(col_10_songs[i].SongMovie==result1) 
        {
            
            songurls=col_10_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_11_songs.length;i++) 
    {
        
        if(col_11_songs[i].SongMovie==result1) 
        {
            
            songurls=col_11_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_12_songs.length;i++) 
    {
        
        if(col_12_songs[i].SongMovie==result1) 
        {
            
            songurls=col_12_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
    for(i=0;i<col_13_songs.length;i++) 
    {
        
        if(col_13_songs[i].SongMovie==result1) 
        {
            
            songurls=col_13_songs[i].SongURL;
            audio.src=songurls;
    audio.play();
        }
    }  
           setTimeout(function() {
            songplayed.style.width=audio.duration / 3 + '%';
        },50);
}
