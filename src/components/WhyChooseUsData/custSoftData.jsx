import React from 'react';
import { CloudCompIcon, ERPIcon, MvpIcon } from '../../assets/icons';

const whyChooseDataCustomSoft = [
  {
    id: 1,
    title: "ConsoleDot ERP",
    subHeading: "Precision in Every Process",
    icon: <ERPIcon />,
    description:
      "Experience a new era of operational efficiency with ConsoleDot ERP. We recognize that your business is unique, and so are your needs. Our ERP solutions are meticulously crafted to seamlessly integrate with your workflows, offering a unified platform for optimized collaboration and data-driven decision-making.",
  },
  {
    id: 2,
    title: "SaaS by ConsoleDot",
    subHeading: "Innovation Meets Seamless Integration",
    icon: <CloudCompIcon />,
    description:
      "Embrace a future where innovation meets convenience with ConsoleDot SaaS solutions. No more installations, just accessibility, scalability, and security. Our SaaS offerings are engineered to adapt to your business growth, providing a flexible and cost-effective way to access cutting-edge software without the headaches.",
  },
  {
    id: 3,
    title: "ConsoleDot MVP",
    subHeading: "Rapid Innovation, Your Way",
    icon: <MvpIcon />,
    description:
      "Time is of the essence, and we get it. ConsoleDot MVP development allows you to test your ideas swiftly, gather user feedback, and iterate in real-time. We prioritize essential features, ensuring minimal time-to-market while maintaining the agility to refine and enhance based on user experience.",
  },
];

const WhyChooseCustomSoft = () => {
  return (
    <div>
      {whyChooseDataCustomSoft.map(item => (
        <div key={item.id}>
          <div>{item.icon}</div>
          <h3>{item.title}</h3>
          <h4>{item.subHeading}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseCustomSoft;
