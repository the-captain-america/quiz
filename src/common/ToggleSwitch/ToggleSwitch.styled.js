import styled, { css } from 'styled-components';
import { mbFn, mtFn } from '@utils/styles';

const ToggleLabel = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: #b2b2b2;
  span {
    font-size: 11px;
    color: white;
  }
`;

const ToggleSwitchContainer = styled.div`
  ${mtFn};
  ${mbFn};
  ${(props) =>
    props.optionLabel &&
    css`
      .switch-button {
        &:before {
          font-weight: 500;
          font-size: 13px;
          color: white;
          text-transform: capitalize;
          content: '${props.optionLabel}';
        }
      }
    `}
  .switch-button-label-span {
    color: #f8f7fa;
  }
  ${(props) =>
    props.isActive &&
    css`
      .switch-button-label-span {
        position: relative;
        color: #a39faa;
      }
    `}

  .switch-button {
    /* background: #38363a; */
    background: #313133;
    border-radius: 30px;
    overflow: hidden;
    width: 240px;
    text-align: center;
    /* font-size: 18px; */
    letter-spacing: 1px;

    position: relative;
    padding-right: 120px;
    position: relative;
    box-shadow: inset 0px -1px 1px 0px #49484d;
    box-shadow: inset 0px -0.5px 0px 0.5px #49484d;

    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      pointer-events: none;
    }

    &-checkbox {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 2;

      &:checked + .switch-button-label:before {
        transform: translateX(120px);
        transition: transform 200ms linear;
        .switch-button-label-span {
          position: relative;
          color: #a39faa;
        }
      }

      & + .switch-button-label {
        position: relative;
        padding: 12px 0;
        display: block;
        user-select: none;
        pointer-events: none;
        font-weight: 500;
        font-size: 13px;
        text-transform: capitalize;
        &:before {
          content: '';
          background: #57535c;
          border-top: 1px solid #5f5c63;
          height: calc(100% - 8px);
          width: calc(100% - 8px);
          position: absolute;
          left: 4px;
          top: 4px;
          border-radius: 20px;
          transform: translateX(0);
          transition: transform 200ms;
        }

        .switch-button-label-span {
          position: relative;
        }
      }
    }
  }
`;

export { ToggleSwitchContainer, ToggleLabel };
