import NETIcon from "../components/icons/NET.astro";
import TailwindIcon from "../components/icons/TailwindCss.astro";
import SqlSeverIcon from "../components/icons/SqlServer.astro";
import JavaScript from "../components/icons/JavaScript.astro";
import AstroIcono from "../components/icons/AstroIcon.astro";
import HTMLIcon from "../components/icons/HTML.astro"
import TypeScriptIcon from "../components/icons/TypeScript.astro"

export const TAGS = {
  TypeScript: {
    name: "TypeScript",
    class: "border border-gray-900 text-[#094067] dark:text-[#fffffe] dark:border-[#ffffe]",
    icon: TypeScriptIcon,
  },
    NET: {
      name: ".NET",
      class: "border border-gray-900 text-[#094067] dark:text-[#fffffe] dark:border-[#fffffe]",
      icon: NETIcon,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "border border-gray-900 text-[#094067] dark:text-[#fffffe] dark:border-[#fffffe]",
      icon: TailwindIcon,
    },
    SqlServer: {
      name: "Sql Server",
      class: "border border-gray-900 text-[#094067] dark:text-[#fffffe] dark:border-[#fffffe]",
      icon: SqlSeverIcon,
    },
    JavaScript: {
      name: 'JavaScript',
      class: 'border border-gray-900 text-[#094067] dark:text-[#fffffe] dark:border-[#fffffe]',
      icon: JavaScript,
    },
    Astro:{
      name: 'Astro',
      class: 'border border-gray-900 text-[#094067] dark:text-[#fffffe] dark:border-[#fffffe]',
      icon: AstroIcono,
    },
    HTML:{
      name: 'HTML 5',
      class: 'border border-gray-900 text-[#094067] dark:text-[#fffffe] dark:border-[#fffffe]',
      icon: HTMLIcon,
    }
  };
export const PROJECTS = [
  {
    id:'gralla',
    tittle:'Gralla',
    description: 'Página web para grabar la videos y audios de la computadora mediante JavaScript',
    descriptioncomplete: 'La idea de este proyecto nace desde la API de MediaStream Recording API, por su facilidad para grabar y descargar videos del usuario, me pareció un proyecto interesante ya que muchas veces tengo que recurrir a un programa de desktop para grabar la pantalla o alguna ventana de mi navegador y con esta API se hace todo mas fácil. En la página se puede grabar la pantalla, audios desde el micrófono, videos de la camara y algunas combinaciones de estas funcionalidades.',
    link: 'https://gralla.vercel.app/',
    github: 'https://github.com/nnnacho/Gralla',
    image: '/imgs/gralla.webp',
    company: 'Proyecto Personal',
    tags: [TAGS.TAILWIND, TAGS.JavaScript, TAGS.Astro, TAGS.TypeScript ]

  },
    {
      id:'gestor-escolar',
      tittle: "Sistema de Gestión Educativa",
      description:
        "Proyecto realizado con la arquitectura MVC en ASP.NET, Las principales funcionalidades del sistema son el ingreso de datos y la modificación de estos mediante formularios.",
      descriptioncomplete: "Desarrollé una aplicación web eficiente para optimizar la gestión administrativa del establecimiento, abarcando diversas áreas como el registro y actualización de datos. Implementé un mecanismo para el seguimiento de atrasos estudiantiles, permitiendo supervisar la asistencia. La aplicación también incorpora un sistema integral de permisos administrativos para el personal, agilizando su solicitud y registro, mejorando la eficiencia y transparencia.",
      link: "http://ignacioarmijo-001-site1.anytempurl.com/",
      github: "https://github.com/nnnacho/LiceoSDL",
      image: "/imgs/GestorEscolar.webp",
      company: "Liceo Saltos Del Laja",
      tags: [TAGS.NET, TAGS.TAILWIND, TAGS.SqlServer, TAGS.JavaScript],
    },
    
    
  ];
  export const TECH = [
    {
      id:'ignacio',
      tags: [TAGS.NET, TAGS.TAILWIND, TAGS.SqlServer, TAGS.JavaScript, TAGS.Astro, TAGS.HTML]
    }
  ]
