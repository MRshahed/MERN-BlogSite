import "./Page.css";
import Sidebar from "../../sidebar/Sidebar";
import Img from "../../../assets/post1.jpg";

const Page = () => {
  return (
    <div className="page__container">
      <div className="page__content">
        <img src={Img} alt="post cover" className="page__img" />

        <h1 className="page__title">
          A Beautiful journey by Bandarban Bangladesh.
          <div className="page__edit-container">
            <i className="page__edit-icon bx bxs-edit"></i>
            <i className="page__edit-icon bx bxs-trash"></i>
          </div>
        </h1>

        <div className="page__info">
          <p className="page__author">Shahed Hossen</p>
          <p className="page__date">21 jun 2022</p>
        </div>

        <h3 className="page__description">
          In Chittagong District there are three hill tracts or hill district in
          Bangladesh. These are Bandarban, Rangamati and Khagrachori. Bandarban
          is the perfect place to visit in Bangladesh for the adventurous people
          who love wild hilly area. Main attraction of Bandarban in Bangladesh
          is lots of Trees, Hills, Waterfalls, Lakes and River with tribal
          culture.There are lots of tourist place in Bandarban. Such as Meghla
          and Nilachal, Upabon Parjatan Spot. Winter season is the best time to
          visit Bandarban. But in the rainy season the waterfall of Bandarban
          become robust and traveler will see the most attractive glance of this
          falls. There are some beautiful waterfalls in Bandarban. Such as
          Nafakhum, Jadipai Jhorna, Shoilo Propat and Rijuk Jhorna. If you love
          to climb over-top then Chimbuk hill will be one of the best
          attraction. You will enjoy the journey to Chimbuk by jig jag hilly way
          and if you want to visit more top hill then Tajingdong and Keokradong
          is also there. There are some beautiful natural lakes in Bandarban
          like Bogalakeand Prantik Lake. Boga Lake is the most beautiful natural
          lake in Bangladesh. The color of water of Bogalake is blue and very
          nice. During the winter season there are many tourists visit to Boga
          Lake every year. On the other hand Prantik Lake is also amazing place
          to visit. Prantik Lake is surrounded by many kinds of plants and
          trees. This Lake is an ideal place for travel who likes boating. And
          Finally Sangu River is the complete part of the natural beauty of
          Bandarban. Sangu River is flowing through the hills thousands of
          years. Besides there are more beautiful place in Bandarban for visit.
          Bandarban town is small town but there are many incredible place and
          tourist spot to visit Bandarban. There are many hotels, motels and
          nice hill resorts in Bandarban. Some resorts are situated on a hilltop
          and has a spectacular view. The more adventurous travelers can stay
          these resorts. Traveler will find lots of natural beauties in
          Bandarban in Bangladesh. So welcome to all travelers to visit
          Bandarban and you will get all travel information from BandarbanTours.
        </h3>
      </div>
      <Sidebar />
    </div>
  );
};

export default Page;
