import React from "react";
import _ from 'lodash';
import PropTypes from 'prop-types';

const Pagination = props => {
    const { itemsCount, pageSize, currentPage, onPageChange } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    return (<nav>
                <ul className="pagination">
                    { pages.map(page => (
                        <li key={page} className={ page === currentPage ? "page-item active" : "page-item"}>
                            <button onClick={() => onPageChange(page)} className="page-link">{page}</button>
                        </li>
                    ))}
                </ul>
            </nav>);
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
