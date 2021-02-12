import styled from 'styled-components';
import { diskHue, tempHue } from './util';

export const Progress = styled.div`
  width: 100%;
  height: 10px;
  position: relative;
  background: #eee;
  border-radius: 5px;
  overflow: hidden;
`;

export const ProgressInner = styled.div`
  height: 10px;
  background: #1c73ff;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateX(${(props) => props.percent - 100}%) translateY(-50%);
  transition: transform 0.2s ease;
  width: 100%;
`;

export const DiskProgressInner = styled(ProgressInner)`
  background: hsl(${(props) => diskHue(props.percent)}, 100%, 66%);
`;

export const Value = styled.div`
  text-align: right;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 40px 160px 1fr 80px;
  grid-template-rows: repeat(${(props) => props.rows}, 60px);
  grid-row-gap: 0;
  grid-column-gap: 0;
  align-items: center;
`;

export const SectionTitle = styled.div`
  height: 60px;
  line-height: 60px;
  vertical-align: middle;
  white-space: nowrap;
`;

export const RoundButton = styled.button`
  border-radius: 999em;
  border: none;
  box-shadow: none;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: 32px;
  height: 32px;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  -webkit-app-region: no-drag;
  &:hover {
    opacity: 0.5;
  }
  &:focus {
    color: ${(props) => props.background};
    background: ${(props) => props.color};
    outline: none;
  }
  &:active {
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export const Scroll = styled.div`
  height: ${props => props.count * 60}px;
  background: #383838;
  padding: 0 30px;
  border-radius: 10px;
  overflow: auto;
`;

