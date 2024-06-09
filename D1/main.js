async function getData() {
    const res = await fetch('https://firstact-api.thinc.in.th/courses');
    const data = await res.json();
  
    const courses_container = document.getElementById('coursesContainer');
  
    data.courses.forEach((course) => {
      const new_course = document.createElement('article');
      const course_heading = document.createElement('h3');
      course_heading.innerText = course.abbrName + ' ' + course.courseNo;
      const course_credit = document.createElement('h4');
      course_credit.innerText = course.credit + " หน่วยกิต";
      const course_name = document.createElement('h3');
      course_name.innerText = course.courseNameTh + course.courseNameEn;
      const course_department = document.createElement('h3');
      course_department.innerHTML = "ภาควิชากลุ่มวิชา/รายวิชา " + "<br>" + course.department;
      const course_type = document.createElement('h3');
      course_type.innerText = course.genEdType;
  
      new_course.append(course_heading);
      new_course.append(course_credit);
      new_course.append(course_name)
      new_course.append(course_department);
      new_course.append(course_type)
  
      course_heading.style = 'background-color:red; text-align:center;';

      new_course.style =
        'width: 50%; background-color: rgba(200, 200, 200, 0.15); border: 2px solid gray; padding: 30px; border-radius:16px;';
    
        courses_container.style = 'display: flex; gap: 10px; flex-wrap: wrap;';
      courses_container.append(new_course);
    });
  }
  
  getData();
  