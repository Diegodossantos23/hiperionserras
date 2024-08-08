import AgardenHSS450ImageA from "../../../assets/circular-saws-img/agarden-hss/agarden-hss-450x3.0x50x230t/hss-image-without-background/agargen-hss-without-bg.png";
import AgardenHSS450ImageB from "../../../assets/circular-saws-img/agarden-hss/agarden-hss-450x3.0x50x230t/agarden-hss-with-bg/AGARDEN HSS - 450X3.0X50X230T - DETALHE B.png";
import AgardenHSS450ImageC from "../../../assets/circular-saws-img/agarden-hss/agarden-hss-450x3.0x50x230t/agarden-hss-with-bg/AGARDEN HSS - 450X3.0X50X230T - COM FUNDO A.png";
import AgardenHSS450ImageD from "../../../assets/circular-saws-img/agarden-hss/agarden-hss-450x3.0x50x230t/agarden-hss-with-bg/AGARDEN HSS - 450X3.0X50X230T - DETALHE A.png";

import ErosCermet285ImageA from "../../../../src/assets/circular-saws-img/eros-cermet/without-bg/EROS CERMET - 285X.0X1.75X32X60T -  SEM FUNDOpng.png";
import ErosCermet285ImageB from "../../../../src/assets/circular-saws-img/eros-cermet/with-bg/EROS CERMET - 285X.0X1.75X32X60T - DETALHE B.png";
import ErosCermet285ImageC from "../../../../src/assets/circular-saws-img/eros-cermet/with-bg/EROS CERMET - 285X.0X1.75X32X60T - DETALHE A.png";
import ErosCermet285ImageD from "../../../../src/assets/circular-saws-img/eros-cermet/with-bg/EROS CERMET - 285X.0X1.75X32X60T - COM FUNDO B.png";


import AresTCT550A from "src/assets/circular-saws-img/ares-family/ares-tct-550x3/without-bg/ARES TCT - 550X3.5X3.0X140X140T - SEM FUNDO .png"

export interface Product {
  id: number;
  title: string;
  linha?: string;
  caracteristics?: any[];
  application: any[];
  relevant_types?: any[];
  eficience?: string;
  imageUrl: string;
  description: string;
  topics: string[];
  rows?: any[];
  othersImage?: any[];
}

export const rowsTableData = [
  { left: "AGARDEN DivineSteel", right: "LINHA M51 HIPERION" },
  { left: "AGARDEN TitanForge", right: "LINHA M35 HIPERION" },
  { left: "AGARDEN CelestialCut", right: "LINHA M2 HIPERION" },
];

export const products: Product[] = [
  {
    id: 1,
    title: "HSS",
    caracteristics: [
      "Serras de HSS",
      " Aço rápido integral",
      "Diâmetro: 150 a 630 mm",
    ],
    linha: "Linha AGARDEN",

    application: [
      "Para corte de Metais Ferrosos",
      "Para corte de Metais não Ferrosos",
    ],
    relevant_types: [
      "Sem Revestimento (Não ferrosos)",
      "Vaporizada (Ferrosos ).",
      "Tin. (Nitreto de Titânio ) (Ferrosos ).",
      "Tin.Al. (Ni.+Ti + Al.) (Ferrosos ).",
      "Revestimento Tin. Al + Cromo",
    ],
    imageUrl: AgardenHSS450ImageA,
    description: "Descrição do produto Centaurus",
    topics: ["Resistente", "Precisão"],
    othersImage: [
      AgardenHSS450ImageC,
      AgardenHSS450ImageD,
      AgardenHSS450ImageB,
    ],
  },

  {
    id: 2,
    title: "Metal Duro",
    caracteristics: [
      "  Ideal para o corte de material seriado;",
      "Alta resistência ao desgaste;",
      "Cortes mais precisos, perpendiculares e com excelente acabamento;",
      "Tempo reduzido de corte;",
      "Garantia de maior produtividade industrial.",
      "Cortes em série e alta produtividade.",
      "Diâmetro: 250 a 460 mm.",
    ],
    linha: "Linha ARES",
    application: [
      "Para corte de Metais Ferrosos ou Não Ferrosos",
      "Corte de Aço maciço",
      "Corte de Tubos de Aço",
      "Corte de Alumínio maciço e perfil",
    ],
    imageUrl:
    AresTCT550A,
    description: "Descrição do produto Pegasus",
    topics: ["Eficiente", "Durável"],
  },
  {
    id: 3,
    title: "Cermet",
    linha: "Linha EROS",
    caracteristics: [],
    application: [
      " Para corte de Aços em geral",
      "Ideal para o corte de secções maciças em",
      "aços de baixo, médio e alto carbono",
    ],
    eficience:
      "Como não possui um custo muito elevado, a serra cermet se torna um produto muito  vantajoso, afinal, é construída com  materiais reforçados e robustos que  promovem uma maior proteção aos profissionais contra possíveis detritos durante os processos industriais.",
    rows: rowsTableData,
    imageUrl: ErosCermet285ImageA,
    description: "Descrição do produto Cermet",
    topics: ["Alta durabilidade", "Corte preciso"],
    othersImage: [
      ErosCermet285ImageD,
      ErosCermet285ImageB,
      ErosCermet285ImageC,
    ],
  },
];

export const tableData = [
  {
    diameter: 250,
    bodyThickness: "1,70 - 1,75",
    cutThickness: 2.0,
    centralHole: "32 - 40",
    teeth: "54 - 60 - 72 - 80",
  },
  {
    diameter: 285,
    bodyThickness: "1,70 - 1,75",
    cutThickness: 2.0,
    centralHole: "32 - 40",
    teeth: "54 - 60 - 72 - 80 - 100",
  },
  {
    diameter: 315,
    bodyThickness: "1,70 - 2,25",
    cutThickness: "2,0 - 2,6",
    centralHole: "32 - 40 - 50",
    teeth: "54 - 60 - 72 - 80 - 100 - 120",
  },
  {
    diameter: 360,
    bodyThickness: "2,25 - 2,30",
    cutThickness: 2.6,
    centralHole: "32 - 40 - 50",
    teeth: "54 - 60 - 72 - 80 - 100 - 120",
  },
  {
    diameter: 425,
    bodyThickness: "2,25 - 2,30",
    cutThickness: "2,6 - 2,7",
    centralHole: "40 - 50",
    teeth: "54 - 60 - 72 - 80 - 100 - 120",
  },
  {
    diameter: 460,
    bodyThickness: "2,25 - 2,30",
    cutThickness: 2.7,
    centralHole: "40 - 50",
    teeth: "40 - 54 - 60 - 72 - 80 - 100 - 120",
  },
  {
    diameter: 560,
    bodyThickness: "2,50 - 2,80",
    cutThickness: "3,0 - 3,2",
    centralHole: "50 - 80",
    teeth: "40 - 50 - 60 - 72 - 80 - 100",
  },
  {
    diameter: 580,
    bodyThickness: "2,50 - 2,80",
    cutThickness: "3,0 - 3,2",
    centralHole: "50 - 80",
    teeth: "40 - 50 - 60 - 72 - 80 - 100",
  },
  {
    diameter: 660,
    bodyThickness: "3,00 - 3,20",
    cutThickness: "3,5 - 3,8",
    centralHole: "50 - 80",
    teeth: "50 - 60 - 72 - 80 - 100",
  },
  {
    diameter: 750,
    bodyThickness: 3.2,
    cutThickness: 3.8,
    centralHole: 80,
    teeth: "60 - 80 - 100 - 120",
  },
];
