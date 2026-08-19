// ==========================================
// 1. 完整导入所有图片（路径精确，无重复导入）
// ==========================================

// --- 专著图片导入（已彻底剔除原 book01，从 02 开始） ---
import book02 from '../assets/books/monograph/book_02.png'
import book03 from '../assets/books/monograph/book_03.png'
import book04 from '../assets/books/monograph/book_04.png'
import book05 from '../assets/books/monograph/book_05.png'
import book06 from '../assets/books/monograph/book_06.png'
import book07 from '../assets/books/monograph/book_07.png'
import book08 from '../assets/books/monograph/book_08.png'
import book09 from '../assets/books/monograph/book_09.png'
import book10 from '../assets/books/monograph/book_10.png'
import book11 from '../assets/books/monograph/book_11.png'
import book12 from '../assets/books/monograph/book_12.png'

// --- 编著图片导入（共 7 张，edit06 为英文版、edit07 为中文版 Urban Informatics） ---
import book13 from '../assets/books/edit/edit_01.png'
import book14 from '../assets/books/edit/edit_02.png'
import book15 from '../assets/books/edit/edit_03.png'
import book16 from '../assets/books/edit/edit_04.png'
import book17 from '../assets/books/edit/edit_05.png'
import book18 from '../assets/books/edit/edit_06.png' 
import book19 from '../assets/books/edit/edit_07.jpg'


