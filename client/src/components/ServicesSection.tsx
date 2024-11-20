import React from 'react';
import { FaPlane, FaRetweet as FaReturn, FaServicestack } from 'react-icons/fa';

const ServicesSection: React.FC = () => {
  const services = [
    {
      Icon: FaPlane,
      title: 'Free Shipping',
      description: 'Over $30 for US',
    },
    {
      Icon: FaReturn,
      title: 'Returns & Refunds',
      description: 'Within 30 days',
    },
    {
      Icon: FaServicestack,
      title: 'Customer Service',
      description: 'Chat & Mails',
    },
  ];

  return (
    <section className="w-full mt-6">
      <div className="overflow-x-auto flex justify-center items-center gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-lg bg-white"
          >
            <service.Icon className="text-xl mb-2 text-primary" />
            <p className="text-sm md:text-lg font-medium">{service.title}</p>
            <p className="text-xs md:text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
