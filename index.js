function checkGrade(){
  let score = document. getElementById('yourscore').value
  // myScreen.innerHTML = 'your score is '+score
  if (score >= 70 && score <= 100){
      myScreen.innerHTML = 'A'
  }
  else if (score >= 60 && score < 70){
      myScreen.innerHTML = 'B'
  }
  else if (score >= 50 && score <= 59){
      myScreen.innerHTML = 'C'
  }
  else if (score >= 45 && score <= 49){
      myScreen.innerHTML = 'D'
  }
  else if (score >= 40 && score <= 44){
      myScreen.innerHTML = 'E'
  }
  else if (score >= 0 && score <= 39){
      myScreen.innerHTML = 'F'
  }
  else{
      myScreen.innerHTML = 'please enter a valid score between 0 and 100'

  }
}