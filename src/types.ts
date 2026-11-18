import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
  icon?: React.ReactNode;
}
