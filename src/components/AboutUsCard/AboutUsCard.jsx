import React, { useState } from "react";
import user from "../../assets/images/user.png";
import { cardsymbol } from "../../assets/images";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import useIsMobile from "../../utils/hooks/useIsMobile";

const Card = ({ symbol, text, name, designation }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center"
      style={{ width: "360px", height: "438px" }}
    >
      <div className="text-9xl mb-4">
        <img
          src={cardsymbol}
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-custom-grey text-center mb-4">{text}</p>
      <div className="rounded-full overflow-hidden w-24 h-24 mb-2">
        <img src={user} alt="Profile" className="w-full h-full object-cover" />
      </div>
      <p className="text-gray-800 font-bold">{name}</p>
      <p className="text-custom-purple font-lato">{designation}</p>
    </div>
  );
};

const CardArray = () => {
  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useIsMobile();

  const cards = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
      name: "John Doe",
      designation: "Dev Engineer",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
      name: "Jane Smith",
      designation: "HR Head",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo a elit consequat ultricies. Nam rutrum nisi vitae diam laoreet, eget malesuada elit tincidunt.",
      name: "Alice Johnson",
      designation: "BD Expert",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus augue sit amet quam aliquet, non vestibulum risus condimentum. Proin luctus semper ligula, vel molest.",
      name: "Bob Smith",
    },
  ];

  const handleNext = () => {
    if (startIndex < cards.length - (isMobile ? 1 : 3)) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`grid grid-cols-1 ${
          isMobile
            ? "xs:grid-cols-1 sm:grid-cols-1"
            : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        } gap-6`}
      >
        {cards
          .slice(startIndex, startIndex + (isMobile ? 1 : 3))
          .map((card, index) => (
            <Card
              key={index}
              text={card.text}
              name={card.name}
              designation={card.designation}
            />
          ))}
      </div>
      {cards.length > (isMobile ? 1 : 3) && (
        <div className="flex justify-end mt-4">
          <button onClick={handlePrevious} className="mr-2">
            <IoIosArrowDropleft className="text-custom-purple text-3xl" />
          </button>
          <button onClick={handleNext}>
            <IoIosArrowDropright className="text-custom-purple text-3xl" />
          </button>
        </div>
      )}
      <div className="lg:pt-2 lg:pl-96 lg:ml-96 xs:pt-1 sm:pt-1 md:pt-2 md:pl-80 md:ml-80 lg:mt-[-4%]">
        <button
          type="button"
          className="text-white px-5 py-2.5  w-[182px] h-[54px] bg-custom-purple rounded-full"
        >
          <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
            View All
          </p>
        </button>
      </div>
    </div>
  );
};

export default CardArray;

// import React, { useState } from "react";
// import user from "../../assets/images/user.png";
// import { cardsymbol } from "../../assets/images";
// import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
// import useIsMobile from "../../utils/hooks/useIsMobile";

// const Card = ({ symbol, text, name }) => {
//   return (
//     <div
//       className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center"
//       style={{ width: "360px", height: "438px" }}
//     >
//       <div className="text-9xl mb-4">
//         <img
//           src={cardsymbol}
//           alt="profile"
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <p className="text-gray-700 text-center mb-4">{text}</p>
//       <div className="rounded-full overflow-hidden w-24 h-24 mb-4">
//         <img src={user} alt="Profile" className="w-full h-full object-cover" />
//       </div>
//       <p className="text-gray-800">{name}</p>
//     </div>
//   );
// };

// const CardArray = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const isMobile = useIsMobile();

//   const cards = [
//     {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
//       name: "John Doe",
//     },
//     {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
//       name: "Jane Smith",
//     },
//     {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget leo a elit consequat ultricies. Nam rutrum nisi vitae diam laoreet, eget malesuada elit tincidunt.",
//       name: "Alice Johnson",
//     },
//     {
//       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus augue sit amet quam aliquet, non vestibulum risus condimentum. Proin luctus semper ligula, vel molest.",
//       name: "Bob Smith",
//     },
//   ];

//   const handleNext = () => {
//     if (startIndex < cards.length - (isMobile ? 1 : 3)) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center h-screen">
//       <div
//         className={`grid grid-cols-1 ${
//           isMobile
//             ? "xs:grid-cols-1 sm:grid-cols-1"
//             : "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
//         } gap-6`}
//       >
//         {cards
//           .slice(startIndex, startIndex + (isMobile ? 1 : 3))
//           .map((card, index) => (
//             <Card key={index} text={card.text} name={card.name} />
//           ))}
//       </div>
//       {
//         <div className="flex justify-end mt-4">
//           {/* <button onClick={handlePrevious} className="mr-2">
//             <IoIosArrowDropleft className="text-custom-purple text-3xl" />
//           </button>
//           <button onClick={handleNext}>
//             <IoIosArrowDropright className="text-custom-purple text-3xl" />
//           </button> */}
//           {cards?.map((card, index) => (
//             <p>---</p>
//           ))}
//         </div>
//       }
//       <div className="lg:pt-2 lg:pl-96 lg:ml-96 xs:pt-1 sm:pt-1 md:pt-2 md:pl-80 md:ml-80 lg:mt-[-3.3%]">
//         <button
//           type="button"
//           className="text-white px-5 py-2.5  w-[182px] h-[54px] bg-custom-purple rounded-full"
//         >
//           <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
//             View All
//           </p>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardArray;
