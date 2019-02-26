import React, { Component } from 'react';
import PaginationStyle from 'styles/components/Pagination';

import Link from 'next/link';

class Pagination extends Component {

  state = {
    firstPageLimit: "",
    lastPageLimit: ""
  }

  componentDidMount() {
    this.checkPaginationLimits();
  }


  componentDidUpdate(prevProps) {
    const prevPage = parseInt(prevProps.query.page);
    const currentPage = parseInt(this.props.query.page);

    if (currentPage !== prevPage) {
      this.checkPaginationLimits();
    }
  }

  // Disable arrow button
  checkPaginationLimits = () => {
    const currentPage = parseInt(this.props.query.page);
    const currentTotalPage = parseInt(this.props.totPages);

    currentPage === 1 ? this.setState({ firstPageLimit: "disabled" }) : this.setState({ firstPageLimit: "" })
    currentPage === currentTotalPage ? this.setState({ lastPageLimit: "disabled" }) : this.setState({ lastPageLimit: "" })
  }


  render() {
    const { query, pathname, totPages } = this.props;
    let currentPage = parseInt(query.page);

    return (
      <PaginationStyle>
        <ul className="pagination">

          <li className={`first ${this.state.firstPageLimit}`} title={`Go to first page`}>
            <Link
              href={{
                pathname,
                query: { ...query, page: 1 }
              }}
              // as={`genres/${query.cat}/${query.genre.toLowerCase()}`}
              // as={alias}
              prefetch
            ><a>&#10094;&#10094; &nbsp; {currentPage > 1 ? "1" : ""} </a>
            </Link>
          </li>

          <li><span>{currentPage > 1 ? "..." : ""}</span></li>

          {currentPage > 1 &&
            <li className="arrowPrev" title={`Jump to page ${currentPage > 10 ? currentPage - 10 : 1}`}>
              <Link
                href={{
                  pathname,
                  query: { ...query, page: currentPage > 10 ? currentPage - 10 : 1 }
                }}
                prefetch
              ><a>&#10094;</a>
              </Link>
            </li>
          }

          {currentPage > 2 &&
            <li className="prev" title={`Go to page ${currentPage - 1 || 1}`}>
              <Link
                href={{
                  pathname,
                  query: { ...query, page: currentPage - 1 || 1 }
                }}
                prefetch
              ><a>{currentPage - 1}</a>
              </Link>
            </li>
          }

          <li title={`current page - ${currentPage}`}>
            <a href="javascript:void(0)" className="active">{currentPage}</a>
          </li>

          {currentPage < totPages - 1 &&
            <li className="next" title={`Go to page ${currentPage < totPages ? currentPage + 1 : totPages}`}>
              <Link
                href={{
                  pathname,
                  query: { ...query, page: currentPage < totPages ? currentPage + 1 : totPages }
                }}
                prefetch
              ><a>{currentPage < totPages ? currentPage + 1 : totPages}</a>
              </Link>
            </li>
          }

          {currentPage < totPages &&
            <li className="arrowNext" title={`Jump to page ${currentPage <= totPages -10 ? currentPage + 10 : totPages}`}>
              <Link
                href={{
                  pathname,
                  query: { ...query, page: currentPage <= totPages -10 ? currentPage + 10 : totPages }
                }}
                prefetch
              ><a>&#10095;</a>
              </Link>
            </li>
          }

          <li><span>{currentPage < totPages ? "..." : ""}</span></li>

          <li className={`last ${this.state.lastPageLimit}`} title="Go to last page">
            <Link
              href={{
                pathname,
                query: { ...query, page: totPages }
              }}
              prefetch
            >
              <a>{currentPage === totPages ? "" : totPages} &nbsp; &#10095;&#10095;</a>
            </Link>
          </li>


        </ul>
      </PaginationStyle>
    );
  }
}


export default Pagination;