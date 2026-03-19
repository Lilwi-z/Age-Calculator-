const dobInput = document.getElementById("dob");
const button = document.getElementById("btn");
const result = document.getElementById("result");

let countdownInterval ;



button.addEventListener('click', () => {
  clearInterval(countdownInterval);
    if (!dobInput.value) {
        result.textContent='Please select your date of birth';
        return;
        
    }else if (new Date(dobInput.value) > new Date()) {
        result.textContent='Date of birth cannot be today or future, enter valid date of birth';
        return;
     }
    clearInterval(countdownInterval);

    const dob = new Date(dobInput.value);
    const today = new Date();

    //AGE CALCULATION
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth()-dob.getMonth();
    let days = today.getDate()-dob.getDate();

    if(days < 0) {
        months--;
        const prevMonth = new
        Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // NEXT BIRTHDAY
    let nextBirthday = new Date(
        today.getFullYear(),
        dob.getMonth(),
        dob.getDate()
    );

    if (nextBirthday< today){
        nextBirthday.setFullYear(today.getFullYear() +1);
    }

    function updateCountdown(){
        const now = new Date();
        const diff = nextBirthday-now;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60 * 24)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        result.innerHTML = `
        You are <br><strong>${years}</strong> years, <strong>${months}</strong> months,
        <strong>${days}</strong> days 0ld. <br> <hr>
        🎂 Next birthday in: </br>
        <strong>${d}</stong>d <strong>${h}</strong>h <strong>${m}m </strong> <strong>${s}</strong>s`;
    
    }

    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    
    // Animate Result
    result.classList.remove('show');
    setTimeout(() => result.classList.add('show'), 50);
  
});

 