import * as React from 'react';
import { 
  SiDocker, SiPython, SiReact, SiRust, 
  SiAmazonaws,SiElasticsearch 
} from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';

type Data = {
  [key: string]: {
    icon: JSX.Element | null;
    title: string;
  };
};

const data: Data = {
  python: { icon: <SiPython />, title: 'Python' },
  cpp: { icon: null, title: 'C++' },
  react: { icon: <SiReact />, title: 'React 🔰' },
  vuejs: { icon: <FaVuejs />, title: 'Vue.js'},
  r: { icon: null, title: 'R' },
  rust: { icon: <SiRust />, title: 'Rust 🔰' },
  docker: { icon: <SiDocker />, title: 'Docker' },
  ruby: {icon: <DiRuby />, title: 'Ruby'},
  elasticsearch: {icon:<SiElasticsearch />, title:'Elasticsearch'},
  aws: {icon: <SiAmazonaws />, title: 'AWS 🔰'}
};

export default data;
