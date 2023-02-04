import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { SectionMenu } from './SectionMenu';
import { Provider } from './Provider';
import { prop } from 'ramda';

import {
  SectionContainer,
  SectionContent,
  SectionControl,
  SectionHeaderContainer,
  SectionTypeGroup,
  SectionTypeItem,
  SectionFooter,
} from './Section.styled';

const SectionType = ({ variant = 'default', ...props }) => {
  const options = [
    {
      variant: 'default',
      fill: '#E24E33',
      stroke: '#D44126',
    },
    {
      variant: 'high',
      fill: '#E24E33',
      stroke: '#D44126',
    },
    {
      variant: 'medium',
      fill: '#E68A3C',
      stroke: '#E68A3C',
    },
    {
      variant: 'low',
      fill: '#EFCC4C',
      stroke: '#EFCC4C',
    },
    {
      variant: 'fair',
      fill: '#72CEBC',
      stroke: '#72CEBC',
    },
    {
      variant: 'light',
      fill: '#5AAFED',
      stroke: '#5AAFED',
    },
    {
      variant: 'welcome',
      fill: '#6E6BEF',
      stroke: '#6E6BEF',
    },
  ];

  const items = options.filter(
    (item) => item.variant.toUpperCase() === variant.toUpperCase()
  );
  const renderType = items.map((item) => (
    <SectionTypeItem
      key={item.variant}
      variant={item.variant}
      bgColor={item.fill}
    />
  ));

  return <SectionTypeGroup style={props.style}>{renderType}</SectionTypeGroup>;
};

const SectionHeader = ({
  title = '',
  priority = '',
  config = {},
  ...props
}) => {
  const {} = props;

  return (
    <SectionHeaderContainer priority={priority} style={config}>
      {title && <h2>{title}</h2>}
      {priority && (
        <SectionType style={{ marginLeft: 'auto' }} variant={priority} />
      )}
    </SectionHeaderContainer>
  );
};

const Section = ({
  children,
  title = '',
  id,
  asCustom = '',
  hideMenu = false,
  priority = '',
  bgColor = '',

  ...props
}) => {
  const { layout: layoutStyle, header: headerStyle } =
    prop('config')(props) || {};

  const ref = useRef(100);
  const getClientHeight = () => {
    if (ref && ref.current) {
      return ref.current.clientHeight;
    }
    return 100;
  };
  return (
    <Provider>
      <SectionContainer
        priority={priority}
        className={`Section ${title}`}
        id={id}
        ref={ref}
        bgColor={bgColor}
        style={layoutStyle}
        {...props}
      >
        <SectionControl>
          {title && (
            <SectionHeader
              title={title}
              config={headerStyle}
              priority={priority}
            />
          )}
          {children && (
            <SectionContent asCustom={asCustom} className="SectionContent">
              {children}
            </SectionContent>
          )}
          {/* {!hideMenu && (
            <SectionMenu title="History" height={getClientHeight()} />
          )} */}
        </SectionControl>
        <SectionFooter />
      </SectionContainer>
    </Provider>
  );
};

Section.propTypes = {
  hideMenu: PropTypes.bool,
  config: PropTypes.object,
};

export { Section, SectionType, SectionContent, SectionHeader };
