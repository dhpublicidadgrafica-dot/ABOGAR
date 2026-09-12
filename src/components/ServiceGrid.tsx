import React from 'react';
import { ServiceArea } from '../types';
import { ServiceCard } from './ServiceCard';

interface ServiceGridProps {
  services: ServiceArea[];
  limit?: number;
  buttonLabel?: string;
  className?: string;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({
  services,
  limit,
  buttonLabel = 'Conocer más',
  className = '',
}) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${className}`}
      id="services-grid"
    >
      {displayedServices.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          buttonLabel={buttonLabel}
        />
      ))}
    </div>
  );
};
