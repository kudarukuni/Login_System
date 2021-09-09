import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Checkbox from '@material-tailwind/react/Checkbox';
import Button from '@material-tailwind/react/Button';

import Page from 'components/login/Page';
import Container from 'components/login/Container';
import React, { useState } from "react";
import {Link, Redirect} from 'react-router-dom';

import 'assets/styles/tailwind2.css';
import loginUser from "../api/loginUser";
import useToken from "../hooks/useToken";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "@material-tailwind/react";

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showModal, setShowModalCode] = React.useState(false);

    let data;

    const { token, setToken } = useToken();

    if(token) {
        return <Redirect to='/'  />

    }

    const handleSubmit = async e => {
        e.preventDefault();
        data = await loginUser({
            email,
            password
        });
        // setToken(token);
        console.log(data);
        if(data.success === true){
            setToken(data);
        }
        else{
            setShowModalCode(true)
        }
    }



    return (
        <Page>
            <Container>
                <Card>
                    <CardHeader color="lightBlue">
                        <H5 color="white" style={{ marginBottom: 0 }}>
                            Login
                        </H5>
                    </CardHeader>

                    <form onSubmit={handleSubmit}>
                        <CardBody>
                            <div className="mb-12 px-4 bg-bb">
                                <InputIcon
                                    type="email"
                                    color="lightBlue"
                                    placeholder="Email Address"
                                    iconName="email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-8 px-4">
                                <InputIcon
                                    type="password"
                                    color="lightBlue"
                                    placeholder="Password"
                                    iconName="lock"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>

                        </CardBody>
                        <CardFooter>
                            <div className="flex flex-col justify-center bg-bb">
                                <Button
                                    color="lightBlue"
                                    buttonType="link"
                                    size="lg"
                                    ripple="dark"
                                >
                                    Submit
                                </Button>

                                <p className="my-2 text-center">Don't Have an account? <Link style={{color: "rgb(3, 169, 244)"}} to="/register"> Register</Link> </p>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </Container>

            <Modal size="sm" active={showModal} toggler={() => setShowModalCode(false)}>
                <ModalHeader toggler={() => setShowModalCode(false)}>
                    An Error Occurred
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 font-normal">
                        Username or password is incorrect.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="red"
                        buttonType="link"
                        onClick={(e) => setShowModalCode(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>

        </Page>
    );
}

