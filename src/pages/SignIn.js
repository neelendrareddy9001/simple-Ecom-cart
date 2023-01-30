import React from 'react'
import { Container, Row, Col, Button, From, Spinner,InputGroup } from 'react-bootstrap'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'
import {Link} from '@reach/router'

const SignIn = () => {
    
    const [loading, setLoading] = useState(false);
    const [theme] = useThemeHook();
    
    return (
       <Container className='py-5 mt-5'>
            <Row className='justify-content-center mt-5'>
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded ${theme? 'text-light bg-dark' : 'text-black bg-light'}`}>
                    <h1 className={`text-center border-bottom pb-3 ${theme? 'text-dark-primary' : 'text-light-primary'}`}>
                        Sign In
                    </h1>
                    <Form>
                        <InputGroup className='mb-4 mt-5'>
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Control name="username" type="text" placeholder='Username' minLength={3}required/>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>  
    )
}

export default SignIn
