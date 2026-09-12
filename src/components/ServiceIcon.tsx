import React from 'react';
import {
  Scale,
  Briefcase,
  Users,
  ShieldAlert,
  Heart,
  Landmark,
  Calculator,
  Building2,
  Lightbulb,
  Shield,
  FileText,
  HeartHandshake,
  Award,
  Eye,
  Lock,
  ShieldCheck,
  GraduationCap,
  UserCheck,
  Compass,
  Globe,
  Gavel,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Scale':
      return <Scale className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'Heart':
      return <Heart className={className} />;
    case 'Landmark':
      return <Landmark className={className} />;
    case 'Calculator':
      return <Calculator className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Lightbulb':
      return <Lightbulb className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Eye':
      return <Eye className={className} />;
    case 'Lock':
      return <Lock className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'UserCheck':
      return <UserCheck className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Gavel':
      return <Gavel className={className} />;
    case 'MessageSquare':
    case 'MessageSquareCheck':
      return <MessageSquare className={className} />;
    default:
      return <Scale className={className} />;
  }
};

