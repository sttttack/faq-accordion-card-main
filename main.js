const questions = document.getElementsByClassName('question');
const arrow = document.getElementsByClassName('arrow');

for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var x = this.nextElementSibling;
        if (x.style.display === 'block') {
            x.style.display = 'none';
        }   else {
            x.style.display = 'block';
        }

    });
}


