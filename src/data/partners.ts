import aws from '../assets/partners/aws.svg?raw';
import dell from '../assets/partners/dell.svg?raw';
import microsoft from '../assets/partners/microsoft.svg?raw';
import redhat from '../assets/partners/redhat.svg?raw';
import unio24 from '../assets/partners/unio24.svg?raw';
import veeam from '../assets/partners/veeam.svg?raw';
import vmware from '../assets/partners/vmware.svg?raw';
import awsUrl from '../assets/partners/aws.svg?url';
import dellUrl from '../assets/partners/dell.svg?url';
import microsoftUrl from '../assets/partners/microsoft.svg?url';
import redhatUrl from '../assets/partners/redhat.svg?url';
import unio24Url from '../assets/partners/unio24.svg?url';
import veeamUrl from '../assets/partners/veeam.svg?url';
import vmwareUrl from '../assets/partners/vmware.svg?url';

export interface Partner {
  /** Название бренда: не переводится, одинаково во всех локалях. */
  name: string;
  /** Inline-SVG фирменного логотипа в оригинальных цветах. */
  logo: string;
  /** Тот же логотип файлом — для вариантов, которые подключают его через <img>. */
  logoUrl: string;
  /**
   * Высота логотипа в пикселях. Пропорции знаков сильно разные — от вытянутого
   * Veeam (5.5:1) до круглого Dell (1:1), — поэтому единая высота даёт
   * оптически неровный ряд. Значения подобраны так, чтобы знаки читались
   * одинаково крупно.
   */
  height: number;
  /** Сайт партнёра. Если задан, логотип становится ссылкой (открывается в новой вкладке). */
  url?: string;
}

export const partners: Partner[] = [
  { name: 'Red Hat', logo: redhat, logoUrl: redhatUrl, height: 34 },
  { name: 'Microsoft', logo: microsoft, logoUrl: microsoftUrl, height: 30 },
  { name: 'Amazon Web Services', logo: aws, logoUrl: awsUrl, height: 46 },
  { name: 'Veeam', logo: veeam, logoUrl: veeamUrl, height: 28 },
  { name: 'VMware', logo: vmware, logoUrl: vmwareUrl, height: 30 },
  { name: 'Dell', logo: dell, logoUrl: dellUrl, height: 52 },
  { name: 'UNIO24', logo: unio24, logoUrl: unio24Url, height: 30, url: 'https://unio24.com/' },
];
