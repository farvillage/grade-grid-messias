function calculateGrid(event) {

    const readGrades1 = document.getElementById('readGrades1').value;
    const readGrades2 = document.getElementById('readGrades2').value;
    const finalGrade = document.getElementById('finalGrade').value;
    
    if (readGrades1 == "" | finalGrade == 0){
        alert("Inserir nota para continuar!")
        return
    
    if (readGrades2 == "" | finalGrade == 0)
        alert("Inserir nota para continuar!")
        return
    
    }
    
    const total = (readGrades1 + readGrades2) / 2;
      total = total.toFixed(2);
    
      document.getElementById("gradeGrid").addEventListener("submit" , finalGrade);
    }
    

