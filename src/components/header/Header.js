import React, { useState } from 'react';
import Inputs from '../common/Inputs';
import { Link } from 'react-router-dom';
import {
  HeaderBlock,
  HeaderNav,
  HeaderWrap,
  HeaderProfile,
} from './Header.styles';
import HeaderModal from './HeaderModal';
import { bodyBgWhite } from '../../styles/variables';
import {
  HomeIcon,
  PaperPlaneIcon,
  FindPeopleIcon,
  HeartIcon,
} from '../../styles/commonIcons/SvgIcons';
import { iconList } from '../../styles/commonIcons/path';

const Header = () => {
  const [navState, setNavState] = useState(false);

  const state = {
    home: true,
    direct: false,
    findpeople: false,
    heart: false,
    profile: false,
  };

  const [isActive, setActive] = useState(state);

  const clickHome = () => {
    setActive({
      home: true,
      direct: false,
      findpeople: false,
      heart: false,
      profile: false,
    });
  };

  const clickDirect = () => {
    setActive({
      home: false,
      direct: true,
      findpeople: false,
      heart: false,
      profile: false,
    });
  };

  const clickFindPeople = () => {
    setActive({
      home: false,
      direct: false,
      findpeople: true,
      heart: false,
      profile: false,
    });
  };

  const clickHeart = () => {
    navState
      ? setActive(state)
      : setActive({
          home: false,
          direct: false,
          findpeople: false,
          heart: true,
          profile: false,
        });
  };

  const clickProfile = () => {
    const test = isActive;
    navState
      ? setActive(test)
      : setActive({
          home: false,
          direct: false,
          findpeople: false,
          heart: false,
          profile: true,
        });
    console.log(test);
  };

  const onClick = () => {
    navState === true ? setNavState(false) : setNavState(true);
  };
  return (
    <HeaderWrap>
      <HeaderBlock>
        <div>
          <h1>logo</h1>
          <div>
            <Inputs
              InputWidth={176}
              InputMargin={'0'}
              InputColor={bodyBgWhite}
              placeholder="검색"
            />
            <span></span>
            <div></div>
          </div>
        </div>
        <HeaderNav>
          <li>
            <Link to="/">
              <HomeIcon onClick={clickHome}>
                {isActive.home === false ? (
                  <path d={iconList.inactiveHome}></path>
                ) : (
                  <path d={iconList.activeHome}></path>
                )}
              </HomeIcon>
            </Link>
          </li>
          <li>
            <Link to="/direct">
              <PaperPlaneIcon aria-label="direct" onClick={clickDirect}>
                {isActive.direct === false ? (
                  <path d={iconList.inactivePaperPlane}></path>
                ) : (
                  <path d={iconList.activePaperPlane}></path>
                )}
              </PaperPlaneIcon>
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <FindPeopleIcon onClick={clickFindPeople}>
                {isActive.findpeople === false ? (
                  <path d={iconList.inactiveFindPeople}></path>
                ) : (
                  <path d={iconList.activeFindPeople}></path>
                )}
              </FindPeopleIcon>
            </Link>
          </li>
          <li onClick={onClick}>
            <HeartIcon aria-label="활동 피드" onClick={clickHeart}>
              {isActive.heart === false ? (
                <path d={iconList.inactiveHeart}></path>
              ) : (
                <path d={iconList.activeHeart}></path>
              )}
            </HeartIcon>
          </li>
          {navState ? <HeaderModal /> : null}
          <li onClick={onClick}>
            <HeaderProfile onClick={clickProfile}></HeaderProfile>
          </li>
          {navState ? <HeaderModal /> : null}
        </HeaderNav>
      </HeaderBlock>
    </HeaderWrap>
  );
};
export default Header;
