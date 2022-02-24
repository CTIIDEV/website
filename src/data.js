import bannerTwo from "./assets/banner-2020__two.jpg";
import bannerThree from "./assets/banner-2020__three.jpg";

import footerAAUI from "./assets/footer-aaui.png";
import footerMariBerasuransi from "./assets/footer-mari-berasuransi.png";
import footerOJK from "./assets/footer-ojk.png";

import conch from "./assets/conch.png";
import bankOfChina from "./assets/bank_of_china.gif";
import bankJasaJakarta from "./assets/bank_jasa_jakarta.png";
import bosowa from "./assets/bosowa.png";
import icbc from "./assets/icbc.png";
import evercross from "./assets/evercross.png";
import sucofindo from "./assets/sucofindo.png";
import inulVizta from "./assets/inul_vizta.png";
import telesindo from "./assets/telesindo.png";
import japfa from "./assets/japfa.png";
import cosl from "./assets/cosl.png";
import malindo from "./assets/malindo.png";

export const header = [
  {
    title: "Home",
    link: "/",
    children: [],
  },
  {
    title: "Products",
    link: "#",
    children: [
      {
        title: "Personal Accident",
        link: "/products/personal-accident",
      },
      {
        title: "Housing Insurance",
        link: "/products/housing",
      },
      {
        title: "Motor Vehicle Insurance",
        link: "/products/motor-vehicle",
      },
      {
        title: "Travel Insurance",
        link: "/products/travel",
      },
    ],
  },
  {
    title: "Claim",
    link: "#",
    children: [
      {
        title: "Claiming Procedure",
        link: "/claim/procedure",
      },
      {
        title: "Motor Vehicle Claim Forms",
        link: "/claim/motor-vehicle-form",
      },
      {
        title: "Report Claim Forms",
        link: "/claim/report-claim-form",
      },
    ],
  },
  {
    title: "Agency",
    link: "#",
    children: [
      {
        title: "General Agent",
        link: "/agency/general-agent",
      },
      {
        title: "LifePro Agent",
        link: "/agency/lifepro-agent",
      },
    ],
  },
  {
    title: "News",
    link: "/news",
    children: [],
  },
  {
    title: "About Us",
    link: "#",
    children: [
      {
        title: "Company Profile",
        link: "/about/company-profile",
      },
      {
        title: "Orgnanizational Chart",
        link: "/about/organizational-chart",
      },
      {
        title: "Financial Report",
        link: "/about/financial-report",
      },
      {
        title: "Policy",
        link: "/about/policy",
      },
    ],
  },
  {
    title: "Contact Us",
    link: "/contact-us",
    children: [],
  },
  {
    title: "Login",
    link: "/login",
    children: [],
  },
];

export const banner = [{ url: bannerTwo }, { url: bannerThree }];

export const home__services = {
  title: "China Taiping Insurance Indonesia",
  subtitle: "Manage Your Risks, Enjoy Taiping Services",
  services: [
    {
      title: "Housing Insurance",
      img: "http://45.64.99.135/storage/app/media/rumah.png",
      url: "/products/housing",
    },
    {
      title: "Vehicle Insurance",
      img: "http://45.64.99.135/storage/app/media/mobil.png",
      url: "/products/motor-vehicle",
    },
    {
      title: "Personal Accident",
      img: "http://45.64.99.135/storage/app/media/PA.png",
      url: "/products/personal-accident",
    },
    {
      title: "Travel Insurance",
      img: "http://45.64.99.135/storage/app/media/travel.png",
      url: "/products/travel",
    },
  ],
};

export const home__video = {
  title: "About China Taiping",
  url: "https://youtu.be/lWZrs0ccTUw",
};

export const home__customers = {
  title: "Our Valued Customers",
  children: [
    conch,
    bankOfChina,
    bankJasaJakarta,
    bosowa,
    icbc,
    evercross,
    sucofindo,
    inulVizta,
    telesindo,
    japfa,
    cosl,
    malindo,
  ],
};

export const footer = [
  {
    title: "Products",
    children: [
      { title: "Personal Accident", link: "/products/personal-accident" },
      { title: "Housing Insurance", link: "/products/housing" },
      { title: "Motor Vehicle", link: "/products/motor-vehicle" },
      { title: "Travel Insurance", link: "/products/travel" },
      { title: "Marine Hull", link: "" },
      { title: "Marine Cargo", link: "" },
    ],
  },
  {
    title: "Claims",
    children: [
      { title: "Claiming Procedure", link: "/claim/procedure" },
      { title: "Motor Vehicle Claim Forms", link: "/claim/motor-vehicle-form" },
      { title: "Report Claim Forms", link: "/claim/report-claim-form" },
    ],
  },
  {
    title: "About Us",
    children: [
      { title: "Our Profile", link: "/about/company-profile" },
      { title: "Organiztional Chart", link: "/about/organizational-chart" },
      { title: "Financial Report", link: "/about/financial-report" },
      { title: "Policy", link: "/about/policy" },
    ],
  },
];

