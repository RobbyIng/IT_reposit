// function Stopwatch(){
//     let watchStarted = false;
//     let begining = 0;
//     this.duration = this.duration;
//     this.start = function(){
//         if (watchStarted) console.error('Stopwatch has already started');
//         else {
//             watchStarted = true;
//             begining = new Date();
//         }
//     };
//     this.stop = function(){
//         if (!watchStarted) console.error('Stopwatch is not started');
//         else {
//             watchStarted = false;
//             this.duration = (new Date() - begining)/1000;
//         }
//     };
//     this.reset = function(){
//         watchStarted = false;
//         begining = 0;
//         this.duration = 0; 
//     }
// }

// const sw = new Stopwatch();

function Stopwatch(){
    let watchStarted, startTime, endTime, duration= 0;
    this.start = function(){
        if (watchStarted) 
            throw new Error('Stopwatch has already started.');
        watchStarted = true;
        startTime = new Date();
    };
    this.stop = function(){
        if (!watchStarted) 
            throw new Error('Stopwatch is not started.');
         watchStarted = false;
         endTime = new Date();
         const seconds = (endTime.getTime() - startTime.getTime())/1000;
         duration += seconds;
   };
    this.reset = function(){
        watchStarted = false;
        endTime = null;
        startTime = null;
        duration = 0;
    }
    Object.defineProperty(this, 'duration', {
        get: function() {return duration;}
    });
}

const sw = new Stopwatch();
