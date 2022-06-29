import './App.css';

import { GoogleScholar, ProfileImage } from './assets/img';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiSearch } from 'react-icons/hi';
import { FaGraduationCap } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

import { Filter, Result } from './components';

export default function App() {
  const filterAnyTime = [
    "Since 2022",
    "Since 2021",
    "Since 2018",
    "Custom range...",
  ];
  const filterSortByRelevance = [
    "Sort by date",
  ];
  const filterAnyType = [
    "Review articles",
  ];

  const results = [
    {
      title: "Radix entomolaris: identification and morphology",
      author: "OLE, Carlsen, V Alexandersen - European Journal, 1990 - Wiley Online Library",
      desc: "Lorem ipsum dolor sit amet consectetur adiscpicit elit. Lorem ipsum dolor sit amet consectetur adiscpicit elit.",
      citation: 208,
      version: 4,
      source: "[PDF] academia.edu",
    },
    {
      title: "Radix Ranunculi ternati: review of its chemical constituents, pharmacology, quality control and clinical applications",
      author: "C Wang, J Wang, M Gao, P Gao, D Gao… - Journal of Pharmacy …, 2022 - academic.oup.com",
      desc: "Objectives Raculi ternati (RRT) is widely used as traditional and folk medicindistributed in China, as well as in Kyushu and Shikoku in Japan. Although RRT has a shor",
      citation: 1,
      version: 3,
      source: "",
    },
  ];

  return(
    <div className="main">
      <header>
        <div className='header-left'>
          <GiHamburgerMenu className='header-hamburger' />
          <img src={GoogleScholar} alt="" />
          <input type="text" id="inputText" name="inputText" />
          <div className="searchIcon">
            <HiSearch className='header-search' />
          </div>
        </div>
        <div className='header-right'>
          <img src={ProfileImage} alt="" />
        </div>
      </header>

      <div className='bheader'>
        <div className='bheader-left'>
          <h1>Articles</h1>
          <h3>About 550,000 results (<b>0.03</b> sec)</h3>
        </div>
        <div className='bheader-right'>
          <FaGraduationCap className='bheader-right-icon' />
          <h3>My profile</h3>
          <AiFillStar className='bheader-right-icon' />
          <h3>My library</h3>
        </div>
      </div>

      <content>
        <div className='filters'>
          <Filter title="Any time" items={filterAnyTime} />
          <Filter title="Sort by relevance" items={filterSortByRelevance} />
          <Filter title="Any type" items={filterAnyType} />
        </div>
        <div className='results'>
          {results.map(r => <Result data={r} />)}
        </div>
      </content>
    </div>
  );
};
