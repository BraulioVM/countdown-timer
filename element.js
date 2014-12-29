(function(){

  function _normalizeTime(hours, minutes, seconds){
    minutes += Math.floor(seconds / 60);
    seconds = seconds % 60;

    hours += Math.floor(minutes/60);
    minutes = minutes % 60;


    return [hours, minutes, seconds];
  }


  Polymer("countdown-timer", {

    running: false,

    hours: 0,
    minutes: 0,
    seconds : 0,



    tick : function(){

      if (this.running == true) {

        if (this.seconds == 0){

          if (this.minutes == 0){

            if (this.hours == 0){
              this.running = false;

              this.fire("count-ended");

            } else {
              this.minutes = 59;
              this.hours--;
            }


          } else {
            this.seconds = 59;
            this.minutes--;
          }


        } else {
          this.seconds--;
        }


      }

      var self = this;

      setTimeout(function(){
        self.tick();
      }, 1000);
    },

    ready : function(){
      var time = _normalizeTime(this.hours, this.minutes, this.seconds);

      this.hours = time[0];
      this.minutes = time[1];
      this.seconds = time[2];

      this.tick();
    },

    run : function(){
      this.running = true;
      this.fire("count-running");
    },

    stop: function(){
      this.running = false;
      this.fire("count-stopping");
    },


    timePresentation : function(number){
      if (number < 10){
        return "0" + number;
      }

      return number;
    }




  });

})();
