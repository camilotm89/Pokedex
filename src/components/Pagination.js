import React from 'react';

const Pagination = (props) => {
    const {onLeftClick, onRightClick, page, totalPages} = props;

    return(
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span onClick={onLeftClick} aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">{page} de {totalPages}</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span onClick={onRightClick} aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;