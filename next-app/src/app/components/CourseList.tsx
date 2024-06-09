'use client';

import { useEffect, useState } from 'react';

type Course = {
  courseNo: string;
  abbrName: string;
  courseNameTh: string;
  courseNameEn: string;
  department: string;
  credit: number;
  creditHours: string;
  genEdType: string;
  totalSeats: number;
  updatedAt: Date;
};

type Data = {
  studyProgram: string;
  semester: string;
  academicYear: string;
  courses: Course[];
};

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>();

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://firstact-api.thinc.in.th/courses');
      const data: Data = await res.json();

      setCourses(data.courses);
    }

    getData();
  }, []);

  if (!courses) {
    return <div>No data!</div>;
  }

  return (
    <div className='grid grid-cols-3   '>
      {courses.map((course) => (
        <div key={course.courseNo} className=" drop-shadow-lg pb-10 max-w-3xl	border p-4 m-4 rounded-md text-wrap">
          <div className='text-lg font-bold	'>
            {course.courseNo} {course.abbrName}
          </div>
          <div>
          {course.courseNameTh} {course.courseNameEn}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