export const footer__organization = [
  {
    url: footerMariBerasuransi,
  },
  {
    url: footerOJK,
  },
  {
    url: footerAAUI,
  },
];

export const productTravel__asean = [
  {
    duration: "1-3",
    individu: "Rp. 84,500.00",
    keluarga: "Rp. 182,000.00",
  },
  {
    duration: "4-6",
    individu: "Rp. 136,500.00",
    keluarga: "Rp. 299,000.00",
  },
  {
    duration: "7-8",
    individu: "Rp. 221,000.00",
    keluarga: "Rp. 481,000.00",
  },
  {
    duration: "9-10",
    individu: "Rp. 305,500.00",
    keluarga: "Rp. 663,000.00",
  },
  {
    duration: "11-15",
    individu: "Rp. 403,000.00",
    keluarga: "Rp. 897,000.00",
  },
  {
    duration: "16-20",
    individu: "Rp. 494,000.00",
    keluarga: "Rp. 1,066,000.00",
  },
  {
    duration: "21-25",
    individu: "Rp. 546,000.00",
    keluarga: "Rp. 1,196,000.00",
  },
  {
    duration: "26-31",
    individu: "Rp. 572,000.00",
    keluarga: "Rp. 1,261,000.00",
  },
  {
    duration: "1 Minggu Tambahan",
    individu: "Rp. 110,500.00",
    keluarga: "Rp. 247,000.00",
  },
  {
    duration: "Tahunan",
    individu: "Rp. 1,487,200.00",
    keluarga: "Rp. 3,278,600.00",
  },
];

export const productTravel__global_executive = [
  {
    duration: "1-4",
    individu: "Rp. 208,000.00",
    keluarga: "Rp. 494,000.00",
  },
  {
    duration: "5-6",
    individu: "Rp. 344,500.00",
    keluarga: "Rp. 819,000.00",
  },
  {
    duration: "7-8",
    individu: "Rp. 468,000.00",
    keluarga: "Rp. 1,105,000.00",
  },
  {
    duration: "9-10",
    individu: "Rp. 533,000.00",
    keluarga: "Rp. 1,274,000.00",
  },
  {
    duration: "11-15",
    individu: "Rp. 630,500.00",
    keluarga: "Rp. 1,495,000.00",
  },
  {
    duration: "16-20",
    individu: "Rp. 806,000.00",
    keluarga: "Rp. 1,924,000.00",
  },
  {
    duration: "21-25",
    individu: "Rp. 923,000.00",
    keluarga: "Rp. 2,054,000.00",
  },
  {
    duration: "26-31",
    individu: "Rp. 988,000.00",
    keluarga: "Rp. 2,340,000.00",
  },
  {
    duration: "1 Minggu Tambahan",
    individu: "Rp. 221,000.00",
    keluarga: "Rp. 520,000.00",
  },
  {
    duration: "Tahunan",
    individu: "Rp. 2,173,600.00",
    keluarga: "Rp. 5,616,000.00",
  },
];

export const productTravel__global_standar = [
  {
    duration: "1-4",
    individu: "Rp. 156,000.00",
    keluarga: "Rp. 390,000.00",
  },
  {
    duration: "5-6",
    individu: "Rp. 292,500.00",
    keluarga: "Rp. 650,000.00",
  },
  {
    duration: "7-8",
    individu: "Rp. 409,500.00",
    keluarga: "Rp. 1,014,000.00",
  },
  {
    duration: "9-10",
    individu: "Rp. 494,000.00",
    keluarga: "Rp. 1,170,000.00",
  },
  {
    duration: "11-15",
    individu: "Rp. 578,500.00",
    keluarga: "Rp. 1,365,000.00",
  },
  {
    duration: "16-20",
    individu: "Rp. 682,500.00",
    keluarga: "Rp. 1,560,000.00",
  },
  {
    duration: "21-25",
    individu: "Rp. 864,500.00",
    keluarga: "Rp. 1,885,000.00",
  },
  {
    duration: "26-31",
    individu: "Rp. 890,500.00",
    keluarga: "Rp. 2,210,000.00",
  },
  {
    duration: "1 Minggu Tambahan",
    individu: "Rp. 195,000.00",
    keluarga: "Rp. 325,000.00",
  },
  {
    duration: "Tahunan",
    individu: "Rp. 1,959,100.00",
    keluarga: "Rp. 5,304,000.00",
  },
];

