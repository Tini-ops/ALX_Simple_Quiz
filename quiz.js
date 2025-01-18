function checkAnswer() {
    let correctAnswer = 4;
    console.log('Inside the check answer function');
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    console.log(selectedAnswer);
    

    const userAnswer = selectedAnswer.value;
    console.log('you chose ' + userAnswer );
    const feedback = document.getElementById('feedback');

    if (userAnswer == correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }else {
        feedback.textContent = "That's incorrect. Try again!";
    }
    
}

const submitbutton = document.getElementById('submit-answer');
console.log(submitbutton);
submitbutton.addEventListener('click', checkAnswer);

