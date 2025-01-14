function notify(content,e,timeout) {

    var theBody = content;
    var options = {
        body: theBody,
        requireInteraction: true,
        badge: true
    };

    var n = new Notification("", options);
    ////var synth = window.speechSynthesis;
    ////var voices = synth.getVoices();
    ////var msg = new window.SpeechSynthesisUtterance(theBody);
    ////msg.volume = 1;
    ////msg.voice = voices[4];

    ////synth.speak(msg);
   
    n.onclick = function (event) {
        n.close();
    };
    timeout = timeout ? timeout : 3000;
    setTimeout(function () {
        n.close();
    }, timeout);
};

if (window.Notification) {
    Notification.requestPermission().then(function(result) {
        if (result === 'denied') {
            return;
        };
        if (result === 'default') {
            notify("Thank you for allowing notification");
        };
    });
}