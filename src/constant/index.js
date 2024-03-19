import twitter from '../components/images/twitter.svg';
import facebook from '../components/images/facebook.svg';
import instagram from '../components/images/instagram.svg';
import linkdein from '../components/images/linkdein.svg';
import insta from '../components/images/instagram (1).svg';
import img2 from '../components/images/img2.jpg'
import img6 from '../components/images/img6.jpg'
import img12 from '../components/images/img12.jpg'
import img7 from '../components/images/img7.jpg'
import img04 from '../components/images/img04.jpg'
import img09 from '../components/images/img09.jpg'
import img11 from '../components/images/img11.jpg'
import img22 from '../components/images/OIG2.jpg'
import img23 from '../components/images/img23.jpg'
import img_main from '../components/images/img_main.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-brands-svg-icons";
import { faBolt, faChargingStation, faChartSimple, faShareFromSquare } from '@fortawesome/free-solid-svg-icons';



export const exploreWorlds = [
    {
      id: 'world-1',
      imgUrl:img04,
      title: 'Charging Station',
    },
    {
      id: 'world-2',
      imgUrl:img6,
      title: 'Power Share',
    },
    {
      id: 'world-3',
      imgUrl: img12,
      title: 'Diverse charging stations',
    },
    {
      id: 'world-4',
      imgUrl:  img2,
      title: 'Book a station',
    },
    {
      id: 'world-5',
      imgUrl:img09,
      title: 'Fleet Charging',
    },
  ];
  
  export const startingFeatures = [
    'Find the nearest suitable electric power station for your vehicle to charge',
    'Check for the waiting period and queue in the power stations',
    'Connect you Home , Restaurant , Dhabas or Hotels with e-share options',
  ];
  
  export const newFeatures = [
    {
      imgUrl: <FontAwesomeIcon icon={faChargingStation} style={{color: "white",fontSize:"2rem"}}/>,
      title: 'Locate e-stations',
      subtitle: 'locate the nearest stations suitable for your vehicle to charge ',
    },
    {
      imgUrl: <FontAwesomeIcon icon={faBolt} style={{color: "white",fontSize:"2rem"}}/>,
      title: 'Waiting period',
      subtitle:'check for vacance and queue in power-pulgs',
    },
    {
      imgUrl: <FontAwesomeIcon icon={faShareFromSquare} style={{color: "white",fontSize:"2rem"}}/>,
      title: 'Power-share',
      subtitle:'share excess electricity and earn',
    },
    {
      imgUrl: <FontAwesomeIcon icon={faChartSimple} style={{color: "white",fontSize:"2rem"}}/>,
      title: 'New Stations',
      subtitle:'more number of stations',
    },
  ];
  
  export const insights = [
    {
      imgUrl: img11,
      title: 'The launch of power share a unique concept of diverse charging station',
      subtitle:
          'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
    },
    {
      imgUrl:img23,
      title: 'Fleet manageemnt making it easy to charge large number of vehicles at once',
      subtitle:
          'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
    },
    {
      imgUrl: img22,
      title: 'locating charging stations and their waiting period adn booking options',
      subtitle:
          'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
    },
  ];
  
  export const socials = [
    {
      name: 'twitter',
      url: {twitter},
    },
    {
      name: 'linkedin',
      url: {linkdein},
    },
    {
      name: 'instagram',
      url: {insta},
    },
    {
      name: 'facebook',
      url: {facebook},
    },
  ];
  