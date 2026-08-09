import dell from '../assets/partners/dell.svg?raw';
import microsoft from '../assets/partners/microsoft.svg?raw';
import redhat from '../assets/partners/redhat.svg?raw';
import veeam from '../assets/partners/veeam.svg?raw';
import vmware from '../assets/partners/vmware.svg?raw';

export interface Partner {
  /** Название бренда: не переводится, одинаково во всех локалях. */
  name: string;
  /** Inline-SVG логотипа, монохромный, наследует цвет через currentColor. */
  logo: string;
  /** Фирменный цвет бренда — подсвечивается при наведении. */
  color: string;
  /**
   * Высота бокса логотипа в пикселях. У всех логотипов viewBox 24×24, но
   * словесные знаки (Veeam, VMware) занимают внутри него узкую полосу и в
   * одинаковом боксе выглядят втрое мельче значков. Высота подобрана так,
   * чтобы ряд читался оптически ровным.
   */
  size: number;
}

export const partners: Partner[] = [
  { name: 'Red Hat', logo: redhat, color: '#EE0000', size: 40 },
  { name: 'Microsoft', logo: microsoft, color: '#00A4EF', size: 32 },
  { name: 'Veeam', logo: veeam, color: '#00B336', size: 104 },
  { name: 'VMware', logo: vmware, color: '#607078', size: 96 },
  { name: 'Dell', logo: dell, color: '#007DB8', size: 44 },
];
