import ReactDOM from 'react-dom/client';

import Header from './components/Header.tsx';
import './page.css';
import CourseList from './components/CourseList.tsx';


export default function Home(){
    return <section>
        <Header/>
        <CourseList/>
    </section>;
}