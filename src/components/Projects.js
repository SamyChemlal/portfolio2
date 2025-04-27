import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg6 from "../assets/img/project-img6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "SkillSwappGalilée",
      description: "Design & Development using Spring technologies (Spring Boot, Spring Security), Angular for the frontend, and MySQL for the database. Dependency management was handled by Maven, and Hibernate was used for the data access layer.",
      imgUrl: projImg1,
    },
    {
      title: "Medic",
      description: "Design & Development using Spring technologies (Spring Boot, Spring Security), Angular for the frontend, and MySQL for the database. Dependency management was handled by Maven, and Hibernate was used for the data access layer.",
      imgUrl: projImg2,
    },
    {
      title: "GeoGuess",
      description: "Design & Development using HTML, CSS, JavaScript for website design, and PHP & MySQL for database creation.",
      imgUrl: projImg3,
    },
  ];

  const softwareProjects = [
    {
      title: "LabFac",
      description: "Design of a Data Labeling Framework for AI Creation: Development of a labeling software, full-stack development, follow-up meetings, document writing. Technologies: JavaScript, Java, HTML, CSS, TypeScript (Electron, SpringBoot). Implementation of Microsoft authentication.",
      imgUrl: projImg4,
    },
  ];

  const designProjects = [
    {
      title: "Logo BarberShop",
      description: "Logo for a BarberShop",
      imgUrl: projImg6, 
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I have worked on across Web Development, Software Development, and Design fields.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Software Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Design</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          softwareProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          designProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
