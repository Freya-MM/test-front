function Filter({setPositionChara}) {
    const btnStudents = document.getElementById('btnStudents'); 
    const btnStaff = document.getElementById('btnStaff');

    const changePosition = position => {
      if(position==='Estudiante'){
        btnStaff.className = '';
        btnStudents.className = 'btn-active';
        setPositionChara('Estudiante')
      } else if(position==='Staff') {
        btnStaff.className = 'btn-active';
        btnStudents.className = '';
        setPositionChara('Staff')
      }
    }

    return (
      <div className='col-12 text-center btn-style d-flex justify-content-center mt-3'>
          <button id="btnStudents" onClick={() => changePosition('Estudiante')}>Estudiantes</button>
          <button id="btnStaff" onClick={() => changePosition('Staff')}>Staff</button>
      </div>
    )
  }
  
  export default Filter