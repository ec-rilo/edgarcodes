import decoImg1 from '../../public/images/projects/atelier/deco-img-1.png';
import decoImg3 from '../../public/images/projects/atelier/deco-img-3.png';
import decoImg4 from '../../public/images/projects/atelier/deco-img-4.png';
import decoImg6 from '../../public/images/projects/atelier/deco-img-6.png';
import decoImg7 from '../../public/images/projects/atelier/deco-img-7.png';
import decoImg8 from '../../public/images/projects/atelier/deco-img-8.png';
import decoImg9 from '../../public/images/projects/atelier/deco-img-9.png';
import gptDecoImg1 from '../../public/images/projects/fun-with-gpt-3/deco-img-1.png';

const hero = {

  title: 'Atelier',
  subtitle: 'e-commerce app with a variety of products',
  paragraphsArr: [
    `
    Browse through a variety of products that range from apparel to quirky gadgets. I worked on this
    project with a team of two engineers. I was tasked with completing the product details page where
    users can view the product, switch between product styles, change sizes, dynamically update the
    sales price, and the entirity of the dynamic photo carousel.
    `
  ],
  repo: 'https://github.com/ec-rilo/Atelier',
  imgSrc: decoImg9,
  cover: false,

};

const purpose = {

  paragraphsArr: [
    `
    We had to follow a rubric that had clear instructions on what features to implement
    without guidance on how to implement them. I wanted to be able to take the features provided and create
    a pixel-perfect representation of the mock given.
    `,
    `
    This portion of the project was one of three pieces put together. The three pieces are:
    Product details page, the Related items page, and the Reviews page.
    `
  ],
  imgSrc: decoImg8,
  alt: '',
  cover: false,

};

const skills = {

  skillsArr: [
    'Express',
    'React',
    'Styled Components',
    'Node.js',
    'Webpack',
    'AGILE',
    'APIs',
    'Context API',
  ],
  paragraphsArr: [
    `
    I wanted to refresh my memory of React and Styled Components after taking a hiatus
    from React to focus on vanilla JavaScript. Ultimately, React is a great choice for it's ability to
    be picked up quickly and its Context API which is perfect for the photo carousel component to
    pass around the image so different portions of the carousel can access it.
    `,
  ],

};

const problem = {

  paragraphsArr: [
    `
    Using the Context API was the most difficult part of the process. I needed to pass around
    image data in a way that wouldn't cause conflicts with the existing state in the component tree.
    This required complex state management in order to prevent image mishaps between the components.
    Allowing for synchronicity throughout the product details page.
    `
  ],

};

const pictures = {

  arr: [
    { src: decoImg3, alt: "#"},
    { src: decoImg6, alt: "#"},
    { src: decoImg4, alt: "#"},
  ]

};

const lessons = {

  paragraphsArr: [
    `
    The end result was an identical replica of the mock I was given with features that
    were exactly what the documentation had asked for. I sharpened my skills in creating
    nicely reusable components and a better understanding of state management across
    data-heavy needing components.
    `,

    `
    I also sharpened my skills with webpack, creating my own custom configuration that
    allowed me to get a ~96 average score on google lighthouse by implementing text and
    image compression. And also learning how to create a convenient development environment
    with webpack dev server.
    `
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
    title: 'Threads',
    subTitle: 'Backend Software Engineer',
    src: decoImg1,
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
