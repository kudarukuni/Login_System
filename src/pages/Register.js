import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import InputIcon from '@material-tailwind/react/InputIcon';
import Button from '@material-tailwind/react/Button';
import Page from 'components/login/Page';
import Container from 'components/login/Container';
import React, {useState} from "react";
import registerUser from "../api/registerUser";
import useToken from "../hooks/useToken";
import {Link} from "react-router-dom";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "@material-tailwind/react";





export default function Register() {

    const { token, setToken } = useToken();

    const [flow, setFlow] = useState(1);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [role, setRole] = useState("");
    const [successful, setSuccessful] = useState(false);

    const [showModal, setShowModalCode] = React.useState(false);
    const [showModalErr, setShowModalCodeErr] = React.useState(false);

    const onChangeFirstName = (e) => {
        const name = e.target.value;
        setName(name);
    };


    const onChangePhone = (e) => {
        const phone = e.target.value;
        setPhone(phone);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangeCountry = (e) => {
        const country = e.target.value;
        setCountry(country);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangePassword1 = (e) => {
        const password1 = e.target.value;
        setPassword1(password1);
    };

    const onChangeRole = (e) => {
        const role = e.target.value;
        setRole(role);
    };




    const handleRegister = async e => {
        e.preventDefault();
        if(password.length < 6 || password !== password1) {
            setShowModalCodeErr(true);
            return;
        }
        const data = await registerUser({
            name, phone, email, role, country, password, password1
        });
        // setToken(token);
        console.log("===========");

        if(data.created){
            console.log(data.created);
            setShowModalCode(true)
        }
        else {
            console.log(data);
            setShowModalCodeErr(true)
        }

    }

    const doFlow = () => {
        setFlow(2);
    }

    const undoFlow = () => {
        setFlow(1);
    }

    if(flow === 1) {
        return (
            <Page>
                <Container>
                    <Card>
                        <CardHeader color="lightBlue">
                            <H5 color="white" style={{marginBottom: 0}}>
                                Register
                            </H5>
                        </CardHeader>
                        <CardBody>
                            <div className="mb-10 px-4">
                                <InputIcon
                                    type="text"
                                    color="lightBlue"
                                    placeholder="Name"
                                    iconName="account_circle"
                                    onChange={onChangeFirstName}
                                    value={name}
                                />
                            </div>
                            <div className="mb-10 px-4">
                                <InputIcon
                                    type="phone"
                                    color="lightBlue"
                                    placeholder="Phone"
                                    iconName="phone"
                                    onChange={onChangePhone}
                                    value={phone}
                                />
                            </div>
                            <div className="mb-10 px-4">
                                <InputIcon
                                    type="email"
                                    color="lightBlue"
                                    placeholder="Email Address"
                                    iconName="email"
                                    onChange={onChangeEmail}
                                    value={email}
                                />
                            </div>

                            {/*<div className="mb-4 px-4">*/}
                            {/*    <InputIcon*/}
                            {/*        type="password"*/}
                            {/*        color="lightBlue"*/}
                            {/*        placeholder="Password"*/}
                            {/*        iconName="lock"*/}
                            {/*        onChange={onChangePassword}*/}
                            {/*    />*/}
                            {/*</div>*/}

                        </CardBody>
                        <CardFooter>
                            <div className="flex justify-center">
                                <Button
                                    color="lightBlue"
                                    buttonType="link"
                                    size="lg"
                                    ripple="dark"
                                    onClick={doFlow}
                                >
                                    Next
                                </Button>

                            </div>
                            <p className="my-2 text-center">Already Have an account? <Link style={{color: "rgb(3, 169, 244)"}} to="/login"> Login</Link> </p>
                        </CardFooter>
                    </Card>
                </Container>
            </Page>
        );
    }
    else {
        return (
            <Page>
                <Container>
                    <Card>
                        <CardHeader color="lightBlue">
                            <H5 color="white" style={{marginBottom: 0}}>
                                Register
                            </H5>
                        </CardHeader>
                        <CardBody>
                            <div className="mb-10 px-4">
                                <InputIcon
                                    type="text"
                                    color="lightBlue"
                                    placeholder="Role"
                                    iconName="supervisor_account"
                                    onChange={onChangeRole}
                                    value={role}
                                />
                            </div>
                            <div className="mb-10 px-4">
                                <InputIcon
                                    type="text"
                                    color="lightBlue"
                                    placeholder="Country"
                                    iconName="flag"
                                    onChange={onChangeCountry}
                                    value={country}
                                />
                            </div>

                            <div className="mb-4 px-4">
                                <InputIcon
                                    type="password"
                                    color="lightBlue"
                                    placeholder="Password, 6 - 8 characters"
                                    iconName="lock"
                                    onChange={onChangePassword}
                                    value={password}
                                />
                            </div>

                            <div className="mb-4 px-4">
                                <InputIcon
                                    type="password"
                                    color="lightBlue"
                                    placeholder="Confirm Password"
                                    iconName="lock"
                                    onChange={onChangePassword1}
                                    valu={password1}
                                />
                            </div>

                        </CardBody>
                        <CardFooter>
                            <div className="flex justify-center flex-row">
                                <Button
                                    color="lightBlue"
                                    buttonType="link"
                                    size="lg"
                                    ripple="dark"
                                    onClick={undoFlow}
                                >
                                    Back
                                </Button>

                                <Button
                                    color="lightBlue"
                                    buttonType="link"
                                    size="lg"
                                    ripple="dark"
                                    onClick={handleRegister}
                                >
                                    Register
                                </Button>
                            </div>
                            <p className="my-2 text-center">Already Have an account? <Link style={{color: "rgb(3, 169, 244)"}} to="/login"> Login</Link> </p>
                        </CardFooter>
                    </Card>
                </Container>

                <Modal size="sm" active={showModal} toggler={() => setShowModalCode(false)}>
                    <ModalHeader toggler={() => setShowModalCode(false)}>
                        <p className="text-green-500">
                            Account Created
                        </p>
                    </ModalHeader>
                    <ModalBody>
                        <p className="text-base leading-relaxed text-gray-600 font-normal">
                            Account Created Successfully <br />
                            You may now login
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Link style={{color: "rgb(3, 169, 244)"}} to="/login">
                        <Button
                            color="green"
                            buttonType="link"
                            onClick={() => setShowModalCode(false)}
                            ripple="dark"
                        >
                            Login
                        </Button>
                        </Link>
                    </ModalFooter>
                </Modal>

                <Modal size="sm" active={showModalErr} toggler={() => setShowModalCodeErr(false)}>
                    <ModalHeader toggler={() => setShowModalCodeErr(false)}>
                        An Error Occurred
                    </ModalHeader>
                    <ModalBody>
                        <p className="text-base leading-relaxed text-gray-600 font-normal">
                            Please verify that the data you've entered is correct <br />
                            Password should be between 6 - 8 characters <br />
                            Note that all fields are required.
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="red"
                            buttonType="link"
                            onClick={(e) => setShowModalCodeErr(false)}
                            ripple="dark"
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>

            </Page>
        );
    }
}
