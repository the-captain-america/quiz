import styled, { css } from 'styled-components';

const monokiTheme = css`
  span {
    font-size: 14px;
    line-height: 21px;

    &.string {
      color: #ff8b39;
    }
    &.number {
      color: darkorange;
    }
    &.boolean {
      color: #f97e72;
    }
    &.null {
      color: #f97e72;
    }
    &.key {
      color: #2ee2fa;
    }
  }
`;

const greyTheme = css`
  span {
    font-size: 14px;
    line-height: 21px;
    &.string {
      color: white;
    }
    &.number {
      color: white;
    }
    &.boolean {
      color: white;
    }
    &.null {
      color: white;
    }
    &.key {
      color: grey;
    }
  }
`;

const themePicker = (theme) =>
  ({
    GREY: greyTheme,
    MONOKI: monokiTheme,
    DEFAULT: monokiTheme,
  }[(theme && theme.toUpperCase()) || 'DEFAULT']);

const SyntaxPre = styled.pre`
  outline: 1px solid transparent;
  padding: 8px;
  margin: 0px;
  color: white;
  margin-top: 16px;
  background: #2e2c34;
  ${(props) =>
    props.theme &&
    css`
      ${themePicker(props.theme)}
    `}
`;

const syntaxHighlight = (json) => {
  const updateJson = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return updateJson.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = 'number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key';
        } else {
          cls = 'string';
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean';
      } else if (/null/.test(match)) {
        cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
    }
  );
};

export { SyntaxPre, syntaxHighlight };
