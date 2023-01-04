import './singleresult.css'

function SingleResult(props) {
    return (
        <div className="result">
            <div className="article_stats">
                <div className='votes'><strong>{props.result.votes}</strong> votes</div>
                <div className='answers'>&#10004; <strong>{props.result.answers}</strong> answers</div>
                <div className='views'><strong>{props.result.views}</strong> views</div>
            </div>
            <div className='article_text'>
                <a className="title" href="#"><h2>{props.result.title}</h2></a>
                <p>{props.result.description}</p>
            </div>
        </div >
    )
}
export default SingleResult;