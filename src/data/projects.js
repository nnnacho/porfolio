import NETIcon from "../components/icons/.NET.astro";
import TailwindIcon from "../components/icons/TailwindCss.astro";
import SqlSeverIcon from "../components/icons/SqlServer.astro";
import JavaScript from "../components/icons/JavaScript.astro";
const TAGS = {
    NET: {
      name: ".NET",
      class: "bg-purple-500 text-white",
      icon: NETIcon,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003180] text-white",
      icon: TailwindIcon,
    },
    SqlServer: {
      name: "Sql Server",
      class: "bg-gray-600 text-gray-100",
      icon: SqlSeverIcon,
    },
    JavaScript: {
      name: 'JavaScript',
      class: 'bg-yellow-500 text-gray-800',
      icon: JavaScript,
    }
  };
export const PROJECTS = [
    {
      id:'gestor-escolar',
      tittle: "Sistema de Gestión Educativa",
      description:
        "Proyecto realizado con la arquitectura MVC en ASP.NET, Las principales funcionalidades del sistema son el ingreso de datos y la modificación de estos mediante formularios.",
      descriptioncomplete: "Desarrollé una aplicación web eficiente para optimizar la gestión administrativa del establecimiento, abarcando diversas áreas como el registro y actualización de datos. Implementé un mecanismo para el seguimiento de atrasos estudiantiles, permitiendo supervisar la asistencia. La aplicación también incorpora un sistema integral de permisos administrativos para el personal, agilizando su solicitud y registro, mejorando la eficiencia y transparencia.",
      link: "http://ignacioarmijo-001-site1.anytempurl.com/",
      github: "https://github.com/nnnacho/LiceoSDL",
      image: "/imgs/GestorEscolar.webp",
      image2: "/imgs/test.webp",
      company: "Liceo Saltos Del Laja",
      tags: [TAGS.NET, TAGS.TAILWIND, TAGS.SqlServer, TAGS.JavaScript],
    }, 
  ];