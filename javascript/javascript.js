function openCount(evt, hitungPersegi) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(hitungPersegi).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function hitungLuas(){
    inputLuas = parseInt (document.getElementById ( "input-luas" ) .value ) ;
    luas = inputLuas * inputLuas;
    
    document.getElementById ("hasil-luas") .innerHTML= "<p> L = S X S <p> L = " +inputLuas + " X " +inputLuas +"<p> Luas Persegi adalah " +luas;
  }

  function hitungKeliling(){
    inputKeliling = parseInt (document.getElementById ( "input-keliling" ) .value ) ;
    keliling = 4 * inputKeliling;
    
    document.getElementById ("hasil-keliling") .innerHTML= "<p> K = 4 X S <p> K = 4 X "+inputKeliling +"<p> Keliling Persegi adalah " +keliling;
  }

  function reset() {
    document.getElementById('input-luas').value = ''
    document.getElementById('input-keliling').value = ''
  }
