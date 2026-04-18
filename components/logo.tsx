import { Cpu, GraduationCap } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-premium">
      <Cpu className="h-4 w-4" />
      <GraduationCap className="absolute -top-1 -right-1 h-3 w-3" />
    </div>
    <span className="font-semibold tracking-tight">StudyTech Advisor</span>
  </div>
);
