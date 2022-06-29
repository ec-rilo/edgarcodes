import heroImg from '../../public/images/projects/rumble/rumble-phones-imgs.png';
import decoImg1 from '../../public/images/projects/rumble/rumble-deco-img-1.png';
import decoImg2 from '../../public/images/projects/rumble/rumble-deco-img-2.png';
import decoImg3 from '../../public/images/projects/rumble/rumble-deco-img-3.png';
import decoImg4 from '../../public/images/projects/rumble/rumble-deco-img-4.png';
import decoImg5 from '../../public/images/projects/rumble/rumble-deco-img-5.png';
import threadsDecoImg from '../../public/images/projects/threads/deco-img-1.png';
import gptDecoImg from '../../public/images/projects/fun-with-gpt-3/deco-img-1.png';



const hero = {

  title: 'Rumble',
  subtitle: 'Food ordering app, done Tinder-style',
  paragraphsArr: [
    `
    Rumble is a full-stack application where you and your friends can match on restaurants you like!
    I created this project alongside a team of 6 other engineers, the app had to be carefully
    created with lots of team communication because of the many moving pieces that relied on each other
    for functionality.
    `
  ],
  repo: 'https://github.com/dennisrcao/Rumble',
  imgSrc: heroImg,
  cover: true,

};

const purpose = {

  paragraphsArr: [
    `
    We worked with a client who gave us a vague idea of what functionality she wanted for the app and
    we built off of that to create Rumble from the ground up.
    `,
    `
    We needed to build an app that was heavily inspired by tinder. Allowing users to have the choice of
    swiping in either a solo or group mode. Users also have the option to browse restaurants near them
    and view there menus and also be able to favorite restaurants and view them.
    `,
  ],
  imgSrc: decoImg5,
  alt: '',
  cover: false,

};

const skills = {

  skillsArr: [
    'React',
    'Firebase',
    'Tailwind CSS',
    'Next.js',
    'Express',
    'Node.js',
    'Postman',
    'Axios',
  ],
  paragraphsArr: [
    `
    We had a strict deadline and needed to be able to create components quickly while being consistent
    in our styling across the team. Since we all had a foundation with CSS, Tailwind was the obvious choice.
    `,
    `
    And when comparing how our data was structured in the Backend. We found that the users would be accessing
    documents of related data that needed to be retrieved quickly so we went NoSQL and chose the
    Cloud Firestore.
    `
  ],

};

const problem = {

  paragraphsArr: [
    `
    Because of the sheer size of the application I knew that keeping an organized structure while keeping
    components as reusable as possible was going to be important. So I made out to keep my code modular
    and referenced pages across the designs to see what components could be reused where.
    `,
    `
    I then created mocked wireframes of components in excalidraw and used Tailwind to code the final designs.
    I made sure to keep the components as reusable as possible by utilizing props to allow for variations.
    `
  ],

};

const pictures = {

  arr: [
    { src: decoImg3, alt: "#"},
    { src: decoImg2, alt: "#"},
    { src: decoImg1, alt: "#"},
  ]

};

const lessons = {

  paragraphsArr: [
    `
    This project taught me a lot of how to structure and manage a larger codebase with a team of engineers.
    I had lots of experience making and reviewing PR's along with solidifying my knowledge with React such
    as creating custom hooks and refactoring existing components created by others on my team.
    `,
    `
    I also learned more about System Design. Figuring out the importance of what tool is good for job (like
    choosing a SQL or noSQL database) and structure flow of the application.
    `
  ],

};

const pictures2 = {

  arr: [
    { src: decoImg4, alt: "#"},
  ]

};

const whatsNext = {

  paragraphsArr: [
    `
    For this project the client was ecstatic with the end result we delivered! But I want to revisit it
    using MongoDB in the backend and deploying on AWS. I think in the long-run MongoDB will handle scaling the application better by handling more users and AWS will make it easier for us to horizontally scale the application, I also plan on using NewRelic for monitoring each instance. I'd still want to use
    Firebase Auth for user profiles.
    `
  ],

};

const altProjects = [

  {
    title: 'Threads',
    subTitle: 'Backend Engineer',
    src: threadsDecoImg,
    alt: '',
  },
  {
    title: 'Fun with GPT-3',
    subTitle: 'Full Stack Software Engineer',
    src: gptDecoImg,
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
  whatsNext,
  altProjects,
  pictures2,
};

export default rumbleData;
