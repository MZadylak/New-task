import React, { useEffect, useState } from 'react';
import Api from './providers/Api';
import { Button, Main, Title, Quote, Row } from './styled';

const Task3 = () => {
    const [ quote, setQuote ] = useState('');
    const [ previousQuote, setPrevious ] = useState('');

    useEffect(() => {
        generateQuote(true);
    }, []);

    const getData = async () => {
        const api = new Api();
        const data = await api.loadData();
        return data;
    }

    const generateQuote = kind => {
        getData().then(data => {
            const number = Math.round(Math.random() * data.length);
            if(kind) {
                setPrevious(quote);
                setQuote(data[number]);
            } else {
                setQuote(previousQuote);
            };
        });
    }

    return (
        <Main>
            <Title>Task 3 - Quotes</Title>
            <Quote>{ quote.author }: '{ quote.quote }'</Quote>
            <Row>
                <Button visible={ previousQuote } onClick={ () => generateQuote(false) }>Prev</Button>
                <Button visible={ true } onClick={ () => generateQuote(true) }>Next</Button>
            </Row>
        </Main>
    )
}

export default Task3;