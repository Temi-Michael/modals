import { useState, useEffect } from "react"
import Popup from "./Popup"
import CopyToClipboard from "react-copy-to-clipboard";
import '../styles.css';
// <FontAwesomeIcon icon="fa-solid fa-copy" />


export default function Signup() {
    const [generateId, setGenerateId] = useState(false);
    const [generateKeyword, setGenerateKeyword] = useState(false);
    const [createPassword, setCreatePassword] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [alert, setAlert] = useState(false);
    const socialId = 232544553

    useEffect(() => {
        setIsDisabled(createPassword || generateKeyword);
    }, [createPassword, generateKeyword]);

    const handleCopyClick = () => {
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 3000);
    };

    return (
        <div>
            <button onClick={() => {
                return (
                    setGenerateId(true)
                )
            }} disabled={isDisabled}>Sign Up</button>
            <div className="generateId">
                <Popup trigger={generateId}>
                    <div>
                        <h3>Generate ID</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis, inventore tempore mollitia similique voluptates quam animi possimus modi nisi ab! Illo ducimus consectetur nulla doloremque quidem, consequuntur iste fugiat.</p>
                        <button onClick={() => {
                            return (
                                setGenerateId(false),
                                setCreatePassword(true)
                            )
                        }}>Generate ID</button>
                    </div>
                </Popup>
                <Popup trigger={createPassword}>
                    <h3>Generate ID</h3>
                    <p>Click on the numbers to copy it.</p>
                    <CopyToClipboard text={socialId}>
                        <h4 onClick={handleCopyClick}>{socialId}</h4>
                    </CopyToClipboard>

                    {/* Conditionally render the alert */}
                    {alert && <div className="alert">Copied To Clipboard</div>}
                    <form>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" />
                        <button onClick={() => {
                            return (
                                setCreatePassword(false),
                                setGenerateId(true)
                            )
                        }}>Previous Option</button>
                        <button onClick={() => {
                            return (
                                setGenerateKeyword(true),
                                setCreatePassword(false)
                            )
                        }}>Generate Keyword</button>
                    </form>
                </Popup>
                <Popup trigger={generateKeyword}>
                    <h3>Generate Keywords</h3>
                    <button onClick={() => {
                        return (
                            setCreatePassword(true),
                            setGenerateKeyword(false)
                        )
                    }}>Previous</button>
                </Popup>
            </div>
        </div>
    )
};
