class Remote{
    constructor(code){
        this.code = code
    }
    changeChannel(Tivi, newChannel){
        Tivi.setChannel(newChannel);
    }
    changeVolume(Tivi,volume){
        Tivi.setVolume(volume);
    }
    togglePower(Tivi){
        Tivi.togglePower();
    }
}
class Tivi{
    constructor(){
        let currentChannel = 1 ;
        let currentVolume = 10;
        this.isOn = false;
    }
    setChannel(newChannel){
        if(this.isOn){
            this.currentChannel = newChannel;
            console.log('Channel changed to ' + this.currentChannel)
        } else {
            console.log('Tivi is off')
        }
    }
    setVolume(newVolume){
        if(this.isOn){
            this.currentVolume = newVolume;
            console.log('Volume changed to ' + this.currentVolume)
        } else {
            console.log('Tivi is off')
        }
    }
    togglePower(){
        if(this.isOn){
            this.isOn = false
        }else{
            this.isOn = true
        }
    }
}
let tivi = new Tivi();
let remote = new Remote('1234');

remote.changeChannel(tivi, 5);
remote.changeVolume(tivi, 15);
remote.togglePower(tivi);