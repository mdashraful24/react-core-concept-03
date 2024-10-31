import { useEffect, useRef, useState } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        } else {
            setError('');
            console.log(nameRef.current.value);
            console.log(emailRef.current.value);
            console.log(phoneRef.current.value);
            // console.log(`${nameRef.current.value} ${emailRef.current.value} ${phoneRef.current.value}`);
        }
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} defaultValue={'rojoni@sojoni.com'} type="email" name="email" id="" />
                <br />
                <input ref={phoneRef} onChange={handlePasswordChange}
                    type="password" name="password" id="" required />
                {/* <input ref={phoneRef}  type="password" name="password" id="" /> */}
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default RefForm;