export const financialReport = [
  {
    year: "2009",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202009.pdf",
  },
  {
    year: "2010",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202010.pdf",
  },
  {
    year: "2011",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202011.pdf",
  },
  {
    year: "2012",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202012.pdf",
  },
  {
    year: "2013",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202013.pdf",
  },
  {
    year: "2014",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202014.pdf",
  },
  {
    year: "2015",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202015.pdf",
  },
  {
    year: "2016",
    quarter: "Q1",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202016-Q1.pdf",
  },
  {
    year: "2016",
    quarter: "Q2",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202016-Q2.pdf",
  },
  {
    year: "2016",
    quarter: "Q3",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202016-Q3.pdf",
  },
  {
    year: "2016",
    quarter: "Q4",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202016-Q4.pdf",
  },
  {
    year: "2016",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202016.pdf",
  },
  {
    year: "2017",
    quarter: "Q1",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202017-Q1.pdf",
  },
  {
    year: "2017",
    quarter: "Q2",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202017-Q2.pdf",
  },
  {
    year: "2017",
    quarter: "Q3",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202017-Q3.pdf",
  },
  {
    year: "2017",
    quarter: "Q4",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202017-Q4.pdf",
  },
  {
    year: "2017",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202017.pdf",
  },
  {
    year: "2018",
    quarter: "Q1",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202018-Q1.pdf",
  },
  {
    year: "2018",
    quarter: "Q2",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202018-Q2.pdf",
  },
  {
    year: "2018",
    quarter: "Q3",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202018-Q3.pdf",
  },
  {
    year: "2018",
    quarter: "Q4",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202018-Q4.pdf",
  },
  {
    year: "2018",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202018.pdf",
  },
  {
    year: "2019",
    quarter: "Q1",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202019-Q1.pdf",
  },
  {
    year: "2019",
    quarter: "Q2",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202019-Q2.pdf",
  },
  {
    year: "2019",
    quarter: "Q3",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202019-Q3.pdf",
  },
  {
    year: "2019",
    quarter: "Q4",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202019-Q4.pdf",
  },
  {
    year: "2019",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202019.pdf",
  },
  {
    year: "2020",
    quarter: "Q1",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202020-Q1.pdf",
  },
  {
    year: "2020",
    quarter: "Q2",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202020-Q2.pdf",
  },
  {
    year: "2020",
    quarter: "Q3",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202020-Q3.pdf",
  },
  {
    year: "2020",
    quarter: "Q4",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202020-Q4.pdf",
  },
  {
    year: "2020",
    quarter: "Annual",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202020.pdf",
  },
  {
    year: "2021",
    quarter: "Q1",
    link: "https://www.id.cntaiping.com/pdf/lapkeu/Lap%20Keuangan%202021-Q1.pdf",
  },
];

export const policy = [
  {
    policy: "Polis Standar Asuransi Kebakaran",
    link: "https://www.id.cntaiping.com/pdf/polis/Polis-Standar-AsuransiI-Kebakaran-Indonesia.pdf",
  },
  {
    policy: "Polis Standar Asuransi Kendaraan Bermotor",
    link: "https://www.id.cntaiping.com/pdf/polis/Polis-Standar-Asuransi-Kendaraan-Bermotor-Indonesia.pdf",
  },
  {
    policy: "Polis Standar Asuransi Kecelakaan Diri",
    link: "https://www.id.cntaiping.com/pdf/polis/Polis-Standar-Asuransi-Kecelakaan-Diri-Indonesia.pdf",
  },
  {
    policy: "Polis Standar Asuransi Gempa Bumi",
    link: "https://www.id.cntaiping.com/pdf/polis/Polis-Standar-Asuransi-Gempa-Bumi-Indonesia.pdf",
  },
  {
    policy: "Polis Standar Asuransi Pengangkutan Barang",
    link: "https://www.id.cntaiping.com/pdf/polis/Polis-Standar-Asuransi-Pengangkutan-Barang-Indonesia.pdf",
  },
  {
    policy: "Polis Standar Asuransi Pengiriman Uang",
    link: "https://www.id.cntaiping.com/pdf/polis/Polis-Standar-Asuransi-Pengiriman-Uang-Indonesia.pdf",
  },
  {
    policy: "Polis Standar Asuransi Penyimpanan",
    link: "https://www.id.cntaiping.com/pdf/polis/Polis-Standar-Asuransi-Penyimpanan-Indonesia.pdf",
  },
  {
    policy: "Polis Standar Asuransi Proyek Konstruksi",
    link: "https://www.id.cntaiping.com/pdf/polis/Polis-Standar-Asuransi-Proyek-Kontruksi-Indonesia.pdf",
  },
  {
    policy: "Polis Standar Asuransi Terorisme dan Sabotase",
    link: "https://www.id.cntaiping.com/pdf/polis/Polis-Standar-Asuransi-Terorisme-dan-Sabotase-Indonesia.pdf",
  },
];

