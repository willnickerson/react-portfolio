import React, { Component } from 'react';
import Slider from 'react-slick';

class Projects extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          {/* eventually but sub slider in here */}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur incidunt, sit cumque quaerat enim laborum accusamus totam reiciendis unde distinctio, eveniet officia temporibus voluptatibus aliquid consequuntur earum ad quam veritatis.</p> 
          <img src="http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1490814219/Screen_Shot_2017-03-24_at_5.03.32_PM_gsp3re.png" alt="#"/>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus facilis et quidem ipsam veritatis exercitationem omnis similique ratione, inventore minima accusamus! Quas ab, ipsam deserunt provident ad quis quae aliquid!</p>
          <img src="http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1490814197/Screen_Shot_2017-03-24_at_5.05.17_PM_gunpnq.png" alt="#"/>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae fugit ipsum sed iure doloribus, expedita ea et saepe eos minus exercitationem est repudiandae molestiae neque ducimus officia, magni ex in.</p>
          <img src="http://res.cloudinary.com/lejipni8p/image/upload/c_crop,g_north,h_1310,w_2560/v1499893316/Screen_Shot_2017-07-12_at_2.00.57_PM_x63cpk.png" alt="#"/>
        </div>
      </Slider>
    );
  }
}

export default Projects;