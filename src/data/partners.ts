import aws from '../assets/partners/aws.svg?raw';
import dell from '../assets/partners/dell.svg?raw';
import microsoft from '../assets/partners/microsoft.svg?raw';
import redhat from '../assets/partners/redhat.svg?raw';
import veeam from '../assets/partners/veeam.svg?raw';
import vmware from '../assets/partners/vmware.svg?raw';

export interface Partner {
  /** Название бренда: не переводится, одинаково во всех локалях. */
  name: string;
  /** Inline-SVG фирменного логотипа в оригинальных цветах. */
  logo: string;
  /**
   * Высота логотипа в пикселях. Пропорции знаков сильно разные — от вытянутого
   * Veeam (5.5:1) до круглого Dell (1:1), — поэтому единая высота даёт
   * оптически неровный ряд. Значения подобраны так, чтобы знаки читались
   * одинаково крупно.
   */
  height: number;
}

export const partners: Partner[] = [
  { name: 'Red Hat', logo: redhat, height: 34 },
  { name: 'Microsoft', logo: microsoft, height: 30 },
  { name: 'Amazon Web Services', logo: aws, height: 46 },
  { name: 'Veeam', logo: veeam, height: 28 },
  { name: 'VMware', logo: vmware, height: 30 },
  { name: 'Dell', logo: dell, height: 52 },
];
