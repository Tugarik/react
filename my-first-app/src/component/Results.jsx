import Articles from './data/Articles';
import SingleResult from './subComps/SingleResult'
import './style/results.css'


function Results() {
    return (
        <div className='resultList'>
            <h1>Results List</h1>
            <div className="filterBox">
                <div className="resultSum">
                    {Articles.length} results
                </div>
                <div className="resultFilter">
                    <button className="resultAllBtn">Relevance</button>
                    <button className="resultNewBtn">Newest</button>
                    <button className="resultMoreBtn">More</button>
                </div>
            </div>
            <div className='resultBox'>
                {Articles.map((result, index) => (
                    <div key={index}>
                        <SingleResult result={result} />
                    </div>
                ))}
            </div>
        </div>

    )
};

export default Results;