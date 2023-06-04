import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Authentication = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <h1>Welcome Userr!</h1>
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
    );
}

export default Authentication;