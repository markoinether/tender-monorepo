import React, {Component} from 'react'
import {Card, Col} from 'react-bootstrap'
import { Link } from "react-router-dom"
import "./TokenCard.scss"

type TokenCardProps = {
    title: string,
    url: string
}

export default class TokenCard extends Component<TokenCardProps> {

    static defaultProps = {
        title: 'Card Title',
        url: '/'
    }

    render() {
        const { url, title } = this.props

        return (
            <Col md={{span:4}}>
                <Link to={url} className="card-link">
                    <Card className="card" style={{ width: '100%' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Link>
            </Col>
        )
    }
}