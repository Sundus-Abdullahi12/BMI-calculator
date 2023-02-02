const btnEl = document.getElementById('btn')
const bmiImputEl = document.getElementById('bmi-result')
const weightCondition = document.getElementById('weight-condition')

function calculateBMI() {
    const heightvalue = document.getElementById('height').value / 100
    const weightvalue = document.getElementById('weight').value

    const BMIvalue = weightvalue / (heightvalue * heightvalue);

    bmiImputEl.value = BMIvalue;

    if (BMIvalue < 18.5) {
        weightCondition.innerText = 'Under weight'
    } else if (BMIvalue >= 18.5 && BMIvalue <= 24.9) {
        weightCondition.innerText = 'normal weight'

    } else if (BMIvalue >= 25 && BMIvalue <= 29.9) {
        weightCondition.innerText = 'over weight'

    } else if (BMIvalue >= 30 ) {
        weightCondition.innerText = 'obesity'

    }
}


btnEl.addEventListener('click', calculateBMI)