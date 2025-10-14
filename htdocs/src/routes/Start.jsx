import "./start.css";
import Title from "../components/Titles";
import Button from "../components/Button";
import Card from "../components/Card";
import Stat from "../components/Numbers";
import Course from "../components/CourseCard";

export default function Start() {
  const buttons = {
    home: [
      {
        text: "explore courses",
      },
      {
        class: "secondary",
        text: "learn more",
      },
    ],
  };
  const cards = [
    {
      name: "specialized teachers",
      description:
        "Learn with market recognized professionals, with years of experience in their action area",
      icon: "check-circle",
    },
    {
      name: "flexible learning",
      description:
        "Study when and where you want. Our courses are 100% online and you can access the content at anytime",
      icon: "circle-nodes",
    },
    {
      name: "recognized certificates",
      description:
        "Receive certificates valid on working market and implusionate your professional career",
      icon: "award",
    },
    {
      name: "active comunity",
      description:
        "Connect to other students, share your doubts and experiences in a large community",
      icon: "users-rays",
    },
    {
      name: "mobile access",
      description:
        "Study on the phone, tablet or computer. Our plataform is optimized for every devices",
      icon: "mobile",
    },
    {
      name: "pratical projects",
      description:
        "Apply your knowledge in real projects an dbuild an impressive portfolio",
      icon: "file-pen",
    },
  ];
  const courseCards = [
    {
      class: "",
      id: "",
      icon: "",
      name: "full web development",
      description:
        "Learn HTML, CSS, JavaScript, React and Node.js. From basic to advanced, everything you need to become a full-stack developer.",
      price: "297",
      students: "1.2K",
    },
    {
      class: "",
      id: "",
      icon: "",
      name: "professional UI/UX design",
      description:
        "Master the digital design tools and concepts. Figma, AdobeXD, prototyping and much more.",
      price: "247",
      students: "890",
    },
    {
      class: "",
      id: "",
      icon: "",
      name: "data science & machine learning",
      description:
        "Enroll in the data world. Python, Pandas, Scikit-learn, TensorFlow and data analysis.",
      price: "347",
      students: "756",
    },
    {
      class: "",
      id: "",
      icon: "",
      name: "mobile development",
      description:
        "Develop apps for Andoid and iOS using ReactNatice and Flutter. Publish in Google PlayStore and AppStore.",
      price: "297",
      students: "634",
    },
    {
      class: "",
      id: "",
      icon: "",
      name: "digital marketing",
      description:
        "Online marketing strategies, SEO, Google Ads, social medias and performance metrics.",
      price: "197",
      students: "1.5K",
    },
    {
      class: "",
      id: "",
      icon: "",
      name: "cybersecurity essentials",
      description:
        "Protect systems and data. Ethical hacking, criptography, network security and compilance.",
      price: "397",
      students: "423",
    },
  ];
  const stats = [
    {
      number: "50K+",
      name: "active students",
    },
    {
      number: "200+",
      name: "available courses",
    },
    {
      number: "95%",
      name: "satisfaction percentage",
    },
    {
      number: "24/7",
      name: "online support",
    },
  ];
  let tab = 7;

  return (
    <>
      <div className="layer --darker -home">
        <Title text="transform your future with online education" />
        <p className="intro">
          Learn with the best teachers in the world, in your own time. Thousand
          of available courses in technologies, business, design and many more.
        </p>
        {buttons.home.map((button) => {
          let i = 0;
          i++;
          return (
            <Button
              text={button.text}
              class={button.class}
              tab={++tab}
              key={tab}
            />
          );
        })}
      </div>
      <div className="layer --dark -advantages">
        <Title text="why to choose onlineAcademy.net?" class="sub" />
        <div className="container">
          {cards.map((card) => {
            return (
              <Card
                name={card.name}
                description={card.description}
                icon={card.icon}
                tab={++tab}
                key={tab}
              />
            );
          })}
        </div>
      </div>
      <div className="layer --darker -courses">
        <Title text="popular courses" class="sub" />

        <div className="container">
          {courseCards.map((course) => {
            return (
              <Course
                icon={course.icon}
                name={course.name}
                description={course.description}
                price={course.price}
                students={course.students}
                tab={++tab}
                key={tab}
              />
            );
          })}
        </div>
      </div>
      <div className="layer --dark -stats">
        {stats.map((stat) => {
          return <Stat number={stat.number} name={stat.name} key={++tab} />;
        })}
      </div>
      <div className="layer --darker -footer">
        <div>
          <section>
            <p className="-title" tabIndex={++tab}>
              OnlineAcademy.net
            </p>
            <p>
              Transforming lives by a qualified online education. Join millions
              if students who have made up their carrers with us.
            </p>
          </section>
          <section>
            <p className="-title">courses</p>
            <ul>
              <li tabIndex={++tab}>web development</li>
              <li tabIndex={++tab}>UI/UX design</li>
              <li tabIndex={++tab}>data science</li>
              <li tabIndex={++tab}>digital marketing</li>
              <li tabIndex={++tab}>cybersecurity</li>
            </ul>
          </section>
          <section>
            <p className="-title">support</p>
            <ul>
              <li tabIndex={++tab}>help center</li>
              <li tabIndex={++tab}>contact</li>
              <li tabIndex={++tab}>FAQ</li>
              <li tabIndex={++tab}>privacy policy</li>
              <li tabIndex={++tab}>usage terms</li>
            </ul>
          </section>
          <section>
            <p className="-title">connect</p>
            <ul>
              <li tabIndex={++tab}>facebook</li>
              <li tabIndex={++tab}>instagram</li>
              <li tabIndex={++tab}>linkedIn</li>
              <li tabIndex={++tab}>youTube</li>
              <li tabIndex={++tab}>telegram</li>
            </ul>
          </section>
        </div>
        <div className="hr"></div>
        <footer>&copy; 2025 OnlineAcademy.net. All rights reserved</footer>
      </div>
    </>
  );
}
