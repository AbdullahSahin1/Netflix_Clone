    player = document.getElementById('video');
    btnPlay = document.getElementById('btnPlayPause');
    
    player.addEventListener('play',function(){
        changeButtonType(btnPlayPause,'Pause')
    },false)

    player.addEventListener('pause',function(){
        changeButtonType(btnPlayPause,'Play')
    },false)   ;
    function playPauseVideo(){
        if(player.paused || player.ended){
            changeButtonType(btnPlayPause, 'Pause')
            player.play();
        }
        else{
            changeButtonType(btnPlayPause, 'Play')
            player.pause();
        }
    }

    function changeButtonType(btn, value){
        btn.title = value;
        btn.innerHTML = value;  
    }

    const nav = document.getElementById('nav');
    window.addEventListener('scroll',() => {
        if(window.scrollY>=100){
            nav.ClassList.add('nav_black')
        }
        else{
            nav.ClassList.remove('nav_black')
        }
    })
