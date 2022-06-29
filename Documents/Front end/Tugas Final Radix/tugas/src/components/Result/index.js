import React from 'react';
import './result.css';

import { AiOutlineStar } from 'react-icons/ai';
import { IoMdQuote } from 'react-icons/io';

export default function Result({data}) {
  const title = data.title;
  const author = data.author;
  const desc = data.desc;
  const citation = data.citation;
  const version = data.version;
  const source = data.source;

  return(
    <div className='result'>
      <div className='result-main'>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <h3>{desc}</h3>
        <div className='result-sub'>
          <AiOutlineStar className='result-sub-icon' />
          <h4>Save</h4>
          <IoMdQuote className='result-sub-icon' />
          <h4>Cite</h4>
          <h4>Cited by {citation}</h4>
          <h4>Related articles</h4>
          <h4>All {version} versions</h4>
        </div>
      </div>
      <h1 className='result-source'>{source}</h1>
    </div>
  );
};
