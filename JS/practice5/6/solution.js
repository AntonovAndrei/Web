function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click', onClick1);
    document.getElementById('hoursBtn').addEventListener('click', onClick2);
    document.getElementById('minutesBtn').addEventListener('click', onClick3);
    document.getElementById('secondsBtn').addEventListener('click', onClick4);

    function onClick1(){
        document.getElementById('daysBtn').onclick = function(){
            let day = document.getElementById('days').value;
            document.getElementById('hours').value = day * 24;
            document.getElementById('minutes').value = day * 24 * 60;
            document.getElementById('seconds').value = day * 24 * 60 * 60;
        }
    }

    function onClick2(){
        document.getElementById('hoursBtn').onclick = function(){
            let hour = document.getElementById('hours').value;
            document.getElementById('days').value = hour / 24;
            document.getElementById('minutes').value = hour * 60;
            document.getElementById('seconds').value = hour * 60 * 60;
        }

    }
    function onClick3(){
        document.getElementById('minutesBtn').onclick = function(){
            let minute = document.getElementById('minutes').value;
            document.getElementById('days').value = minute / 24 / 60;
            document.getElementById('hours').value = minute / 60;
            document.getElementById('seconds').value = minute * 60;
        }
    }
    function onClick4(){
        document.getElementById('secondsBtn').onclick = function(){
            let second = document.getElementById('seconds').value;
            document.getElementById('days').value = second / 24 / 60 / 60;
            document.getElementById('hours').value = second /60 / 60;
            document.getElementById('minutes').value = second / 60;
        }

    }
   
   
}