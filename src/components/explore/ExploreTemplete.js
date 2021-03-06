import React from 'react';
import Items from '../common/ThumbnailPost';

import {
  ExploreTempleteUl,
  ExploreTempleteUlLtTwo,
} from './ExploreTemplete.style';

const imageList = [
  [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
    },
  ],
  [
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
  ],
  [
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
    },
  ],
  [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
    },
  ],
  [
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
  ],
  [
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
    },
  ],
  [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
    },
  ],
  [
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
    },
  ],
];

export default function ExploreTemplete() {
  return imageList.length > 2 ? (
    <ExploreTempleteUl>
      {imageList.map((url, i, a) => {
        if (i === 1) return;
        return i === 0 ? (
          <li>
            <ul>
              <li key="item0">
                <Items imgUrl={url[0].original} isCarousel={url.length > 1} />
              </li>
              <li key="item1">
                <Items imgUrl={a[1][0].original} isCarousel={a[1].length > 1} />
              </li>
            </ul>
          </li>
        ) : (
          <li key={`item${i}`}>
            <Items imgUrl={url[0].original} isCarousel={url.length > 1} />
          </li>
        );
      })}
    </ExploreTempleteUl>
  ) : (
    <ExploreTempleteUlLtTwo>
      {imageList.map((url, i) => (
        <li key={`item${i}`}>
          <Items imgUrl={url[0].original} isCarousel={url.length > 1} />
        </li>
      ))}
    </ExploreTempleteUlLtTwo>
  );
}
