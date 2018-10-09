import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CategoryNavContainer from '../CategoryNavContainer/CategoryNavContainer';
import CityHeader from '../CityHeader/CityHeader';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import FeedbackButton from '../FeedbackButton/FeedbackButton';

import {
  LINKS,
  NO_CATEGORY,
  NO_CITY,
} from '../../constants';

import style from './Header.scss';

const Header = props => (
  <header className={style.header}>
    <div className={style.govContainer}>
      <HamburgerButton
        className={style.hamburger}
        onClick={props.openNav}
        label="open navigation menu"
      />

      <div className={style.compactTitle}>National Cities Performance</div>
      <div className={style.compactSubtitle}>Framework Dashboard</div>
    </div>
    <div className={style.mainContainer}>
      <div className={style.titleContainer}>
       

        <NavLink
          className={style.titleLinkWrapper}
          to={`/${NO_CITY}/${NO_CATEGORY}`}
        >
          <h1 className={style.title}>National Cities Performance</h1>
        </NavLink>

        <div className={style.subtitle}>Framework Dashboard</div>
      </div>
      <div className={style.orgContainer}>
      
        { props.onFeedbackPage || <FeedbackButton /> }
      </div>
    </div>

    {props.cityName && (
      <CityHeader
        cityName={props.cityName}
        cityId={props.cityId}
        categoryColorName={props.categoryColorName}
      />
    )}

    <CategoryNavContainer
      // pass in categoryId so the nav updates when the category changes
      categoryId={props.categoryId}
      cityId={props.cityId}
      cityName={props.cityName}
    />
  </header>
);

Header.propTypes = {
  cityId: PropTypes.string.isRequired,
  cityName: PropTypes.string,
  categoryColorName: PropTypes.string,
  categoryId: PropTypes.string.isRequired,
  openNav: PropTypes.func.isRequired,
  onFeedbackPage: PropTypes.bool,
};

export default Header;
