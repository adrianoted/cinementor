import styled from 'styled-components';

const Pagination = styled.div`
  width: 100%;
  max-width: 700px;
  height: 50px;
  margin: 20px auto;
  text-align: center;
  position: relative;
  color: ${props => props.theme.color.main};
  border-top: 1px solid ${props => props.theme.color.one};
  border-bottom: 1px solid ${props => props.theme.color.one};

 &:before, &:after {
  content: "";
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
}
&:before {
  top: -1px;
}
&:after {
  bottom: -1px;
}

@-webkit-keyframes hoverAnimation {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes hoverAnimation {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.pagination {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
}
.pagination li {
  display: block;
  float: left;
  padding: 5px;
}
.pagination li:first-child {
  border: none;
}
.pagination a,
.pagination span {
  min-width: 40px;
  height: 40px;
  padding: 0;
  display: block;
  font-size: 16px;
  line-height: 35px;
  box-sizing: border-box;
  border-radius: 50%;
  border: none;
  background: none;
}
.pagination a {
  outline: none;
  position: relative;
  transition: all 170ms linear;
}
.pagination a:before {
  content: "";
  width: 0;
  height: 0;
  cursor: pointer;
  left: 50%;
  position: absolute;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: all 170ms linear;
  border-radius: 50%;
  top: 50%;
  background: rgba(var(--clrOneAlpha), 0.7);
}
.pagination li:not(.disabled) a:hover:not(.active) {
  color: ${props => props.theme.color.one};
}
.pagination li:not(.disabled) a:hover:not(.active):before {
  animation: hoverAnimation 510ms linear forwards;
  height: 40px;
  width: 40px;
}
.pagination .first a:hover:before, .pagination .last a:hover:before {
  animation: none !important;
} 
.pagination li.disabled {
  opacity: 0.4;
  pointer-events: none;
  a {
    cursor: default;
  }
}

.pagination a.active {
  border: 2px solid ${props => props.theme.color.one};
  color: ${props => props.theme.color.one};
  font-weight: bold;
}
.pagination .prev,
.pagination .next {
  font-size: 14px;
}

/*
 * EMBED STYLING
*/
@media (max-width: 800px) {
  html,
  body {
    height: 600px;
    overflow: hidden;
    width: 800px;
  }
}

  @media (max-width: 480px) {
    .pagination {
      display: flex;
      justify-content: space-around;
      height: 100%;
    }
    .pagination li {
      padding: 0;
      align-self: center;
    }
    .pagination a,
    .pagination span {
      min-width: 30px;
      height: 30px;
      line-height: 28px;
      font-size: 12px;
    }
  }

`;

export default Pagination;