export const offices = [
  {
    location: "Kota",
    city: "Jakarta",
    building: "Bank Jasa Jakarta Building 3rd Floor",
    street: "Jl. Gajah Mada No. 27 E - F",
    phone: "(62-21) 638 62518 - 638 62519",
    fax: "(62-21) 638 62521",
    email: "kota@id.cntaiping.com",
  },
  {
    location: "Kedoya",
    city: "Jakarta",
    building: "Bank Jasa Jakarta Building 3rd Floor",
    street:
      "Kompleks Sastra Graha Jl. Raya Perjuangan No. 6 Jakarta Barat 11530",
    phone: "(62-21) 536 54104",
    fax: "",
    email: "kedoya@id.cntaiping.com",
  },
  {
    location: "BSD",
    city: "Tangerang",
    building: "Bank Jasa Jakarta Building 2nd Floor",
    street: "Ruko Golden Boulevard, Blok B No. 1 & 2",
    phone: "(62-21) 55699371",
    fax: "(62-21) 55699371",
    email: "bsd@id.cntaiping.com",
  },
  {
    location: "Bandung",
    city: "Bandung",
    building: "Menara BRI Bandung 7th Floor",
    street: "Jl. Asia Afrika No. 57-59, Bandung 40111",
    phone: "(62-22) 421 1076, 421 1077",
    fax: "(62-22) 422 4987",
    email: "bandung@id.cntaiping.com",
  },
  {
    location: "Semarang",
    city: "Semarang",
    building: "Mataram Plaza Blok E-5",
    street: "Jl. MT. Haryono No. 427 - 429, Semarang 50136",
    phone: "(62-24) 358 2782, 358 2783",
    fax: "(62-24) 358 2785",
    email: "semarang@id.cntaiping.com",
  },
  {
    location: "Surabaya",
    city: "Surabaya",
    building: "Gd. Bumi Mandiri 6th Fl.",
    street: "Jl. Basuki Rahmat No. 129 - 137",
    phone: "(62-31) 532 0692",
    fax: "(62-31) 532 0697",
    email: "surabaya@id.cntaiping.com",
  },
  {
    location: "Medan",
    city: "Medan",
    building: "Uniplaza Building, East Tower 4th Floor",
    street: "Jl. MT. Haryono No. A-1 Medan 20231",
    phone: "(62-61) 453 2622 - 453 4399",
    fax: "(62-61) 455 3929",
    email: "medan@id.cntaiping.com",
  },
];

export const news = [
  {
    img: "https://www.id.cntaiping.com/assets/img/附件1：%20印尼《投资人》杂志颁发奖项图片.jpeg",
    title: "This is the Title",
    date: "20-02-2020",
    content:
      "Lorem Ipsum Si Amet. Lorem Ipsum si Amet. Lorem Ispum si Amet. Lorem Ipsum Si Amet. Lorem Ipsum si Amet. Lorem Ispum si Amet.",
  },
  {
    img: "https://www.id.cntaiping.com/assets/img/DSC00136.JPG",
    title: "This is the Title",
    date: "20-02-2020",
    content:
      "Lorem Ipsum Si Amet. Lorem Ipsum si Amet. Lorem Ispum si Amet. Lorem Ipsum Si Amet. Lorem Ipsum si Amet. Lorem Ispum si Amet.",
  },
  {
    img: "https://www.id.cntaiping.com/assets/img/TPI03119.JPG",
    title: "This is the Title",
    date: "20-02-2020",
    content:
      "Lorem Ipsum Si Amet. Lorem Ipsum si Amet. Lorem Ispum si Amet. Lorem Ipsum Si Amet. Lorem Ipsum si Amet. Lorem Ispum si Amet.",
  },
  {
    img: "https://www.id.cntaiping.com/assets/img/move%20png.png",
    title: "This is the Title",
    date: "20-02-2020",
    content:
      "Lorem Ipsum Si Amet. Lorem Ipsum si Amet. Lorem Ispum si Amet. Lorem Ipsum Si Amet. Lorem Ipsum si Amet. Lorem Ispum si Amet.",
  },
];
