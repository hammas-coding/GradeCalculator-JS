const calcy = () => {
    let wd = document.getElementById('wd').value;
    let maths = document.getElementById('maths').value;
    let comp = document.getElementById('comp').value;
    let phy = document.getElementById('phy').value;

    let grades = "";

    let totalGrades = parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy);
    // alert(totalGrades);

    let perc = (totalGrades / 400) * 100;

    // debugger;    

    if (perc <= 100 && perc >= 80) {
        grades = 'A';
    } else if (perc <= 79 && perc >= 60) {
        grades = 'B';
    }
    else if (perc <= 59 && perc >= 40) {
        grades = 'C'
    } else {
        grades = 'F';
    }

    if (perc >= 39.5) {
        document.getElementById('showData').innerHTML = ` Out of 400 Your Total Is ${totalGrades} And Percentage Is ${perc}%. <br> Your Grade Is ${grades}. You Are Pass.`
    }
    else {
        document.getElementById('showData').innerHTML = ` Out of 400 Your Total Is ${totalGrades} And Percentage Is ${perc}%. <br> Your Grade Is ${grades}. You Are Fail.`
    }
}