// ==========================================
// 2. 完整的数据列表（专著剔除重复 + 编著完全补全）
// ==========================================
export const shiBooks = [
  // ================================
  // 【专著】完全剔除 Urban Informatics，只留纯专著
  // ================================
  {
    id: 1,
    type: "monograph",
    year: 2021,
    title: "Reliable Spatiotemporal Data Analysis",
    publisher: "Science Press",
    image: book02,
    description: "This book systematically establishes theories, methods, and key technologies for reliable spatiotemporal data analysis. It focuses on solving uncertainty and quality challenges in geographic spatial data, providing strong technical support for high-precision mapping and spatial intelligence."
  },
  {
    id: 2,
    type: "monograph",
    year: 2005,
    title: "Principles of Modeling Uncertainties in Spatial Data and Spatial Analyses",
    publisher: "Science Press",
    image: book04,
    description: "Authored by Wenzhong Shi and first published in 2005 with a revised edition in 2015, this academic monograph focuses on uncertainty theories in geospatial data and analysis. It covers the mathematical foundations of uncertainty, positional error models, digital terrain model uncertainties, integrated attribute and positional error modeling, spatial topology, overlay analysis, and data quality control. The expanded second edition incorporates cutting-edge topics such as spatial data mining and uncertainty visualization."
  },
  {
    id: 3,
    type: "monograph",
    year: 2017,
    title: "Enhancing Remote Sensing Change Detection through Spatial Information Accuracy",
    publisher: "SinoMaps Press",
    image: book03,
    description: "Focusing on the frontiers of spatial statistics, this book details multi-scale spatial modeling, geostatistical analysis, and cellular automata. It provides rigorous mathematical frameworks for simulating complex urban and environmental dynamics."
  },
  {
    id: 4,
    type: "monograph",
    year: 2006,
    title: "Principles and Modeling of Spatial Analysis",
    publisher: "Science Press",
    image: book07,
    description: "Authored by Changqing Zhu and Wenzhong Shi and published in 2006, this monograph explores mathematical theories and methodologies for spatial analysis in GIS. It covers fundamental models such as overlay, buffer, statistical, and network analyses, alongside digital elevation model construction, accuracy evaluation, and multi-dimensional quantitative frameworks"
  },
  {
    id: 5,
    type: "monograph",
    year: 2013,
    title: "Theory and Technology of Geographic National Conditions Monitoring",
    publisher: "Science Press",
    image: book05,
    description: "An authoritative guide focusing on error modeling, precision assessment, and lineage tracking in spatial data processing. Essential reading for researchers handling high-risk geospatial decision-making systems."
  },
  {
    id: 6,
    type: "monograph",
    year: 2010,
    title: "Three-Dimensional Spatial Data Modeling and Algorithms",
    publisher: "Science Press",
    image: book06,
    description: "This book presents breakthrough methods in 3D GIS data structures, including TIN, TEN, and 3D property boundary modeling. It covers the transition from 2D mapping to true 3D digital twins."
  },
  {
    id: 7,
    type: "monograph",
    year: 2003,
    title: "Principles and Algorithms of Geographic Information Systems",
    publisher: "Science Press",
    image: book10,
    description: "Authored by Lixin Wu and co-authors, this book is an academic monograph belonging to the Geographic Information Science Series and was published in 2003. Divided into two parts—GIS Principlesand GIS Algorithms—it systematically outlines foundational GIS theories such as generalized geographic systems, 2D/3D spatial data models, temporal GIS, and map projections, alongside core algorithms for spatial data processing, graphical analysis, data mining, digital terrain analysis, and spatial statistics. Widely used as a university textbook for surveying and mapping science and technology disciplines, it emphasizes algorithmic analysis and practical application to provide theoretical foundations for GIS development."
  },
  {
    id: 8,
    type: "monograph",
    year: 1999,
    title: "Accuracy Analysis and Quality Control of Spatial Data in GIS",
    publisher: "Shanghai Scientific and Technical Publisherss",
    image: book11,
    description: "Systematically explores error sources, statistical tests, digitization accuracy, adjustment models, uncertainty modeling, and quality control/sampling inspection methods for spatial data in Geographic Information Systems (GIS)."
  },
  {
    id: 10,
    type: "monograph",
    year: 2003,
    title: "Fuzzy Spatial Information Processing",
    publisher: "Wuhan University Press",
    image: book09,
    description: "his book systematically introduces the theories, methods, and applications of fuzzy mathematics and fuzzy logic in the processing, analysis, and management of spatial information. It addresses the uncertainties and fuzziness inherent in geographic information systems (GIS) and spatial data, covering key topics such as fuzzy spatial data models, fuzzy spatial query, spatial reasoning, and fuzzy clustering analysis. It serves as a valuable reference and textbook for researchers, engineers, and students in fields such as GIS, surveying and mapping, remote sensing, and computer science."
  },
  {
    id: 11,
    type: "monograph",
    year: 2009,
    title: "Principles of Modeling Uncertainties in Spatial Data and Spatial Analyses",
    publisher: "CRC Press",
    image: book12,
    description: "Systematically explores the uncertainties in spatial data and spatial analyses within Geographic Information Systems (GIS), providing theoretical foundations and methods to control and process these uncertainties."
  },

  // ==========================================
  // 【编著 (Edited Books)】类型统一为 "edit"
  // ==========================================
  {
    id: 18,
    type: "edit",
    year: 2024,
    title: "城市信息学",
    publisher: "Science Press",
    image: book19,
    description: "The Chinese edition of Urban Informatics, edited by Wenzhong Shi, Michael Goodchild, Michael Batty, Mei-Po Kwan, and An Zhang, with translation by Fanxin Zeng and Ye L\u00fc. Published by Science Press in 2024, this 569-page volume presents urban science, sensing, data infrastructure, urban computing, applications, and future directions for urban informatics."
  },
  {
    id: 12,
    type: "edit",
    year: 2021,
    title: "Urban Informatics",
    publisher: "Springer",
    image: book18, // ★ 完美归位：Urban Informatics 作为编著归于此处，并引用 edit06.png
    description: "Edited by W. Shi, M. Goodchild, M. Batty, M.-P. Kwan, and A. Zhang. This is the world’s first open-access handbook consisting of 941 pages that systematically establishes the theoretical framework, core technologies, and engineering applications of urban informatics. It serves as the foundational textbook for smart city research and education."
  },
  {
    id: 13,
    type: "edit",
    year: 2015,
    title: "Uncertainty Modelling and Quality Control for Spatial Data",
    publisher: "CRC Press Taylor & Francis Group",
    image: book14,
    description: "Edited by W.Z. Shi, B. Wu, and A. Stein. This volume compiles leading research on managing geographical information uncertainty, advanced spatial data quality indicators, and rigorous quality control methodologies for modern geographic information science."
  },
  {
    id: 14,
    type: "edit",
    year: 2012,
    title: "Advances in Geo-Spatial Information Science",
    publisher: "Taylor & Francis",
    image: book15,
    description: "Edited by W.Z. Shi, Michael Goodchild, Brian Lees, and Yee Leung. Spanning 285 pages, this book brings together cutting-edge advancements in spatial intelligence, geographical data mining, and theoretical GIS science from top global researchers."
  },
  {
    id: 15,
    type: "edit",
    year: 2012,
    title: "Advances in Spatial Data Handling and GIS",
    publisher: "Springer Verlag",
    image: book16,
    description: "Edited by W.Z. Shi, Anthony G.O. Yeh, Yee Leung, and Chenghu Zhou. A 239-page compilation focusing on the technical frontiers of spatial data structures, spatial analysis optimization, and high-performance geographical information systems."
  },
  {
    id: 16,
    type: "edit",
    year: 2008,
    title: "Quality Aspects of Spatial Data Mining",
    publisher: "CRC Press Taylor & Francis Group",
    image: book17,
    description: "Edited by A. Stein, W.Z. Shi, and W. Bijker. This 364-page book explores the intersections of data mining and spatial statistics, focusing specifically on how data uncertainty propagates through knowledge discovery processes in geospatial data."
  },
  {
    id: 17,
    type: "edit",
    year: 2002,
    title: "Spatial Data Quality",
    publisher: "Taylor & Francis",
    image: book13, // 对应第一个预留的编著封面 edit01.png
    description: "Edited by W.Z. Shi, P.F. Fisher, and M. F. Goodchild. A milestone 313-page edited volume addressing foundational data quality challenges, spatial accuracy assessment, and error management frameworks in early 21st-century GIS infrastructure."
  }
]
