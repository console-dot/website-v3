import React, { useState, useEffect } from "react";
import {
  IconBg,
  S1Icon,
  S2Icon,
  S3Icon,
  ourserviceshover,
} from "../../assets/images";
import useIsMobile from "../../utils/hooks/useIsMobile";

const cards = [
  {
    text: "Discover the essence of customization with Consoledot's Custom Software Development services. Our seasoned developers collaborate closely with you, decoding the intricacies of your business requirements.",
    ServiceType: "Custom Software Development",
    img: S1Icon,
  },
  {
    text: "In the fast-paced digital landscape, staying ahead requires not just innovation but strategic insight. Consoledot introduces a unique service - Product Research. We delve deep into markets, understand your client base, and pave the road map for software development that guarantees success.",
    ServiceType: "Product Research Services",
    img: S2Icon,
  },
  {
    text: "Our Web Development services go beyond mere website creation; we embark on a journey to craft immersive digital experiences. From responsive designs to seamless user interfaces, our team ensures that your online presence captivates and engages, leaving a lasting impression on your audience.",
    ServiceType: "Web App Development",
    img: S3Icon,
  },
  {
    text: "Consoledot's Mobile App Development services bring your business to the forefront of users' daily lives. Whether you're targeting iOS, Android, or both, our expert team crafts mobile solutions that drive engagement and elevate user satisfaction.",
    ServiceType: "Mobile App development",
    img: S1Icon,
  },
  {
    text: "At ConsoleDot, we believe in the transformative power of blockchain. Our Blockchain Development services aren't just about technology; they're about reshaping industries, enhancing security, and providing unparalleled transparency. Choose ConsoleDot for innovative solutions that redefine the way you do business.",
    ServiceType: "Blockchain Development Solutions",
    img: S1Icon,
  },
  {
    text: "Welcome to GenAi by ConsoleDot, where artificial intelligence meets innovation. We offer more than just AI development; we provide transformative solutions that harness the power of machine learning, natural language processing, and computer vision to propel your business into the future.",
    ServiceType: "Artificial Intelligence",
    img: S1Icon,
  },
  {
    text: "Welcome to the future of immersive technology with ConsoleDot's AR/VR solutions. We don't just develop applications; we create experiences that transcend reality. Elevate your business with augmented and virtual reality that captivates your audience, enhances engagement, and sets you apart from the competition.",
    ServiceType: "AR/VR service",
    img: S1Icon,
  },
  {
    text: "Welcome to ConsoleDot's UI/UX design studio, where every pixel tells a story. Elevate your digital presence with user-centric designs that not only captivate your audience but also drive meaningful engagement. Choose ConsoleDot for UI/UX solutions that blend aesthetics with functionality, creating seamless and delightful user experiences",
    ServiceType: "Ui/UX service",
    img: S1Icon,
  },
  {
    text: "Welcome to ConsoleDot! Supercharge your online presence with our top-tier digital marketing services. We specialize in SEO, social media marketing, content creation, and PPC campaigns. Our innovative strategies are designed to drive traffic, increase engagement, and boost conversions. Take your business to the next level with ConsoleDot.",
    ServiceType: "Digital Markiting",
    img: S1Icon,
  },
];

export const ServicesAllCard = () => {
  const isMobile = useIsMobile();
  const [visibleCards, setVisibleCards] = useState(isMobile ? 5 : cards.length);

  useEffect(() => {
    setVisibleCards(isMobile ? 5 : cards.length);
  }, [isMobile]);

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) =>
      Math.min(prevVisibleCards + 5, cards.length)
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cards.slice(0, visibleCards).map((d, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center justify-center relative group border-b-4 border-custom-purple"
            style={{ height: "400px" }}
          >
            {/* Hover image */}
            <div className="absolute w-full h-full rounded-lg bg-custom-blue opacity-0 transition-opacity duration-300 group-hover:opacity-90">
              <img
                src={ourserviceshover}
                alt="hover image"
                className="absolute rounded-lg h-full w-full opacity-0 group-hover:opacity-100"
              />
            </div>

            {/* Icon background and icon */}
            <div
              className="relative flex items-center justify-center mb-4"
              style={{ height: "23%" ,width: "30%" }}
            >
              <img
                src={IconBg}
                alt="background"
                className="absolute w-full h-full object-cover"
              />
              <img
                src={d.img}
                alt="icon"
                className="relative w-1/2 h-1/2 object-cover"
              />
            </div>

            {/* Service type */}
            <p
              className="text-gray-800 font-bold z-10 group-hover:text-white text-center"
              style={{ height: "10%" }}
            >
              {d.ServiceType}
            </p>

            {/* Text description */}
            <p
              className="text-custom-grey text-justify z-10 group-hover:text-white "
              style={{ height: "60%", overflowY: "clip" }}
            >
              {d.text}
            </p>
          </div>
        ))}
      </div>
      {isMobile && visibleCards < cards.length && (
        <div className="w-full flex justify-center mt-4">
          <button
            className="bg-custom-purple text-white px-4 py-2 rounded-md"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
