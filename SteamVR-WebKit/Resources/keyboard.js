function addInputListeners() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type.toLowerCase() == 'text') {
            inputs[i].addEventListener('click', function() {
                var current_inputs = document.getElementsByClassName('current-keyboard-input');
                for (var i = 0; i < current_inputs.length; i++) {
                    current_inputs[i].classList.remove('current-keyboard-input');
                }
        
                this.classList.add('current-keyboard-input');
                keyboard.showKeyboard(this.value);
            });
        }
    }
}

function checkActiveInput() {
    var active = document.activeElement;
    if (active.tagName == 'INPUT') {
        active.classList.add('current-keyboard-input');
        keyboard.showKeyboard(active.value);
    }
}

function handleInputClicked(text) {
    var current_inputs = document.getElementsByClassName('current-keyboard-input');
    if (current_inputs[0]) {
        current_inputs[0].value = text;
        var event = new Event('input', {
            'bubbles': true,
            'cancelable': true
        });
        current_inputs[0].dispatchEvent(event);
        current_inputs[0].classList.remove('current-keyboard-input');
    }
}


