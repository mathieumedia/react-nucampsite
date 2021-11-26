import React from 'react'
import {Card, CardImg, CardBody, CardTitle} from 'reactstrap'
import CommentForm from './CommentForm'

function renderComments(comments){
    if(comments){
        return (
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                {comments.map(c => (
                    <p>{c.text} <br/> --{c.author} {formatDate(c.date)}</p>
                ))}
                <CommentForm  />
            </div>
        )
    }
}

function formatDate(date){
    if(date){
        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date)))
    } 
}

function renderCampsite(campsite){
    if(campsite){
        return (
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardTitle>{campsite.description}</CardTitle>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
function CampsiteInfo (props) {
    
    if(props.campsite){
        return (
            <div className="container">
                <div className='row'>
                    {renderCampsite(props.campsite)}
                    {renderComments(props.comments)}
                </div>
            </div>
        ) 
    }

    return <div/>

}

export default CampsiteInfo
