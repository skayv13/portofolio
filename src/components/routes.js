import Home from './1.home';
import About from './2.about';
import Experience from './3.experience';
import Skills from './4.skills';
import Interest from './5.interest';
import Award from './6.award';

const routes = [
    { id: 0, key: "home", name: "Home", component: Home },
    { id: 1, key: "about", name: "About", component: About },
    { id: 2, key: "experience", name: "Experience", component: Experience },
    { id: 3, key: "skills", name: "Skills", component: Skills },
    { id: 4, key: "interest", name: "Interest", component: Interest },
    { id: 5, key: "award", name: "Award", component: Award },
];

export default routes;