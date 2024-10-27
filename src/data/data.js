import logo from './../assets/images/logo1.jpg';
import pl1 from './../assets/images/pl1.jpeg'
import pl2 from './../assets/images/pl2.jpeg'
import pl3 from './../assets/images/pl3.jpeg'
import pl4 from './../assets/images/pl4.jpeg'
import pl5 from './../assets/images/pl5.jpeg'
import pl6 from './../assets/images/pl6.jpeg'
import pl7 from './../assets/images/pl7.jpeg'
import pl8 from './../assets/images/pl8.jpeg'
import pl9 from './../assets/images/pl9.jpeg'
import pl10 from './../assets/images/pl10.jpeg'
import pl13 from './../assets/images/pl13.jpeg'
import pl14 from './../assets/images/pl14.jpeg'
import pl15 from './../assets/images/pl15.jpeg'
import pl16 from './../assets/images/pl16.jpeg'
import pl17 from './../assets/images/pl17.jpeg'
import pl18 from './../assets/images/pl18.jpeg'
import pl19 from './../assets/images/pl19.jpeg'
import pl21 from './../assets/images/pl21.png'
import pl22 from './../assets/images/pl22.png'
import pl23 from './../assets/images/pl23.png'
import pl24 from './../assets/images/pl24.png'
import pl25 from './../assets/images/pl25.png'
import pl26 from './../assets/images/pl26.jpeg'
import video from './../assets/images/video1.mp4'
import audioFile from './../assets/images/podcats1.mp3'
import animacion from './../assets/images/animacion2d.gif'
import gitlab from './../assets/images/gitlab.svg'
import instagram from './../assets/images/instagram.svg';

export const HeaderData = {
    logo: {
        title: 'UCC',
        link: 'index.html',
        icon: logo,
      },
      nav: [
        {
          id: 1,
          title: 'Inicio',
          link: '#inicio',
        },
        {
          id: 2,
          title: 'Imagen IA',
          link: '#imageIA',
        },
        {
          id: 3,
          title: 'Video IA',
          link: '#videoIA',
        },
      ],
      social: [
        {
          id: 1,
          title: 'GitLab',
          link: 'https://gitlab.com/dashboard/projects',
          icon: gitlab,
        },
        {
          id: 2,
          title: 'Instagram',
          link: 'https://www.instagram.com/',
          icon: instagram,
        },
      ],
};

export const HeroData = {
  title: 'Principios Fotograficos\n plantas y flores para interiores',
  subTitle:
    'Los principios de diseño en la fotografía son conceptos fundamentales que ayudan a crear imágenes visualmente atractivas y coherentes. A continuación, te explico algunos de los más importantes:',
  btnTextDownloadCv: 'Continua abajo',
  iconHero: pl15,
  linkUno: '#contacto',
  audioUrl: audioFile,
};

export const ServiceData = {
  header: {
    title: 'Técnica por Iluminación',
    subTitle:
      'Con esta Técnica aprovechamos la luz natural indirecta, para evitar sombras duras. Esto resaltará la textura y los colores de las plantas y flores sin crear contrastes excesivos. Como por ejemplo la luz del amanecer o el atardecer (hora dorada), que aporta tonos cálidos y resalta los detalles de las plantas o la luz detrás de las plantas para crear un brillo en los bordes de las hojas o flores, resaltando sus contornos.',
  },
  items: [
    {
      id: 1,
      icon: pl1,
    },
    {
      id: 2,
      icon: pl2,
    },
    {
      id: 3,
      icon: pl3,
    },
    {
      id: 4,
      icon: pl4,
    },
  ],
};

export const ExperienceData = {
  header: {
    title: 'Técnica por Composición',
    subTitle:
      'Usando la regla de los tercios en una cuadrícula de 3x3 se coloca las plantas o flor en uno de los puntos de intersección para lograr una composición equilibrada. Se usa el espacio vacío alrededor de las plantas para hacer que resalten más. Esto crea una sensación de minimalismo y da protagonismo al sujeto',
  },
  items: [
    {
      id: 1,
      icon: pl5,
    },
    {
      id: 2,
      icon: pl6,
    },
    {
      id: 3,
      icon: pl7,
    },
    {
      id: 4,
      icon: pl8,
    },
  ],
  
};

export const ProjectData = {
  header: {
    title: 'Técnica Enfoque y Profundidad de campo',
    subTitle:
      'Se Utiliza el enfoque manual en la cámara para centrarce en una parte específica de la planta o flor. Esto creará un efecto de desenfoque suave en el fondo (bokeh), destacando el sujeto. Como por ejemplo el modo retrato que desenfoca el fondo mientras enfoca el sujeto.',
  },
  items: [
    {
      id: 1,
      icon: pl9,
    },
    {
      id: 2,
      icon: pl10,
    },
    {
      id: 2,
      icon: pl19,
    },
  ],
  
};

export const HobbiesData = {
  header: {
    title: 'Angulos Creativos',
    subTitle:
      'Usar varias perspectivas por ejemplo una Perspectiva baja en un ángulo bajo para mostrar las plantas desde una vista "de abajo hacia arriba", hace destacar las formas y haciéndolas parecer más grandes o majestuosas. Tambien con una vista cenital; es decir con una toma desde arriba para captar el patrón de las hojas o flores, lo que da un aspecto gráfico y ordenado. Ó un ángulo ligeramente lateral puede añadir profundidad y dimensión, lo que es útil para mostrar la estructura y los detalles de las plantas.',
  },
  items: [
    {
      id: 1,
      icon: pl13,
    },
    {
      id: 2,
      icon: pl14,
    },
    {
      id: 3,
      icon: pl17,
    },
    {
      id: 4,
      icon: pl18,
    },
  ],
  
};

export const ImagenIaData = {
  header: {
    title: 'Imagenes Con IA',
    subTitle:
      'La inteligencia artificial permite generar imágenes de flores con un nivel de realismo que capta hasta los detalles más sutiles de sus texturas, colores y formas. Esta tecnología permite explorar y recrear con precisión la belleza natural de las flores, haciendo posible apreciar texturas y patrones sin necesidad de una cámara real.',
  },
  items: [
    {
      id: 1,
      icon: pl21,
    },
    {
      id: 2,
      icon: pl22,
    },
    {
      id: 3,
      icon: pl23,
    },
    {
      id: 4,
      icon: pl24,
    },
  ],
  
};

export const TexturaData = {
  header: {
    title: 'Técnica por Texturas',
    subTitle:
      'Esta técnica consiste en capturar detalles como por ejemplo captar la textura de las hojas, las venas de los pétalos o las gotas de agua. Por ejemplo con la opcion Macro de las camaras de celular permite enfoques cercanos para destacar estos detalles tan finos y observar las particulas de agua ó texturas suaves o rugosas en las superficie de los sujetos.',
  },
  items: [
    {
      id: 1,
      icon: pl25,
    },
    {
      id: 2,
      icon: pl26,
    },
  ],
  
};

export const ContactoData = {
  title: 'Video con IA',
  subTitle:
    'La inteligencia artificial permite generar videos realistas que capturan la sensación de movimiento y la interacción de la luz con los objetos, como en una escena donde los rayos de sol entran por una ventana y se reflejan en una habitación. Estos videos generados permiten controlar aspectos como la intensidad de la luz, la dirección de los reflejos y el ritmo del movimiento, logrando una ambientación única que parece capturada por una cámara profesional.',
  videoUrl: video,
};

export const animacionData = {
  animacion2d: animacion,
};