import Img1 from "../../assets/serviceImg1.jpg"
import Img2 from "../../assets/serviceImg2.jpg"
import ItemImg1 from "../../assets/service-item-img1.jpg"
import ItemImg2 from "../../assets/service-item2.jpg"
import ItemImg3 from "../../assets/service-item3.jpg"
import ItemCheck from "../../assets/service-item-check.png"


const serviceData = [
    {
      id:1,
      img:Img1,
      title:"home-service-card1-title",
      link: "sport_car_rent",
      serviceItems: [
        {
          id:1,
          itemImage:ItemImg1,
          itemNumber: 1000,
          itemNumberText:"one person",
          basic:"basic",
          itemText:"Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
          itemTitle:"Package Inclusions:",
          itemCheckImage:ItemCheck,
          itemCheckText1:"Premium Transfer to camp",
          itemCheckText2:"Dune Buggy riding 1.5 hours",
          itemCheckText3:"Cuadro 15 min",
          itemCheckText4:"Falcone shoting",
          itemCheckText5:"Camel",
          itemCheckText6:"VIP room",
          itemCheckText7:"Fruits, Drinks, BBQ",
          itemBtn:"Book Now"
        },
        {
          id:2,
          itemImage:ItemImg2,
          itemNumber: 2000,
          itemNumberText:"two person",
          basic:"Strong",
          itemText:"1asasa2334343434Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
          itemTitle:"Package Inclusions:",
          itemCheckImage:ItemCheck,
          itemCheckText1:"Premium Transfer to camp",
          itemCheckText2:"Dune Buggy riding 2.5 hours",
          itemCheckText3:"Cuadro 15 min",
          itemCheckText4:"Falcone shoting",
          itemCheckText5:"Camel",
          itemCheckText6:"VIP room",
          itemCheckText7:"Fruits, Drinks, BBQ",
          itemBtn:"Book Now"
        },
        {
          id:3,
          itemImage:ItemImg3,
          itemNumber: 3000,
          itemNumberText:"three person",
          basic:"Premium",
          itemText:"121212334343434Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
          itemTitle:"Package Inclusions:",
          itemCheckImage:ItemCheck,
          itemCheckText1:"Premium Transfer to camp",
          itemCheckText2:"Dune Buggy riding 3.5 hours",
          itemCheckText3:"Cuadro 15 min",
          itemCheckText4:"Falcone shoting",
          itemCheckText5:"Camel",
          itemCheckText6:"VIP room",
          itemCheckText7:"Fruits, Drinks, BBQ",
          itemBtn:"Book Now"
        },
      ],
      desc:"home-service-card1-desc",
      btn:"home-service-btn"
    },
    {
      id:2,
      img:Img2,
      title:"home-service-card2-title",
      link:"photoshoot-with-luxury-car-in-dubai",
      serviceItems: [
        {
          id:1,
          itemImage:ItemImg1,
          itemNumber: 2000,
          itemNumberText:"one person",
          basic:"basic",
          itemText:"Dune buggies in Dubai Book your ride on the most exciting adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
          itemTitle:"Package Inclusions:",
          itemCheckImage:ItemCheck,
          itemCheckText1:"Premium Transfer to camp",
          itemCheckText2:"Dune Buggy riding 4.5 hours",
          itemCheckText3:"Cuadro 15 min",
          itemCheckText4:"Falcone shoting",
          itemCheckText5:"Camel",
          itemCheckText6:"VIP room",
          itemCheckText7:"Fruits, Drinks, BBQ",
          itemBtn:"Book Now"
        },
        {
          id:2,
          itemImage:ItemImg2,
          itemNumber: 4000,
          itemNumberText:"two person",
          basic:"Premium",
          itemText:"Adventure activity to hit the desert and later pamper your self to a traditional Arabian hospitality.",
          itemTitle:"Package Inclusions:",
          itemCheckImage:ItemCheck,
          itemCheckText1:"Premium Transfer to camp",
          itemCheckText2:"Dune Buggy riding 4.5 hours",
          itemCheckText3:"Cuadro 15 min",
          itemCheckText4:"Falcone shoting",
          itemCheckText5:"Camel",
          itemCheckText6:"VIP room",
          itemCheckText7:"Fruits, Drinks, BBQ",
          itemBtn:"Book Now"
        },
      ],
      desc:"home-service-card2-desc",
      btn:"home-service-btn"
    }
  ]

  export default serviceData