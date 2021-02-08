import styled from 'styled-components';

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
    transform: translateX(${props => props.percent - 100}%)  translateY(-50%);
    transition: transform 0.2s ease;
    width: 100%;
`;

export const DiskProgressInner = styled(ProgressInner)`
    background: hsl(${props => 120 - (props.percent * 120 / 100)}, 100%, 66%);
`;

export const Value = styled.div`
  text-align: right;
`;

