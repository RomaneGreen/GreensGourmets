import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade, Stagger } from 'react-animation-components';



const leaderImg = {
    height: '105px',
    width:'105px',
    minHeight: '105px',
    maxHeight: '105px',
    minWidth: '105px',
    maxWidth: '105px'
}

function RenderLeader({leader}) {
    return(
        <Stagger in>
        <Fade in>
        <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
              <Media left middle>
                  <Media style={leaderImg} object src={leader.image} alt={leader.name} />
              </Media>
              <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
              </Media>
            </Media>
          </div>
          </Fade>
            </Stagger>
    );

}

function About(props) {
    const leaders = props.leaders.leaders.map((leader) => {
        return (
          <RenderLeader leader={leader} key={leader.id}/>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2013, Greens Gourmet quickly established itself as a culinary icon in the health food industry. With its unique brand of world health food based cuisine that can be found nowhere else, it enjoys patronage a steady niche clientele. Featuring four of the best chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Green Garden</em>, a successful chain started by our CEO, Mr. Peter Greene, that featured for the first time in <em>Dining for health weekly</em>  </p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">RI Famous Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$350,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">14</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">Let food be thy medicine and medicine be thy food.
                                    </p>
                                <footer className="blockquote-footer">Hippocrates,
                                <cite title="Source Title"> 460 B.C.
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}
export default About;    