import React, {useState} from 'react';
import {
    Form,
    FormBlock, Label,
    LabelBlock,
    PasswordField, PersonalDataConsent,
    Photo,
    PhotoBlock, RedLabel,
    RegistrationBlock, RegistrationButton,
    UsernameField,Pink

} from "./registrationStyles"
import {fontFamily} from "@mui/system";


const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isValidUser = username.length > 3;
    const isValidPassword = password.length > 3;

    return (
        <RegistrationBlock>
            <PhotoBlock>
                <Photo/>
            </PhotoBlock>
            <Pink>
                <LabelBlock>
                    <Label>
                        Хочешь с нами?
                        <RedLabel> Регистрируйся!</RedLabel>
                    </Label>
                </LabelBlock>
            </Pink>
            <FormBlock>
                <Form>
                    <UsernameField
                        placeholder="Имя пользователя"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={isValidUser ? 'valid' : 'invalid'}
                    />
                    <PasswordField type="password"
                                   placeholder="Пароль"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   className={isValidPassword ? 'valid' : 'invalid'}/>
                    <PersonalDataConsent>
                        <input type="checkbox" id="consent"/>
                        <label htmlFor="consent">
                            Согласен на обработку <span className="highlight">персональных данных</span>
                        </label>
                    </PersonalDataConsent>
                    <RegistrationButton>Зарегистрироваться</RegistrationButton>
                </Form>
            </FormBlock>
        </RegistrationBlock>
    );
};

export default Registration;