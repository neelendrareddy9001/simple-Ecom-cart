import React from 'react'
import { Container, Row, Col, Button, From, Spinner,InputGroup } from 'react-bootstrap'
import { useThemeHook } from '../GlobalComponents/ThemeProvider'
import {Link} from '@reach/router'

const SignIn = () => {
    
    const [loading, setLoading] = useState(false);
    const [theme] = useThemeHook();
    
    return (
        <div>
            
        </div>
    )
}

export default SignIn
