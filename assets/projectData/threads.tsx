import decoImg1 from '../../public/images/projects/threads/deco-img-1.png';
import decoImg2 from '../../public/images/projects/threads/deco-img-2.png';
import decoImg4 from '../../public/images/projects/threads/deco-img-4.png';
import decoImg5 from '../../public/images/projects/threads/deco-img-5.png';
import decoImg6 from '../../public/images/projects/threads/deco-img-6.png';
import decoImg7 from '../../public/images/projects/threads/deco-img-7.png';
import rumbleDecoImg from '../../public/images/projects/rumble/rumble-deco-img-1.png';
import gptDecoImg1 from '../../public/images/projects/fun-with-gpt-3/deco-img-1.png';


const hero = {

  title: 'Threads',
  subtitle: 'Backend system redesign of a legacy API',
  paragraphsArr: [
    `
    Threads was a e-commerce platform with a monolithic service as the Backend. The
    API had average query times of 1s per query on a variety of endpoints. I worked
    on the backend alongside a team of engineers with Express, Postgresql, and
    React.
    `,
    `
    This project required us to breakup the monolithic service into a series
    of microservices. I was tasked with the product page microservice.
    `,
    `
    (React Components for this project were created by another team)
    `
  ],
  repo: 'https://github.com/ec-rilo/Threads',
  imgSrc: decoImg1,
  cover: false,

};

const purpose = {

  paragraphsArr: [
    `
    I needed to figure out how to lower the query times dramatically of the current
    endpoints while only being given the given monolithic service as a reference point.
    We had the freedom of choosing the services we needed to improve the query times.
    I heavily worked on autonomy, system design, and problem solving with this project
    since there was no roadmap on how to get this project done. Just a set of requirements.
    `
  ],
  imgSrc: decoImg2,
  alt: '',
  cover: false,

};

const skills = {

  skillsArr: [
    'Express',
    'Node',
    'Postgres',
    'AWS',
    'React',
    'NGINX',
    'loader.io',
    'k6',
  ],
  paragraphsArr: [
    `
    With so many backend databases available, I decided on Postgres. The data being used had a
    fixed structure with no plans of modifying and paired with Postgres's ACID compliance for added
    security made it the best choice for this e-commerce app.
    `,
    `
    I loved AWS freedom to control instances. If I ever needed to horizontally scale my application,
    AWS allowed me to add more instances and control the independent settings of each so I only
    used what I needed.
    `
  ],

};

const problem = {

  paragraphsArr: [
    `
    The challenge was pushing the limits of how much I could optimize each query. I first
    started by recreating schemas for my microservice and tested those endpoints getting
    average query times of ~40 ms per query. Then I moved onto indexing specific columns
    which lowered the speeds further and finally I used postgres json creation functions to
    get the returned data in a format I needed instead of using JavaScript to manipulate the
    data. Leaving my final query speeds on average of ~15 ms per query!
    `
  ],

};

const pictures = {

  arr: [
    { src: decoImg6, alt: "#"},
    { src: decoImg5, alt: "#"},
    { src: decoImg4, alt: "#"},
  ]

};

const lessons = {

  paragraphsArr: [
    `
    I strengthed my knowledge in the backend. I learned how important it is to setup a plan before
    entering the backend so I can find different ways to optimize schemas and also how to optimize
    queries for faster response times. I also saw how crucial it is to test with different user loads
    to see how that affects query speeds and horizontally scaling the application to mitigate that.
    `,
  ],

};

const pictures2 = {

  arr: [
    { src: decoImg7, alt: "#"},
  ]

};

const altProjects = [

  {
    title: 'Fun with GPT-3',
    subTitle: 'Full Stack Software Engineer',
    src: gptDecoImg1,
    alt: '',
  },
  {
    title: 'Rumble',
    subTitle: 'Full Stack Engineer - UI Owner',
    src: rumbleDecoImg,
    alt: '',
  },

];

const rumbleData = {
  hero,
  purpose,
  skills,
  problem,
  pictures,
  lessons,
  altProjects,
  pictures2,
};

export default rumbleData;
