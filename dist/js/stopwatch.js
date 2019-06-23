/*!
 * Metropolic v1.0.0
 * 
 * (c) 2019 BinaryRx
 * MIT License
 * git@bitbucket.org:klogic/metropolic_landingpage.git
 */

$((function(){
    var mode = 0; //AppMode
    var timeCounter = 0; //timeCounter
    var lapCounter = 0; //lapCounter
    var action; //variable for setInterval
    var lapNumber = 0; //Number of Laps

    var timeMinutes,timeSeconds,timeCentiseconds, lapMinutes, lapSecond, lapCentiseconds;



    $('#stopButton').click((function(){
        //show the resume and reset buttons
        hideShowButtons('#resumeButton','#resetButton');
        //stop counter
        clearInterval(action);
    }));

    $('#resumeButton').click((function(){
        //show the resume and reset buttons
        hideShowButtons('#stopButton','#lapButton');
        //stop counter
        startAction();
    }));

    $('#resetButton').click((function(){
        //reload page
        location.reload();
    }));

    $('#lapButton').click((function(){
        if(mode == 1){
            //stop action
            clearInterval(action);

            //resetLap and print lap details
            lapCounter = 0;
            addLap();

            //start action
            startAction();

        }else{
            mode = 1;
            startAction();
            
        }
        //show the resume and reset buttons
        hideShowButtons('#stopButton','#lapButton');
        //stop counter
        startAction();
    }));



    //on App load show start and lap buttons
    hideShowButtons('#startButton','#lapButton')

    $('#startButton').click((function(){
        mode = 1;
        hideShowButtons('#stopButton','#lapButton')//show stop + lap buttons

        startAction();//start Counter
    }));




    /*
        Functions:
    */

    // hideShowButtons() function shows two buttons
    function hideShowButtons($btn_a,$btn_b){
        $('.control').hide();
        $($btn_a).show();
        $($btn_b).show();
    }

    //start the counter
    function startAction(){
        action = setInterval((function(){
            timeCounter++;
            if(timeCounter == 100*60*100){
                timeCounter = 0;
            }

            lapCounter++;
            if(lapCounter == 100*60*100){
                lapCounter = 0;
            }

            updateTime();
        }),10)
    }

    //convert counters to min,sec,centisec
    function updateTime(){
        timeMinutes = Math.floor(timeCounter / 6000);//1min = 60*100centiseconds = 6000 centiseconds
        timeSeconds = Math.floor((timeCounter%6000)/100);//1sec = 100 centiseconds
        timeCentiseconds = (timeCounter%6000)%100;

        //Aslign the variables to their elements
        $('#timeMinutes').text(format(timeMinutes));
        $('#timeSeconds').text(format(timeSeconds));
        $('#timeCentiSeconds').text(format(timeCentiseconds));
        

        lapMinutes = Math.floor(lapCounter / 6000);//1min = 60*100centiseconds = 6000 centiseconds
        lapSeconds = Math.floor((lapCounter%6000)/100);//1sec = 100 centiseconds
        lapCentiseconds = (lapCounter%6000)%100;

        $('#lapMinutes').text(format(lapMinutes));
        $('#lapSeconds').text(format(lapSeconds));
        $('#lapCentiSeconds').text(format(lapCentiseconds));
    }

    //format numbers
    function format(number){
        if(number < 10){
            return '0'+number;
        }else{
            return number;
        }
    }

    //print lap details inside lapbox
    function addLap(){
        lapNumber++;
        var myLapDetails = '<div class="lapInfo">'+
            '<div class="lapNum">'+ 'Lap'+ lapNumber +'</div>'+
            '<div class="lapTime">'+
                '<span>'+ format(lapMinutes) + ':' +  '</span>'+
                '<span>'+ format(lapSeconds) + ':' + '</span>'+
                '<span>'+ format(lapCentiseconds) + '</span>'+
            '</div>'+

        '</div>';
        $(myLapDetails).prependTo('#laps');
    }
    
}));